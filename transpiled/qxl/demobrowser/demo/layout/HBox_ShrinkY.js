(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.demobrowser.demo.util.LayoutApplication": {
        "require": true
      },
      "qx.ui.layout.HBox": {},
      "qx.ui.container.Composite": {},
      "qx.ui.core.Widget": {}
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
  qx.Class.define("qxl.demobrowser.demo.layout.HBox_ShrinkY", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.HBox_ShrinkY.prototype.main.base.call(this); // auto size with limited height

        var box = new qx.ui.layout.HBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          maxHeight: 100
        });
        box.setSpacing(5);
        var w1 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        });
        var w2 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        });
        var w3 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        });
        w1.setHeight(200);
        w2.setHeight(300);
        w3.setHeight(400);
        container.add(w1);
        container.add(w2);
        container.add(w3);
        this.getRoot().add(container, {
          left: 10,
          top: 10
        });
      }
    }
  });
  qxl.demobrowser.demo.layout.HBox_ShrinkY.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=HBox_ShrinkY.js.map?dt=1586350626054