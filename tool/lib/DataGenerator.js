/*global module*/
(function () {
  'use strict';
  // core libraries
  const fs = qx.tool.utils.Promisify.fs;
  var util = require('util');

  // 3rd party packages
  var path = require('upath');
  var walker = require('walker');

  // mkdirp is supposed to return a promise...except that it doesn't
  var mkdirp = qx.tool.utils.Promisify.promisify(require('mkdirp'));

  var DataGenerator = function (config) {
    if (config.verbose) {
      console.log('Current config %s', JSON.stringify(config));
    }

    this.config = config;
    this.demos = [];
    this.entries = [];
  };
  DataGenerator.prototype = {
    /**
     * catches all the entries (demo) from config.demoPath
     *
     * @param done
     */
    catchEntries: function (done) {
      var dataGenerator = this;

      var demoPath = this.config.demoPath;
      if (demoPath.substr(-1) === path.sep) {
        demoPath = demoPath.substr(0, demoPath.length - 1);
      }
      demoPath += path.sep;

      console.log('- Catch entries in %s', demoPath);

      walker(demoPath)
        .on('file', function (entry, stat) {
          entry = path.normalize(entry);
          if (dataGenerator.config.verbose) {
            console.log('- read file %s (total amount (%s)', entry, dataGenerator.entries.length);
          }
          var filePath = entry.replace(demoPath, '');
          dataGenerator.entries.push({
            entry: entry,
            path: filePath,
            level: filePath.split(path.sep).length,
            type: 'file',
            stat: stat
          });
        })
        .on('dir', function (entry, stat) {
          entry = path.normalize(entry);
          if (dataGenerator.config.verbose) {
            console.log('- read directory %s (total amount (%s)', entry, dataGenerator.entries.length);
          }

          var directoryPath = entry.replace(demoPath, '');
          // avoid empty entries
          if (directoryPath.length > 0) {
            dataGenerator.entries.push({
              entry: entry,
              path: directoryPath,
              level: directoryPath.split(path.sep).length,
              type: 'dir',
              stat: stat
            });
          }

        })
        .on('end', function () {
          console.log('- %s entries (files and directories) found', dataGenerator.entries.length);
          done(null, dataGenerator.entries);
        });
    },

    /**
     * Creates json file with all demos
     *
     * @param {function} done
     */
    createJsonDataFile: function (done) {
      var dataGenerator = this;
      var directories = this.getDirectories();

      /**
       * Get directories. The variable directory has the following structure:
       *
       * <pre>
       * {
       *    entry: 'source/demo/ui/json',
       *    path: 'ui/json',
       *    type: 'dir',
       *    stat: [Object object],
       *    level: 2
       * }
       * </pre>
       */
      directories.forEach(function (directory) {
        // add only directories at first level to ignore sub-folders at 2nd level like data
        if (directory.level === 1) {
          if (dataGenerator.config.verbose) {
            console.log('- Demo "%s" added to data generator', directory.path);
          }
          dataGenerator.addDemo(directory.path);
        }
      });

      // get files
      var fileCounter = 0;
      var files = this.getFiles();

      /**
       * Get files. The variable file has the following structure:
       *
       * <pre>
       * {
       *    entry: 'source/demo/virtual/json/tree.json',
       *    path: 'virtual/json/tree.json',
       *    type: 'file',
       *    stat: [Object object],
       *    level: 2
       * }
       * </pre>
       */
      files.forEach(function (file) {
        // add only files at second level to ignore unneeded files
        if (file.level === 2) {

          var jsFilePath = dataGenerator.convertHtmlFilePathToJsFilePath(file.path);
          // check if javascript file exists
          if (fs.existsSync(jsFilePath)) {
            fileCounter++;

            // get the tags and class name from javascript file
            dataGenerator.getTagsFromJsFile(jsFilePath, function (err, tags) {
              var filePathParts = file.path.split('/');
              if (dataGenerator.config.verbose) {
                console.log('- Demo test "%s" added to data generator', file.path);
              }
              dataGenerator.addDemoTest(
                filePathParts[0],
                filePathParts[1],
                tags
              );
              fileCounter--;

              // are all files processed
              if (fileCounter === 0) {
                // save json file with all demos
                var demoDataJsonFile = dataGenerator.config.demoDataJsonFile;
                var dirName = path.dirname(demoDataJsonFile);
                mkdirp(dirName).then(function () {
                  dataGenerator.saveAsJsonFile(demoDataJsonFile, dataGenerator.getDemos());
                  done(null);
                });
              }
            });
          }
        }
      });
    },

    /**
     * Convert a html file path to js file path
     *
     * @param {string} filePath
     * @returns {*}
     */
    convertHtmlFilePathToJsFilePath: function (filePath) {
      // get the equivalent js file
      return path.join(
        this.config.jsSourcePath,
        filePath.replace('.html', '.js')
      );
    },

    /**
     * copy all javascript files to config.scriptDestinationPath
     *
     * @param {function} done
     */
    copyJsFiles: function (done) {
      var dataGenerator = this;
      var files = this.getFiles('.html');
      var fileCounter = 0;
      files.forEach(function (file) {
        if (file.level === 2) {
          var demoDataJsonFilePath = path.dirname(dataGenerator.config.demoDataJsonFile);
          var demoCategory = dataGenerator.getDemoCategoryFromFile(file.path);
          var className = path.join(
            'qxl',
            'demobrowser',
            'demo',
            demoCategory.category,
            demoCategory.name
          );
          var jsFilePath = path.join(dataGenerator.config.classPath, className + '.js');
          if (fs.existsSync(jsFilePath)) {
            fileCounter += 1;
            dataGenerator.copyJsFile(
              jsFilePath,
              path.join(
                demoDataJsonFilePath,
              demoCategory.category,
              demoCategory.name,
              util.format(
                  'qxl.demobrowser.demo.%s.%s.js',
                  demoCategory.category,
                  demoCategory.name
                )
              ),
              function (err) {
                if (err) {
                  console.error(err);
                }
                fileCounter -= 1;

                // Are all file are copied
                if (fileCounter === 0) {
                  done(null);
                }
              }
            );
          }

        }
      });
    },

    /**
     * copy single javascript file
     *
     * @param {string} sourcePath
     * @param {string} targetPath
     * @param {function} done
     */
    copyJsFile: function (sourcePath, targetPath, done) {
      var dataGenerator = this;

      let p = path.dirname(targetPath);
      if (!fs.existsSync(p)) {
        mkdirp.sync(p);
      }

      var readStream = fs.createReadStream(sourcePath);
      readStream.on("error", function (err) {
        done(err);
      });
      var writeStream = fs.createWriteStream(targetPath);
      writeStream.on("error", function (err) {
        if (dataGenerator.config.verbose) {
          console.error('! %s not copied to %s', sourcePath, targetPath);
        }
        done(err);
      });
      writeStream.on("close", function () {
        if (dataGenerator.config.verbose) {
          console.log('%s copied to %s', sourcePath, targetPath);
        }
        done();
      });
      readStream.pipe(writeStream);
    },

    /**
     * Adds a demo to internal data store
     *
     * @param {string} demoName
     */
    addDemo: function (demoName) {
      this.demos.push({
        classname: demoName,
        tests: []
      });
    },

    /**
     * Adds a test to a specific demo.
     *
     * @param {string} demoName
     * @param {string} testName
     * @param {object} tags
     */
    addDemoTest: function (demoName, testName, tags) {
      this.demos.forEach(function (item) {
        if (item.classname === demoName) {
          var title = path.basename(testName, '.html').replace('_', ' ');
          var testNameParts = testName.split('_');
          var nr = 0;
          if (testNameParts.length === 2) {
            nr = testNameParts[1].replace('.html', '');
          }
          item.tests.push({
            name: testName,
            tags: tags,
            title: title,
            nr: nr
          });
        }
      });
    },

    /**
     * Get @tag's and qx classes from a specific js file
     *
     * @param {string} jsFilePath
     * @param {function} done
     */
    getTagsFromJsFile: function (jsFilePath, done) {
      fs.readFile(jsFilePath, 'utf8', function (err, data) {
        if (err) {
          return done(err);
        }
        var content = data.split("\n");
        var tags = [];
        content.forEach(function (line) {
          var tagsRegex = /\@tag\s(.*)/;
          var qooxdooRegex = /(qx\.[^(;\s]*)\(/;
          var match;

          if (match = tagsRegex.exec(line)) {
            tags.push(match[1]);
          }
          if (match = qooxdooRegex.exec(line)) {
            tags.push(match[1]);
          }
        });

        return done(null, tags);
      });
    },

    /**
     * Returns the internal data
     *
     * @returns {Array}
     */
    getDemos: function () {
      return this.demos;
    },

    /**
     * Save the internal data to a json file
     *
     * @param fileName
     * @param content
     * @param done
     */
    saveAsJsonFile: function (fileName, content, done) {
      var data = JSON.stringify(content, null, 4);
      fs.writeFile(fileName, data, function (err) {
        if (err) {
          console.error(err);
        } else {
          console.info('- Created ' + fileName);
          if (done !== null && typeof done === 'function') {
            done(null);
          }
        }
      });
    },

    /**
     * Extract category name and file name for path
     *
     * @param {string} filePath
     * @returns {{name: string, category: string}}
     */
    getDemoCategoryFromFile: function (filePath) {
      var fileName = filePath.replace(this.config.demoPath, '');
      var fileNameParts = fileName.split('/');

      return {
        category: fileNameParts[0],
        name: fileNameParts[1] ? path.basename(fileNameParts[1], '.html') : 'undefined'
      };
    },

    /**
     * Get all files and directories
     *
     * @returns {Array}
     */
    getEntries: function () {
      return this.entries;
    },

    /**
     * Get all files from config.demoPath
     *
     * @returns {Array}
     */
    getFiles: function (nameFilter) {
      return this.entries.filter(function (file) {
        var include = file.type === 'file';
        if (include && nameFilter !== undefined) {
          include = file.entry.indexOf(nameFilter) > 0;
        }
        return include;
      });
    },

    /**
     * Get all directories from config.demoPath
     *
     * @returns {Array}
     */
    getDirectories: function (nameFilter) {
      return this.entries.filter(function (directory) {
        var include = directory.type === 'dir';
        if (include && nameFilter !== undefined) {
          include = directory.entry.indexOf(nameFilter) > 0;
        }
        return include;
      });
    },

    /**
     * Merge jobs. Using own method to give possibility to hook into the merging
     *
     * @param {object} existingJobs
     * @param {object} newJobs
     * @returns {object} merged jobs
     */
    mergeJobs: function (existingJobs, newJobs) {
      for (var key in newJobs) {
        if (newJobs.hasOwnProperty(key)) {
          existingJobs[key] = newJobs[key];
        }
      }
      return existingJobs;
    }
  };

  module.exports = DataGenerator;
}());
