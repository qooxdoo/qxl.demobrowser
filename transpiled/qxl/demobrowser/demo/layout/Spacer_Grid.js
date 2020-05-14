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
      "qx.ui.layout.VBox": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.Grid": {},
      "qx.ui.core.Widget": {},
      "qx.ui.core.Spacer": {}
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
   * This example demonstrates how spacer can be used to have different spacings
   * between grid columns or rows
   */
  qx.Class.define("qxl.demobrowser.demo.layout.Spacer_Grid", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.layout.Spacer_Grid.prototype.main.base.call(this);
        var layout = new qx.ui.layout.VBox();
        layout.setSpacing(10);
        var container = new qx.ui.container.Composite(layout);
        container.setPadding(20);
        this.getRoot().add(container, {
          edge: 0
        });
        container.add(this.getGrid1());
        container.add(this.getGrid2());
      },
      getGrid1: function getGrid1() {
        // auto size
        var box = new qx.ui.container.Composite(new qx.ui.layout.Grid()).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowX: false,
          allowGrowY: false
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 0,
          column: 0
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 0,
          column: 1
        });
        box.add(new qx.ui.core.Spacer(0, 10), {
          row: 1,
          column: 0
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 2,
          column: 0
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 2,
          column: 1
        });
        box.add(new qx.ui.core.Spacer(0, 20), {
          row: 3,
          column: 0
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 4,
          column: 0
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 4,
          column: 1
        });
        return box;
      },
      getGrid2: function getGrid2() {
        // auto size
        var box = new qx.ui.container.Composite(new qx.ui.layout.Grid()).set({
          decorator: "main",
          backgroundColor: "yellow",
          allowGrowX: false,
          allowGrowY: false
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 0,
          column: 0
        });
        box.add(new qx.ui.core.Spacer(10, 0), {
          row: 0,
          column: 2
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 0,
          column: 3
        });
        box.add(new qx.ui.core.Spacer(30, 0), {
          row: 1,
          column: 4
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 0,
          column: 5
        });
        box.add(new qx.ui.core.Spacer(0, 5), {
          row: 1,
          column: 0
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 2,
          column: 0
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 2,
          column: 3
        });
        box.add(new qx.ui.core.Widget().set({
          decorator: "main",
          backgroundColor: "green"
        }), {
          row: 2,
          column: 5
        });
        return box;
      }
    }
  });
  qxl.demobrowser.demo.layout.Spacer_Grid.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Spacer_Grid.js.map?dt=1589490214222