(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.core.Widget": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.HBox": {}
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
  qx.Class.define("qxl.demobrowser.demo.root.Application", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.root.Application.prototype.main.base.call(this);
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
        var container = new qx.ui.container.Composite(new qx.ui.layout.HBox());
        container.setDecorator("main");
        container.add(w1);
        container.add(w2);
        container.add(w3);
        container.add(w4);
        this.getRoot().add(container, {
          edge: 0
        });
      }
    }
  });
  qxl.demobrowser.demo.root.Application.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Application.js.map?dt=1586350626773