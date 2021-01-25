qx.Class.define("qxl.demobrowser.compile.LibraryApi", {
  extend: qx.tool.cli.api.LibraryApi,

  members: {
    async load() {
      let command = this.getCompilerApi().getCommand();
      if (command instanceof qx.tool.cli.commands.Compile) {
        command.addListener("made", async () => await this.__onMade());
      }
    },

    __onMade() {
      console.info(">>> Generating Demobrowser data... this might take a while");
      let command = this.getCompilerApi().getCommand();
      const maker = command.getMaker();
      let analyser = maker.getAnalyser();
      const templateDir = command.getTemplateDir();
      const outputDir = maker.getTarget().getOutputDir();
      const sourceDir = analyser.findLibrary("qxl.demobrowser").getRootDir();
      let targetClass = command.resolveTargetClass(command._getConfig().targetType);

      return new qx.Promise(fullfilled => {
        let app = "demobrowser";

		    const path = this.require("upath");
        const async = this.require("async");

		    // needed by DataGenerator
		    this.require('walker');
        this.require('mkdirp');

        const DataGenerator = require(path.join(sourceDir, "tool/lib/DataGenerator"));
        // global vars
        const config = {
          demoPath: path.join(sourceDir,"source/demo/"),
          demoDataJsonFile: path.join(outputDir, app, "script/demodata.json"),
          classPath: path.join(sourceDir,"source/class"),
          jsSourcePath: path.join(sourceDir,"source/class/qxl/demobrowser/demo"),
          demoConfigJsonFile: path.join(outputDir, app, "config.demo.json"),
          verbose: command.argv.verbose
        };
        let appInfos = [];
        let dataGenerator = new DataGenerator(config);
        async.series([
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
              "qx.icontheme": ["Tango", "Oxygen"]
            };
            analyser.setEnvironmentCheck(environment);
            let files = dataGenerator.getFiles('.html');
            files.forEach(file => {
              if (file.level === 2) {
                let demoCategory = dataGenerator.getDemoCategoryFromFile(file.path);
                let className = 'qxl.demobrowser.demo.' + demoCategory.category + '.' + demoCategory.name;
				        let outDir = path.join(demoCategory.category, demoCategory.name);
                let library = analyser.getLibraryFromClassname(className);
                if (!library) {
                  console.error("! no class found for " + file.path);
                  return;
                }
                appInfos.push({
                  app: new qx.tool.compiler.app.Application(className, [
                    "qx.theme.Indigo",
                    "qx.theme.Modern",
                    "qx.theme.Simple",
                    "qx.theme.Classic",
                    "qx.log.appender.Native",
                    "qx.log.appender.Console"
                  ]).set({
                    theme: "qx.theme.Indigo",
                    analyser: analyser,
                    environment: environment,
                    name: className,
                    outputPath: path.join(app, "script", outDir),
                    writeIndexHtmlToRoot: false,
                    include: [
                      "qx.theme.Indigo",
                      "qx.theme.Modern",
                      "qx.theme.Simple",
                      "qx.theme.Classic"
                    ],
                    templatePath: templateDir
                  }),
                  className: className
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
              analyser: analyser
            });
            async.eachSeries(appInfos,
              (appInfo, cb) => {
                // Calculate dependencies and write it out
                appInfo.app.setAnalyser(analyser);
                appInfo.app.calcDependencies();
                if (command.argv.verbose) {
                  console.info("- Writing class " + appInfo.app.getClassName() + " into " + appInfo.app.getOutputPath());
                }
                target.generateApplication(appInfo.app, appInfo.app.getEnvironment())
                  .then(() => cb())
                  .catch((err) => {
                    console.error(err.message);
                    cb(err);
                  });
              },
              cb)
          },
          (cb) => {
            qx.tool.utils.files.Utils.sync(path.join(sourceDir,"source/demo/"), path.join(outputDir, app, "demo"))
              .then(() => cb())
              .catch((err) => {
                console.error(err.message);
                cb(err);
              });
          },
          (cb) => {
            console.info("- Demo build finished.");
            cb();
          }
        ], fullfilled);
      });
    }
  }
});

module.exports = {
  LibraryApi: qxl.demobrowser.compile.LibraryApi
};
