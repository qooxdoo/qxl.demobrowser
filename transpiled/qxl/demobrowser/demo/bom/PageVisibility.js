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
      "qx.bom.PageVisibility": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.bom.PageVisibility", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.PageVisibility.prototype.main.base.call(this);
        var page = new qx.bom.PageVisibility();
        var log = this.log;
        page.on("change", function () {
          log("----------- visibility change event -----------");
        }); // poll for the states

        setInterval(function () {
          var hidden = page.isHidden();
          log(+new Date() + " --- " + "hidden: <span style='color:" + (hidden ? "red" : "green") + ";'>" + hidden + "</span> | " + "state:" + page.getVisibilityState());
        }, 1000);
      },
      log: function log(txt) {
        var log = document.getElementById("log");
        log.innerHTML = txt + "<br>" + document.getElementById("log").innerHTML;
      }
    }
  });
  qxl.demobrowser.demo.bom.PageVisibility.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=PageVisibility.js.map?dt=1589490211629