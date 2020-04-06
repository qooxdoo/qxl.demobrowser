(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.ui.table.selection.Manager": {
        "require": true
      },
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.table.selection.Model": {},
      "qx.ui.table.rowrenderer.Default": {},
      "qx.ui.table.pane.Header": {},
      "qx.ui.table.pane.Pane": {},
      "qx.ui.table.headerrenderer.Default": {},
      "qx.ui.table.cellrenderer.Default": {},
      "qx.dom.Element": {},
      "qx.bom.element.Style": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /**
   * @require(qx.ui.table.selection.Manager)
   */
  qx.Mixin.define("qxl.demobrowser.demo.table.MUtil", {
    construct: function construct() {
      this._tableLeft = 10;
    },
    members: {
      getTableMock: function getTableMock() {
        var columnModel = this.getColumnModelMock();
        var model = this.getModelMock();
        var selection = new qx.ui.table.selection.Model();
        var selectionManager = new qx.ui.table.selection.Manager();
        selectionManager.setSelectionModel(selection);
        var table = {
          getTableModel: function getTableModel() {
            return model;
          },
          getTableColumnModel: function getTableColumnModel() {
            return columnModel;
          },
          getRowHeight: function getRowHeight() {
            return 20;
          },
          getForceLineHeight: function getForceLineHeight() {
            return true;
          },
          getSelectionModel: function getSelectionModel() {
            return selection;
          },
          getDataRowRenderer: function getDataRowRenderer() {
            return new qx.ui.table.rowrenderer.Default(table);
          },
          updateContent: function updateContent() {},
          setFocusedCell: function setFocusedCell(col, row) {},
          getKeepFirstVisibleRowComplete: function getKeepFirstVisibleRowComplete() {
            return true;
          },
          _updateScrollBarVisibility: function _updateScrollBarVisibility() {},
          getSelectionManager: function getSelectionManager() {
            return selectionManager;
          },
          getNewTablePaneHeader: function getNewTablePaneHeader(obj) {
            return function (obj) {
              var header = new qx.ui.table.pane.Header(obj);
              return header;
            };
          },
          getNewTablePane: function getNewTablePane(obj) {
            return function (obj) {
              return new qx.ui.table.pane.Pane(obj);
            };
          },
          getEnabled: function getEnabled() {
            return true;
          }
        };
        return table;
      },
      getSelectionMock: function getSelectionMock() {
        return {
          isSelectedIndex: function isSelectedIndex(index) {
            return index == 0;
          },
          resetSelection: function resetSelection() {}
        };
      },
      getColumnModelMock: function getColumnModelMock() {
        return {
          getColumnCount: function getColumnCount() {
            return 4;
          },
          getVisibleColumnCount: function getVisibleColumnCount() {
            return 4;
          },
          getVisibleColumnAtX: function getVisibleColumnAtX(x) {
            return x;
          },
          getColumnWidth: function getColumnWidth(col) {
            return 100;
          },
          setColumnWidth: function setColumnWidth(col, width) {},
          getVisibleX: function getVisibleX(x) {
            return x;
          },
          getHeaderCellRenderer: function getHeaderCellRenderer(col) {
            return new qx.ui.table.headerrenderer.Default();
          },
          getDataCellRenderer: function getDataCellRenderer() {
            return new qx.ui.table.cellrenderer.Default();
          },
          addListener: function addListener() {},
          removeListener: function removeListener() {}
        };
      },
      getPaneModelMock: function getPaneModelMock() {
        var model = {
          getColumnAtX: function getColumnAtX(x) {
            return x;
          },
          getColumnCount: function getColumnCount() {
            return 4;
          },
          getX: function getX(col) {
            return col;
          },
          getColumnLeft: function getColumnLeft(col) {
            return col * 100;
          },
          getTotalWidth: function getTotalWidth() {
            return 400;
          }
        };
        return model;
      },
      getModelMock: function getModelMock() {
        return {
          getSortColumnIndex: function getSortColumnIndex() {
            return 0;
          },
          isSortAscending: function isSortAscending() {
            return true;
          },
          isColumnSortable: function isColumnSortable(col) {
            return true;
          },
          getColumnName: function getColumnName(col) {
            return "Column #" + col;
          },
          isColumnEditable: function isColumnEditable(col) {
            return false;
          },
          sortByColumn: function sortByColumn(col, ascending) {},
          getRowCount: function getRowCount() {
            return 500;
          },
          prefetchRows: function prefetchRows() {},
          getRowData: function getRowData(row) {
            var data = [];

            for (var i = 0; i < 4; i++) {
              data.push("Cell " + i + "x" + row);
            }

            return data;
          },
          getValue: function getValue(col, row) {
            return "Cell " + col + "x" + row;
          }
        };
      },
      getPaneMock: function getPaneMock() {
        return {
          getFirstVisibleRow: function getFirstVisibleRow() {
            return 0;
          }
        };
      },
      getScrollerMock: function getScrollerMock() {
        var table = this.getTableMock();
        var paneModel = this.getPaneModelMock();
        var pane = this.getPaneMock();
        return {
          getTable: function getTable() {
            return table;
          },
          getTablePaneModel: function getTablePaneModel() {
            return paneModel;
          },
          getTablePane: function getTablePane() {
            return pane;
          },
          getShowCellFocusIndicator: function getShowCellFocusIndicator() {
            return true;
          }
        };
      },
      _getNewTableDiv: function _getNewTableDiv(width) {
        var div = qx.dom.Element.create("div");
        qx.bom.element.Style.setStyles(div, {
          position: "absolute",
          left: this._tableLeft + "px",
          width: (width || 150) + "px",
          top: "20px",
          height: "500px",
          backgroundColor: "#FFE"
        });
        this._tableLeft += (width || 150) + 20;
        document.body.appendChild(div);
        return div;
      }
    }
  });
  qxl.demobrowser.demo.table.MUtil.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MUtil.js.map?dt=1586199389308