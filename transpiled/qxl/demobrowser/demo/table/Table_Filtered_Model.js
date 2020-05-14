(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.demobrowser.demo.table.TableDemo": {
        "require": true
      },
      "qx.ui.table.model.Filtered": {},
      "qx.ui.table.Table": {},
      "qx.ui.table.selection.Model": {},
      "qx.ui.table.cellrenderer.Boolean": {},
      "qx.ui.table.cellrenderer.Html": {},
      "qx.ui.toolbar.ToolBar": {},
      "qx.ui.toolbar.Part": {},
      "qx.ui.toolbar.Button": {}
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

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   * Table using the Filtered data cell renderer that allows for hiding rows
   * client side. You can specify to filter rows based on numeric values or on
   * regex matching.
   * @tag noPlayground
   *
   * @asset(qx/icon/${qx.icontheme}/22/actions/list-remove.png)
   * @asset(qx/icon/${qx.icontheme}/22/actions/edit-undo.png)
   */
  qx.Class.define("qxl.demobrowser.demo.table.Table_Filtered_Model", {
    extend: qxl.demobrowser.demo.table.TableDemo,
    members: {
      getCaption: function getCaption() {
        return "Table with data filtering";
      },
      createTable: function createTable() {
        // table model
        var tableModel = this._tableModel = new qx.ui.table.model.Filtered();
        tableModel.setColumns(["ID", "A number", "A date", "A boolean", "HTML"]);
        var rowData = [];
        var now = new Date().getTime();
        var dateRange = 34560000000; // 400 days

        for (var row = 0; row < 20; row++) {
          var date = new Date(now + Math.random() * dateRange - dateRange / 2);
          var html = "<b>HTML-Test <i>" + row + "</i></b>";
          rowData.push([row, Math.random() * 10000, date, Math.random() > 0.5, html]);
        }

        tableModel.setData(rowData);
        tableModel.setColumnEditable(1, true);
        tableModel.setColumnEditable(2, true); // table

        var table = this._table = new qx.ui.table.Table(tableModel);
        table.setMetaColumnCounts([1, -1]);
        table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);
        table.getTableColumnModel().setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean());
        table.getTableColumnModel().setDataCellRenderer(4, new qx.ui.table.cellrenderer.Html());
        table.setAdditionalStatusBarText(", additional Status.");
        return table;
      },
      createControls: function createControls() {
        var bar = new qx.ui.toolbar.ToolBar();
        var part;
        part = new qx.ui.toolbar.Part();
        bar.add(part);
        var table = this._table;
        var tableModel = this._tableModel;
        var button1 = new qx.ui.toolbar.Button("Hide True", "icon/22/actions/list-remove.png");
        part.add(button1);
        button1.addListener("execute", function (e) {
          tableModel.addNumericFilter("==", 1, "A boolean");
          tableModel.applyFilters();
          table.setAdditionalStatusBarText(", additional Status. True Values are hidden.");
        });
        var button2 = new qx.ui.toolbar.Button("Hide False", "icon/22/actions/list-remove.png");
        part.add(button2);
        button2.addListener("execute", function (e) {
          tableModel.addNumericFilter("!=", 1, "A boolean");
          tableModel.applyFilters();
          table.setAdditionalStatusBarText(", additional Status. False Values are hidden.");
        });
        var button3 = new qx.ui.toolbar.Button("Hide 1k-5k", "icon/22/actions/list-remove.png");
        part.add(button3);
        button3.addListener("execute", function (e) {
          tableModel.addBetweenFilter("between", 1000, 5000, "A number");
          tableModel.applyFilters();
          table.setAdditionalStatusBarText(", additional Status. 1k - 5k Values are hidden.");
        });
        var button4 = new qx.ui.toolbar.Button("Show All", "icon/22/actions/edit-undo.png");
        part.add(button4);
        button4.addListener("execute", function (e) {
          tableModel.resetHiddenRows();
          table.setAdditionalStatusBarText(", additional Status. All Values are shown.");
        });
        return bar;
      }
    },

    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this._disposeObjects("_tableModel");
    }
  });
  qxl.demobrowser.demo.table.Table_Filtered_Model.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Table_Filtered_Model.js.map?dt=1589490215488