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
      "qx.ui.container.Composite": {},
      "qx.ui.layout.Grid": {},
      "qx.ui.basic.Label": {},
      "qx.ui.core.scroll.ScrollBar": {},
      "qx.ui.core.scroll.NativeScrollBar": {}
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
  qx.Class.define("qxl.demobrowser.demo.widget.ScrollBar", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.widget.ScrollBar.prototype.main.base.call(this);
        var container = new qx.ui.container.Composite(new qx.ui.layout.Grid()).set({
          padding: 20
        });
        this.getRoot().add(container, {
          edge: 0
        });
        var label = new qx.ui.basic.Label("Value: ").set({
          padding: 30
        });
        container.add(label, {
          row: 0,
          column: 0
        });
        var vScrollBar = new qx.ui.core.scroll.ScrollBar("vertical").set({
          height: 200,
          maximum: 500
        });
        vScrollBar.addListener("scroll", function (e) {
          hScrollBar.setPosition(e.getData());
        });
        container.add(vScrollBar, {
          row: 0,
          column: 1
        });
        var hScrollBar = new qx.ui.core.scroll.NativeScrollBar("horizontal").set({
          width: 300,
          maximum: 500
        });
        hScrollBar.addListener("scroll", function (e) {
          vScrollBar.setPosition(e.getData());
          label.setValue("Value: " + e.getData());
        });
        container.add(hScrollBar, {
          row: 1,
          column: 0
        });
        hScrollBar.setPosition(170);
      }
    }
  });
  qxl.demobrowser.demo.widget.ScrollBar.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ScrollBar.js.map?dt=1589490218755