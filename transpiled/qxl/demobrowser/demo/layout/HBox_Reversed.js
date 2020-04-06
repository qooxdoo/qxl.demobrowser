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
      "qx.ui.core.Widget": {},
      "qx.ui.basic.Label": {}
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
  qx.Class.define("qxl.demobrowser.demo.layout.HBox_Reversed", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.HBox_Reversed.prototype.main.base.call(this); // auto width + reversed

        var box = new qx.ui.layout.HBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 80
        });
        box.setReversed(true);
        box.setSpacing(5);
        var w1 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "blue",
          maxHeight: 60,
          alignY: "top"
        });
        var w2 = new qx.ui.basic.Label("tap to reverse").set({
          decorator: "main",
          rich: true,
          backgroundColor: "green",
          maxHeight: 60,
          alignY: "middle",
          allowGrowX: true,
          allowGrowY: true
        });
        var w3 = new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "gray",
          maxHeight: 60,
          alignY: "bottom"
        });
        container.add(w1);
        container.add(w2);
        container.add(w3);
        container.addListener("pointerdown", function (e) {
          box.setReversed(!box.getReversed());
        });
        this.getRoot().add(container, {
          left: 10,
          top: 10
        });
      }
    }
  });
  qxl.demobrowser.demo.layout.HBox_Reversed.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=HBox_Reversed.js.map?dt=1586199388298