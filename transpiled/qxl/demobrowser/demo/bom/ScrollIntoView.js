(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.log.Logger": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.bom.ScrollIntoView", {
    extend: qx.application.Native,
    statics: {
      test: function test() {
        var ids = ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"];

        for (var i = 0, l = ids.length; i < l; i++) {
          var el = document.getElementById(ids[i]);
          qx.log.Logger.info("Width: " + ids[i] + ": offset=" + el.offsetWidth + ", scroll=" + el.scrollWidth + ", client=" + el.clientWidth);
          qx.log.Logger.info("Height: " + ids[i] + ": offset=" + el.offsetHeight + ", scroll=" + el.scrollHeight + ", client=" + el.clientHeight);
        }
      }
    }
  });
  qxl.demobrowser.demo.bom.ScrollIntoView.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ScrollIntoView.js.map?dt=1586350623166