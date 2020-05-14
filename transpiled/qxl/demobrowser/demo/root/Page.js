(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Inline": {
        "require": true
      },
      "qx.ui.container.Composite": {},
      "qx.ui.layout.HBox": {},
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
  qx.Class.define("qxl.demobrowser.demo.root.Page", {
    extend: qx.application.Inline,
    members: {
      main: function main() {
        qxl.demobrowser.demo.root.Page.prototype.main.base.call(this);
        var box = new qx.ui.container.Composite(new qx.ui.layout.HBox());
        var w1 = new qx.ui.core.Widget().set({
          backgroundColor: "red",
          decorator: "main",
          padding: 10
        });
        var w2 = new qx.ui.core.Widget().set({
          backgroundColor: "blue",
          decorator: "main"
        });
        var w3 = new qx.ui.core.Widget().set({
          backgroundColor: "green",
          decorator: "main"
        });
        var w4 = new qx.ui.core.Widget().set({
          backgroundColor: "yellow",
          decorator: "main"
        });
        box.add(w1);
        box.add(w2);
        box.add(w3);
        box.add(w4);
        this.getRoot().add(box, {
          left: 30,
          top: 120
        });
      }
    }
  });
  qxl.demobrowser.demo.root.Page.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Page.js.map?dt=1589490214766