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
  qx.Class.define("qxl.demobrowser.demo.layout.Canvas_LeftRight", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.Canvas_LeftRight.prototype.main.base.call(this);
        var border = new qx.ui.decoration.Decorator().set({
          width: 3,
          style: "solid",
          color: "black"
        });
        var w1 = new qx.ui.core.Widget().set({
          backgroundColor: "red",
          decorator: border,
          width: 400
        });
        var w2 = new qx.ui.core.Widget().set({
          backgroundColor: "blue",
          decorator: border,
          minWidth: 400
        });
        var w3 = new qx.ui.core.Widget().set({
          backgroundColor: "green",
          decorator: border,
          width: 400
        });
        var w4 = new qx.ui.core.Widget().set({
          backgroundColor: "yellow",
          decorator: border,
          minWidth: 400
        });
        var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({
          decorator: border
        });
        this.getRoot().setPadding(20);
        container.add(w1, {
          left: 10,
          top: 10
        });
        container.add(w2, {
          left: 10,
          top: 80
        });
        container.add(w3, {
          top: 150,
          right: 10
        });
        container.add(w4, {
          top: 220,
          right: 10
        });
        this.getRoot().add(container, {
          edge: 0
        });
      }
    }
  });
  qxl.demobrowser.demo.layout.Canvas_LeftRight.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Canvas_LeftRight.js.map?dt=1586199387599