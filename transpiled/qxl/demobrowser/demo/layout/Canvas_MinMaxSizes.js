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
      "qx.ui.decoration.Decorator": {},
      "qx.ui.core.Widget": {},
      "qx.ui.basic.Label": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.Canvas": {}
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
  qx.Class.define("qxl.demobrowser.demo.layout.Canvas_MinMaxSizes", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.Canvas_MinMaxSizes.prototype.main.base.call(this);
        var border = new qx.ui.decoration.Decorator().set({
          width: 3,
          style: "solid",
          color: "black"
        });
        var w1 = new qx.ui.core.Widget().set({
          backgroundColor: "red",
          decorator: border
        });
        var w2 = new qx.ui.core.Widget().set({
          backgroundColor: "blue",
          decorator: border
        });
        var w3 = new qx.ui.basic.Label("maxHeight=300").set({
          backgroundColor: "green",
          decorator: border,
          padding: 5,
          maxHeight: 300,
          allowStretchX: true,
          allowStretchY: true
        });
        var w4 = new qx.ui.core.Widget().set({
          backgroundColor: "yellow",
          decorator: border
        });
        var w5 = new qx.ui.core.Widget().set({
          backgroundColor: "orange",
          decorator: border
        });
        var w6 = new qx.ui.basic.Label("minWidth=400").set({
          backgroundColor: "teal",
          decorator: border,
          padding: 5,
          minWidth: 400,
          allowStretchX: true,
          allowStretchY: true
        });
        var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
        container.add(w1, {
          left: "3%",
          top: "3%",
          right: "3%",
          bottom: "3%",
          width: "20%",
          height: "20%"
        });
        container.add(w2, {
          left: "6%",
          top: "6%",
          right: "6%",
          width: "20%",
          height: "20%"
        });
        container.add(w3, {
          left: "9%",
          top: "9%",
          bottom: "9%",
          width: "20%",
          height: "20%"
        });
        container.add(w4, {
          left: "12%",
          top: "12%",
          width: "20%",
          height: "20%"
        });
        container.add(w5, {
          top: "9%",
          right: "9%",
          width: "20%",
          height: "20%"
        });
        container.add(w6, {
          right: "9%",
          bottom: "9%",
          width: "20%",
          height: "20%"
        });
        this.getRoot().add(container, {
          edge: 0
        });
      }
    }
  });
  qxl.demobrowser.demo.layout.Canvas_MinMaxSizes.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Canvas_MinMaxSizes.js.map?dt=1586199387618