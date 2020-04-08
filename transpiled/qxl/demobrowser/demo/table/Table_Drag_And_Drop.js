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
      "qx.ui.table.model.Simple": {},
      "qx.ui.table.Table": {},
      "qx.ui.table.cellrenderer.Boolean": {},
      "qx.ui.table.headerrenderer.Icon": {}
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
   * A table with virtual scrolling, model-view-controller, renderer,
   * editing, sorting, column resizing, column reordering,
   * column hiding.
   *
   *
   * @asset(qx/icon/${qx.icontheme}/22/actions/list-add.png)
   * @asset(qx/icon/${qx.icontheme}/22/actions/list-remove.png)
   * @asset(qx/icon/${qx.icontheme}/22/actions/edit-undo.png)
   * @asset(qx/icon/${qx.icontheme}/22/status/dialog-information.png)
   * @asset(qx/icon/${qx.icontheme}/16/apps/office-calendar.png)
   * @tag noPlayground
   * @tag showcase
   */
  qx.Class.define("qxl.demobrowser.demo.table.Table_Drag_And_Drop", {
    extend: qxl.demobrowser.demo.table.TableDemo,
    members: {
      getCaption: function getCaption() {
        return "Table";
      },
      createTable: function createTable() {
        // table model
        var tableModel = this._tableModel = new qx.ui.table.model.Simple();
        tableModel.setColumns(["ID", "A number", "A date", "Boolean"]);
        tableModel.setData(this.createRandomRows(100)); // make second column editable

        tableModel.setColumnEditable(1, true); // table

        var table = new qx.ui.table.Table(tableModel).set({
          decorator: null
        });
        var tcm = table.getTableColumnModel(); // Display a checkbox in column 3

        tcm.setDataCellRenderer(3, new qx.ui.table.cellrenderer.Boolean()); // use a different header renderer

        tcm.setHeaderCellRenderer(2, new qx.ui.table.headerrenderer.Icon("icon/16/apps/office-calendar.png", "A date"));
        table.setDraggable(true);
        table.setDroppable(true);
        table.setFocusCellOnPointerMove(true);
        table.addListener("dragstart", this._handleDragStart, this);
        table.addListener("droprequest", this._handleDropRequest, this);
        table.addListener("drop", this._handleDrop, this);
        return table;
      },
      _handleDragStart: function _handleDragStart(e) {
        var focusedRow = this._table.getFocusedRow();

        this._startRow = {
          maxIndex: focusedRow,
          minIndex: focusedRow
        };
        e.addAction("move");
        e.addType("movetransfer");
      },
      _handleDropRequest: function _handleDropRequest(e) {
        var type = e.getCurrentType();

        var sel = this._table.getSelectionModel().getSelectedRanges(); // use the focused row instead of the selection in nothing selected


        if (sel.length == 0) {
          sel = [this._startRow];
        }

        var selMap = [];

        for (var i = 0; i < sel.length; i++) {
          for (var s = sel[i].minIndex; s <= sel[i].maxIndex; s++) {
            var rowdata = this._table.getTableModel().getRowData(s);

            if (rowdata == null) {
              continue;
            }

            rowdata.rowId = s;
            selMap.push(rowdata);
          }
        }

        e.addData(type, selMap);
      },
      _handleDrop: function _handleDrop(e) {
        if (e.supportsType("movetransfer")) {
          var data = e.getData("movetransfer");

          var dm = this._table.getTableModel();

          dm.removeRows(data[0].rowId, data.length);
          dm.addRows(data, this._table.getFocusedRow());
        }
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
  qxl.demobrowser.demo.table.Table_Drag_And_Drop.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Table_Drag_And_Drop.js.map?dt=1586350627552