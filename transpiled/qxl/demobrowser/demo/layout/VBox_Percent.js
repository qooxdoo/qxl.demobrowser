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
  qx.Class.define("qxl.demobrowser.demo.layout.VBox_Percent", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.VBox_Percent.prototype.main.base.call(this);
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
        root.add(this.getBox6());
      },
      getBox1: function getBox1() {
        // one percent child which is not flexible
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 300,
          allowGrowY: false
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
        container.add(w1, {
          height: "50%"
        });
        container.add(w2, {
          flex: 1
        });
        container.add(w3, {
          flex: 1
        });
        return container;
      },
      getBox2: function getBox2() {
        // all percent child, using 99% in sum, flex enabled for last
        // child (=> perfect result, last one a bit bigger)
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 300,
          allowGrowY: false
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
        container.add(w1, {
          height: "33%"
        });
        container.add(w2, {
          height: "33%"
        });
        container.add(w3, {
          height: "33%",
          flex: 1
        });
        return container;
      },
      getBox3: function getBox3() {
        // one percent child which is not flexible + auto sizing
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowY: false
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
        container.add(w1, {
          height: "50%"
        });
        container.add(w2, {
          flex: 1
        });
        container.add(w3, {
          flex: 1
        });
        return container;
      },
      getBox4: function getBox4() {
        // all child in percents + auto sizing + flex enabled
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowY: false
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
        container.add(w1, {
          height: "33%",
          flex: 1
        });
        container.add(w2, {
          height: "33%",
          flex: 1
        });
        container.add(w3, {
          height: "33%",
          flex: 1
        });
        return container;
      },
      getBox5: function getBox5() {
        // all child in percents + flex enabled (shrinking)
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 100,
          allowGrowY: false
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
        container.add(w1, {
          height: "33%",
          flex: 1
        });
        container.add(w2, {
          height: "33%",
          flex: 1
        });
        container.add(w3, {
          height: "33%",
          flex: 1
        });
        return container;
      },
      getBox6: function getBox6() {
        // all child in percents + flex enabled (growing)
        var box = new qx.ui.layout.VBox();
        var container = new qx.ui.container.Composite(box).set({
          decorator: "main",
          backgroundColor: "yellow",
          height: 300,
          allowGrowY: false
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
        container.add(w1, {
          height: "33%",
          flex: 1
        });
        container.add(w2, {
          height: "33%",
          flex: 1
        });
        container.add(w3, {
          height: "33%",
          flex: 1
        });
        return container;
      }
    }
  });
  qxl.demobrowser.demo.layout.VBox_Percent.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=VBox_Percent.js.map?dt=1586350626449