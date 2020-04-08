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
      "qx.ui.layout.Basic": {}
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
  qx.Class.define("qxl.demobrowser.demo.layout.Basic", {
    extend: qxl.demobrowser.demo.util.LayoutApplication,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.Basic.prototype.main.base.call(this);
        var borderColor = "black";
        var border = new qx.ui.decoration.Decorator().set({
          width: 3,
          style: "solid",
          color: borderColor
        });
        var w1 = new qx.ui.core.Widget().set({
          backgroundColor: "red",
          decorator: border,
          marginLeft: 10,
          minHeight: 200
        });
        var w2 = new qx.ui.core.Widget().set({
          backgroundColor: "blue",
          decorator: border
        });
        var w3 = new qx.ui.core.Widget().set({
          backgroundColor: "green",
          decorator: border,
          padding: 3,
          height: 300
        });
        var w4 = new qx.ui.core.Widget().set({
          backgroundColor: "yellow",
          decorator: border,
          padding: 10,
          width: 400
        });
        var container = new qx.ui.container.Composite(new qx.ui.layout.Basic());
        container.add(w1, {
          left: 10,
          top: 10
        });
        container.add(w2, {
          left: 200,
          top: 20
        });
        container.add(w3, {
          left: 350,
          top: 50
        });
        container.add(w4, {
          left: 50,
          top: 200
        });
        this.getRoot().add(container, {
          edge: 0
        });
      }
    }
  });
  qxl.demobrowser.demo.layout.Basic.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Basic.js.map?dt=1586350625133