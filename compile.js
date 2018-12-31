function compile(data, callback) {
  debugger;
  const { execSync } = require('child_process');
  console.info("run npm install");
  execSync('npm install',  {stdio: 'inherit'});
  this.addListener("made",  (e) => new qx.Promise((fullfiled) => {
      debugger;
      const DataGenerator = require(path.join(process.cwd(), "tool/lib/DataGenerator"));
      const async = require("async");
      const name = data.applications[0].name;
      const output = data.target.outputPath;
      let analyser = this._getMaker().getAnalyser();

      // global vars
      const config = {
        demoPath: "source/demo/",
        demoDataJsonFile: path.join(output, name, "script/demodata.json"),
        classPath: "source/class",
        jsSourcePath: "source/class/qxl/demobrowser/demo",
        demoConfigJsonFile: path.join(output, name, "config.demo.json"),
        verbose: this.argv.verbose
      };
      let appInfos = [];
      let dataGenerator = new DataGenerator(config);
      async.series([
        (cb) => {
          console.info("\nDEMO BUILD STARTED");
          cb();
        },
        // catches all the demos from config.demoPath
        dataGenerator.catchEntries.bind(dataGenerator),
        // Creates json file with all demos
        dataGenerator.createJsonDataFile.bind(dataGenerator),
        // copy all javascript files to config.scriptDestinationPath
        dataGenerator.copyJsFiles.bind(dataGenerator),
        (cb) => {
          console.info("\nget apps" );          
          let environment = {
            "qx.allowUrlVariants" : true,
            "qx.allowUrlSettings" : true,
            "qx.contrib": false,
            "qx.icontheme": ["Tango", "Oxygen"]
          };
          analyser.setEnvironmentCheck(environment);
          let files = dataGenerator.getFiles('.html');
          files.forEach(file => {
            if (file.level === 2) {
              let demoCategory = dataGenerator.getDemoCategoryFromFile(file.path);
              let className = 'qxl.demobrowser.demo.' +  demoCategory.category + '.' + demoCategory.name;
              let library = analyser.getLibraryFromClassname(className);
              if (!library) {
               console.info("no class found for " + file.path);
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
                  outputPath: path.join(name, "/script"),
                  writeIndexHtmlToRoot: false,
                  include: [
                    "qx.theme.Indigo",
                    "qx.theme.Modern",
                    "qx.theme.Simple",
                    "qx.theme.Classic"
                  ]
                }),
                className: className
              });
            }
          });
          cb();
        },
        (cb) => {
           console.info("DEMO BUILD START COMPILE");          
           // clone target - it is still used in appMaker!
           let clazz = this._getMaker().getTarget().constructor;
           let target = new clazz(output);
           if (data.target.type === "build") {
            target.setMinify("off");
          }
           target.set({
           generateIndexHtml: false
           , analyser: analyser

          });
          target.addPathMapping("source-output/demobrowser/script/source-output", "../..");
          target.addPathMapping("build-output/demobrowser/script/build-output/resource", "../../resource");

           async.eachSeries(appInfos,
            (appInfo, cb) => {
              target.set({
                scriptPrefix: appInfo.className + "-"
               });
                  // Calculate dependencies and write it out
              appInfo.app.setAnalyser(analyser);
              appInfo.app.calcDependencies();
              if (this.argv.verbose) {
                console.info("Writing class " + appInfo.app.getClassName() + " into " + appInfo.app.getOutputPath());
             }   
             target.generateApplication(appInfo.app,  appInfo.app.getEnvironment(), function(err) {
                if (err)
                  return cb(err);
                cb();
              });
            },
            cb)           
        },
        (cb) => {
          qx.tool.compiler.files.Utils.sync("source/demo", path.join(output, name, "demo"))
             .then(() => cb())
             .catch((err) => cb(err));
        },
        (cb) => {
          console.info("\nDEMO BUILD FINISHED");
          cb();
        }
      ], fullfiled);
    }));
    callback(null, data);
}