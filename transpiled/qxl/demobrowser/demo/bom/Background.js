(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.module.Core": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.util.ResourceManager": {},
      "qx.bom.element.Background": {}
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
   *
   * @asset(qx/icon/Tango/48/devices/drive-optical.png)
   * @tag noPlayground
   *
   * @require(qx.module.Core)
   */
  qx.Class.define("qxl.demobrowser.demo.bom.Background", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.Background.prototype.main.base.call(this);
        var resolved = qx.util.ResourceManager.getInstance().toUri("qx/icon/Tango/48/devices/drive-optical.png");
        q("#box1_1").setAttribute("style", qx.bom.element.Background.compile(resolved));
        q("#box1_2").setAttribute("style", qx.bom.element.Background.compile(resolved, "repeat-x"));
        q("#box1_3").setAttribute("style", qx.bom.element.Background.compile(resolved, "repeat-y"));
        q("#box1_4").setAttribute("style", qx.bom.element.Background.compile(resolved, "repeat", 10));
        q("#box1_5").setAttribute("style", qx.bom.element.Background.compile(resolved, "repeat", 0, 10));
        q("#box1_6").setAttribute("style", qx.bom.element.Background.compile(resolved, "repeat", 10, 10));
        q("#box1_7").setAttribute("style", qx.bom.element.Background.compile(resolved, "no-repeat", "center", "center"));
        q("#box1_8").setAttribute("style", qx.bom.element.Background.compile(resolved, "no-repeat", "right", "bottom"));
        q("#box2_1").setStyles(qx.bom.element.Background.getStyles(resolved));
        q("#box2_2").setStyles(qx.bom.element.Background.getStyles(resolved, "repeat-x"));
        q("#box2_3").setStyles(qx.bom.element.Background.getStyles(resolved, "repeat-y"));
        q("#box2_4").setStyles(qx.bom.element.Background.getStyles(resolved, "repeat", 10));
        q("#box2_5").setStyles(qx.bom.element.Background.getStyles(resolved, "repeat", 0, 10));
        q("#box2_6").setStyles(qx.bom.element.Background.getStyles(resolved, "repeat", 10, 10));
        q("#box2_7").setStyles(qx.bom.element.Background.getStyles(resolved, "no-repeat", "center", "center"));
        q("#box2_8").setStyles(qx.bom.element.Background.getStyles(resolved, "no-repeat", "right", "bottom"));
      }
    }
  });
  qxl.demobrowser.demo.bom.Background.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Background.js.map?dt=1589490211167