const fs = require("fs");

qx.Class.define("qxl.demobrowser.compile.CompilerApi", {
  extend: qx.tool.cli.api.CompilerApi,

  members: {
    async load() {
      this.addListener(
        "changeCommand",
        function () {
          let command = this.getCommand();
          if (command instanceof qx.tool.cli.commands.Compile) {
            command.addListener("writtenApplication", async (evt) => {
              await this.__build(evt.getData());
            });
          }
          if (command instanceof qx.tool.cli.commands.Deploy) {
            command.addListener("afterDeploy", async (evt) => {
              await this.__deploy(evt.getData());
            });
          }
        },
        this
      );
      return this.base(arguments);
    },

    /**
              let data = {
              targetDir: target.getOutputDir(),
              deployDir: deployDir,
              argv: argv,
              application: app
            };
      */
    __deploy(data) {
      console.info(">>> Installing dependencies ...");
      const path = this.require("upath");
      console.info(">>> deploy files ...");
      return Promise.all([
        qx.tool.utils.files.Utils.sync(
          path.join(data.targetDir, "demobrowser", "demo"),
          path.join(data.deployDir, "demobrowser", "demo")
        ),
        qx.tool.utils.files.Utils.sync(
          path.join(data.targetDir, "demobrowser", "script"),
          path.join(data.deployDir, "demobrowser", "script")
        ),
      ]);
    },

    /**
     * Fired when writing of single application is complete; data is an object containing:
     *   maker {qx.tool.compiler.makers.Maker}
     *   target {qx.tool.compiler.targets.Target}
     *   appMeta {qx.tool.compiler.targets.meta.ApplicationMeta}
     */
    __build(data) {
      let application = data.appMeta.getApplication();
      let className = application.getClassName();
      if (className !== "qxl.demobrowser.Application") {
        return;
      }

      console.info(">>> Installing dependencies ...");
      const path = this.require("upath");
      const async = this.require("async");
      // needed by DataGenerator
      this.require("walker");
      console.info(
        ">>> Generating Demobrowser data... this might take a while"
      );
      let command = this.getCommand();
      let analyser = data.maker.getAnalyser();
      const templateDir = application.getTemplatePath();
      const outputDir = data.maker.getTarget().getOutputDir();
      const sourceDir = analyser.findLibrary("qxl.demobrowser").getRootDir();
      let targetClass = command.resolveTargetClass(
        command.getTargetType()
      );
      let app = "demobrowser";

      return new qx.Promise((fullfilled) => {
        const DataGenerator = require(path.join(
          sourceDir,
          "tool/lib/DataGenerator"
        ));
        // global vars
        const config = {
          demoPath: path.join(sourceDir, "source/demo/"),
          demoDataJsonFile: path.join(outputDir, app, "script/demodata.json"),
          classPath: path.join(sourceDir, "source/class"),
          jsSourcePath: path.join(
            sourceDir,
            "source/class/qxl/demobrowser/demo"
          ),
          demoConfigJsonFile: path.join(outputDir, app, "config.demo.json"),
          verbose: command.argv.verbose,
        };

        let appInfos = [];
        let dataGenerator = new DataGenerator(config);
        async.series(
          [
            (cb) => {
              console.info("- Start building...");
              cb();
            },
            // catches all the demos from config.demoPath
            dataGenerator.catchEntries.bind(dataGenerator),
            // Creates json file with all demos
            dataGenerator.createJsonDataFile.bind(dataGenerator),
            // copy all javascript files to config.scriptDestinationPath
            dataGenerator.copyJsFiles.bind(dataGenerator),
            (cb) => {
              console.info("- Get applications");
              let environment = {
                "qx.allowUrlVariants": true,
                "qx.allowUrlSettings": true,
                "qx.contrib": false,
                "qx.icontheme": ["Tango", "Oxygen"],
              };

              analyser.setEnvironmentCheck(environment);
              let files = dataGenerator.getFiles(".html");
              files.forEach((file) => {
                if (file.level === 2) {
                  let demoCategory = dataGenerator.getDemoCategoryFromFile(
                    file.path
                  );
                  let className =
                    "qxl.demobrowser.demo." +
                    demoCategory.category +
                    "." +
                    demoCategory.name;
                  let outDir = path.join(
                    demoCategory.category,
                    demoCategory.name
                  );
                  let library = analyser.getLibraryFromClassname(className);
                  if (!library) {
                    console.error("! no class found for " + file.path);
                    return;
                  }
                  appInfos.push({
                    app: new qx.tool.compiler.app.Application(className, [
                      "qx.theme.Indigo",
                      "qx.theme.IndigoDark",
                      "qx.theme.Modern",
                      "qx.theme.Simple",
                      "qx.theme.Classic",
                      "qx.theme.TangibleLight",
                      "qx.theme.TangibleDark",
                      "qx.log.appender.Native",
                      "qx.log.appender.Console",
                    ]).set({
                      theme: "qx.theme.Indigo",
                      analyser: analyser,
                      environment: environment,
                      name: className,
                      outputPath: path.join(app, "script", outDir),
                      writeIndexHtmlToRoot: false,
                      include: [
                        "qx.theme.Indigo",
                        "qx.theme.IndigoDark",
                        "qx.theme.Modern",
                        "qx.theme.Simple",
                        "qx.theme.Classic",
                        "qx.theme.TangibleLight",
                        "qx.theme.TangibleDark",
                      ],

                      templatePath: templateDir,
                    }),

                    className: className,
                    fileName: analyser.getClassFilename(className),
                  });
                }
              });
              cb();
            },
            (cb) => {
              console.info("- Compiling ...");
              let target = new targetClass(outputDir);
              target.set({
                generateIndexHtml: false,
                analyser: analyser,
              });

              async.eachSeries(
                appInfos,
                (appInfo, cb) => {
                  let dest = path.join(
                    target.getOutputDir(),
                    appInfo.app.getOutputPath(),
                    "index.js"
                  );
                  let src = appInfo.fileName;
                  this.__fileDateDiffers(src, dest).then((needsWork) => {
                    if (!needsWork) {
                      cb();
                      return;
                    }
                    // Calculate dependencies and write it out
                    appInfo.app.setAnalyser(analyser);
                    appInfo.app.calcDependencies();
                    if (command.argv.verbose) {
                      console.info(
                        "- Writing class " +
                          appInfo.app.getClassName() +
                          " into " +
                          appInfo.app.getOutputPath()
                      );
                    }
                    target
                      .generateApplication(
                        appInfo.app,
                        appInfo.app.getEnvironment()
                      )
                      .then(() => cb())
                      .catch((err) => {
                        console.error(err.message);
                        cb(err);
                      });
                  });
                },
                cb
              );
            },
            (cb) => {
              qx.tool.utils.files.Utils.sync(
                path.join(sourceDir, "source/demo/"),
                path.join(outputDir, app, "demo")
              )
                .then(() => cb())
                .catch((err) => {
                  console.error(err.message);
                  cb(err);
                });
            },
            (cb) => {
              console.info("- Demo build finished.");
              cb();
            },
          ],
          fullfilled
        );
      });
    },

    async __fileDateDiffers(src, dest) {
      let srcStat = await qx.tool.utils.files.Utils.safeStat(src);
      if (!srcStat) {
        // nothing to coy in this case
        return false;
      }
      if (!fs.existsSync(dest)) {
        return true;
      }
      let destStat = await qx.tool.utils.files.Utils.safeStat(dest);
      if (!destStat || srcStat.mtime.getTime() > destStat.mtime.getTime()) {
        return true;
      }
      return false;
    },
  },
});

module.exports = {
  CompilerApi: qxl.demobrowser.compile.CompilerApi,
};
