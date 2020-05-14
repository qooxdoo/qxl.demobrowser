(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "construct": true,
        "require": true
      },
      "qx.util.ResourceManager": {
        "construct": true
      },
      "qx.bom.Stylesheet": {
        "construct": true
      },
      "qxl.demobrowser.DemoBrowser": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Thomas Herchenroeder (thron7)
       * Fabian Jakobs (fjakobs)
       * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * The main application class.
   *
   * @asset(qxl/demobrowser/*)
   *
   * @ignore (qx.$$appRoot)
   * 
   */
  qx.Class.define("qxl.demobrowser.Application", {
    extend: qx.application.Standalone,
    construct: function construct() {
      qx.application.Standalone.constructor.call(this); // Include CSS files

      var uri = qx.util.ResourceManager.getInstance().toUri("qxl/demobrowser/css/style.css");
      qx.bom.Stylesheet.includeFile(uri);
      uri = qx.util.ResourceManager.getInstance().toUri("qxl/demobrowser/css/sourceview.css");
      qx.bom.Stylesheet.includeFile(uri);
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      // overridden
      main: function main() {
        qxl.demobrowser.Application.prototype.main.base.call(this); // Enable logging in source (or debug build)

        // Initialize the viewer
        this.viewer = new qxl.demobrowser.DemoBrowser();
        this.getRoot().add(this.viewer, {
          edge: 0
        });
      },
      // overridden
      finalize: function finalize() {
        qxl.demobrowser.Application.prototype.finalize.base.call(this);
        this.viewer.dataLoader(qx.$$appRoot + "script/demodata.json");
      }
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._disposeObjects("viewer");
    }
  });
  qxl.demobrowser.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1589490209973