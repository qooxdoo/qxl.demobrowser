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
      "qx.ui.virtual.core.Scroller": {},
      "qx.ui.virtual.layer.Row": {},
      "qx.ui.virtual.layer.GridLines": {},
      "qx.ui.virtual.layer.HtmlCell": {},
      "qx.ui.virtual.cell.Cell": {}
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
     * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * @tag test
   */
  qx.Class.define("qxl.demobrowser.demo.virtual.Table", {
    extend: qx.application.Standalone,

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      __cellRenderer: null,
      main: function main() {
        // Call super class
        qxl.demobrowser.demo.virtual.Table.prototype.main.base.call(this);
        var scroller = new qx.ui.virtual.core.Scroller(10000, 10000, 20, 100); // change all cell sizes!!

        for (var i = 0; i < 10000; i++) {
          scroller.getPane().getRowConfig().setItemSize(i, 20 + Math.round(Math.random() * 40));
          scroller.getPane().getColumnConfig().setItemSize(i, 50 + Math.round(Math.random() * 80));
        }

        this.getRoot().add(scroller, {
          edge: 20
        });
        scroller.getPane().addLayer(new qx.ui.virtual.layer.Row("white", "#EEE"));
        scroller.getPane().addLayer(new qx.ui.virtual.layer.GridLines("horizontal"));
        scroller.getPane().addLayer(new qx.ui.virtual.layer.GridLines("vertical"));
        scroller.getPane().addLayer(new qx.ui.virtual.layer.HtmlCell(this));
        this.__cellRenderer = new qx.ui.virtual.cell.Cell();
      },
      getCellProperties: function getCellProperties(row, column) {
        return this.__cellRenderer.getCellProperties(row + " / " + column);
      }
    },

    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this._disposeObjects("__cellRenderer");
    }
  });
  qxl.demobrowser.demo.virtual.Table.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Table.js.map?dt=1589490217589