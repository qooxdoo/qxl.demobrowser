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
      "qx.ui.container.Scroll": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.layout.VBox": {},
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
  qx.Class.define("qxl.demobrowser.demo.layout.VBox_Margin", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.VBox_Margin.prototype.main.base.call(this);
        var scroll = new qx.ui.container.Scroll();
        this.getRoot().add(scroll, {
          edge: 0
        });
        var root = new qx.ui.container.Composite(new qx.ui.layout.HBox(20)).set({
          padding: 20
        });
        scroll.add(root);
        root.add(this.getBox1());
        root.add(this.getBox2());
        root.add(this.getBox3());
        root.add(this.getBox4());
        root.add(this.getBox5());
      },
      getBox1: function getBox1() {
        // auto size + disabled y grow
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowY: false
        });
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
        container.add(w1);
        container.add(w2);
        container.add(w3);
        w1.setAllowGrowX(false);
        w2.setAllowGrowX(false);
        w3.setAllowGrowX(false);
        w1.setMarginLeft(20);
        w3.setMarginRight(30);
        return container;
      },
      getBox2: function getBox2() {
        // auto size + enabled y grow
        var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(5)).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowY: false
        });
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
        container.add(w1);
        container.add(w2);
        container.add(w3);
        w1.setMarginLeft(20);
        w3.setMarginRight(30);
        return container;
      },
      getBox3: function getBox3() {
        // auto size + static height + middle aligned + disabled x grow
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          width: 150,
          allowGrowY: false
        });
        box.setSpacing(5);
        box.setAlignX("center");
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
        container.add(w1);
        container.add(w2);
        container.add(w3);
        w1.setAllowGrowX(false);
        w2.setAllowGrowX(false);
        w3.setAllowGrowX(false);
        w1.setMarginLeft(20);
        w3.setMarginRight(30);
        return container;
      },
      getBox4: function getBox4() {
        // auto size + static height + middle aligned + enabled x grow
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          width: 150,
          allowGrowY: false
        });
        box.setSpacing(5);
        box.setAlignX("center");
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
        container.add(w1);
        container.add(w2);
        container.add(w3);
        w1.setMarginLeft(20);
        w3.setMarginLeft(5);
        w3.setMinWidth(50);
        w3.setMarginRight(20);
        return container;
      },
      getBox5: function getBox5() {
        // auto size + static height + middle aligned + enabled x grow + huge marginRight
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          width: 150,
          allowGrowY: false
        });
        box.setSpacing(5);
        box.setAlignX("center");
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
        container.add(w1);
        container.add(w2);
        container.add(w3);
        w1.setMarginLeft(20);
        w3.setMarginLeft(5);
        w3.setMinWidth(50);
        w3.setMarginRight(200);
        return container;
      }
    }
  });
  qxl.demobrowser.demo.layout.VBox_Margin.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=VBox_Margin.js.map?dt=1586199388598