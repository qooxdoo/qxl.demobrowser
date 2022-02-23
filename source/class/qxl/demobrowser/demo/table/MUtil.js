/**
 * @require(qx.ui.table.selection.Manager)
 */

qx.Mixin.define("qxl.demobrowser.demo.table.MUtil", {
  construct() {
    this._tableLeft = 10;
  },

  members: {
    getTableMock() {
      var columnModel = this.getColumnModelMock();
      var model = this.getModelMock();
      var selection = new qx.ui.table.selection.Model();
      var selectionManager = new qx.ui.table.selection.Manager();
      selectionManager.setSelectionModel(selection);

      var table = {
        getTableModel() {
          return model;
        },
        getTableColumnModel() {
          return columnModel;
        },
        getRowHeight() {
          return 20;
        },
        getForceLineHeight() {
          return true;
        },
        getSelectionModel() {
          return selection;
        },
        getDataRowRenderer() {
          return new qx.ui.table.rowrenderer.Default(table);
        },
        updateContent() {},
        setFocusedCell(col, row) {},
        getKeepFirstVisibleRowComplete() {
          return true;
        },
        _updateScrollBarVisibility() {},
        getSelectionManager() {
          return selectionManager;
        },
        getNewTablePaneHeader(obj) {
          return function (obj) {
            var header = new qx.ui.table.pane.Header(obj);
            return header;
          };
        },
        getNewTablePane(obj) {
          return function (obj) {
            return new qx.ui.table.pane.Pane(obj);
          };
        },
        getEnabled() {
          return true;
        },
      };

      return table;
    },

    getSelectionMock() {
      return {
        isSelectedIndex(index) {
          return index == 0;
        },
        resetSelection() {},
      };
    },

    getColumnModelMock() {
      return {
        getColumnCount() {
          return 4;
        },
        getVisibleColumnCount() {
          return 4;
        },
        getVisibleColumnAtX(x) {
          return x;
        },
        getColumnWidth(col) {
          return 100;
        },
        setColumnWidth(col, width) {},
        getVisibleX(x) {
          return x;
        },
        getHeaderCellRenderer(col) {
          return new qx.ui.table.headerrenderer.Default();
        },
        getDataCellRenderer() {
          return new qx.ui.table.cellrenderer.Default();
        },

        addListener() {},
        removeListener() {},
      };
    },

    getPaneModelMock() {
      var model = {
        getColumnAtX(x) {
          return x;
        },
        getColumnCount() {
          return 4;
        },
        getX(col) {
          return col;
        },
        getColumnLeft(col) {
          return col * 100;
        },
        getTotalWidth() {
          return 4 * 100;
        },
      };

      return model;
    },

    getModelMock() {
      return {
        getSortColumnIndex() {
          return 0;
        },
        isSortAscending() {
          return true;
        },
        isColumnSortable(col) {
          return true;
        },
        getColumnName(col) {
          return "Column #" + col;
        },
        isColumnEditable(col) {
          return false;
        },
        sortByColumn(col, ascending) {},
        getRowCount() {
          return 500;
        },
        prefetchRows() {},
        getRowData(row) {
          var data = [];
          for (var i = 0; i < 4; i++) {
            data.push("Cell " + i + "x" + row);
          }
          return data;
        },
        getValue(col, row) {
          return "Cell " + col + "x" + row;
        },
      };
    },

    getPaneMock() {
      return {
        getFirstVisibleRow() {
          return 0;
        },
      };
    },

    getScrollerMock() {
      var table = this.getTableMock();
      var paneModel = this.getPaneModelMock();
      var pane = this.getPaneMock();

      return {
        getTable() {
          return table;
        },
        getTablePaneModel() {
          return paneModel;
        },
        getTablePane() {
          return pane;
        },
        getShowCellFocusIndicator() {
          return true;
        },
      };
    },

    _getNewTableDiv(width) {
      var div = qx.dom.Element.create("div");
      qx.bom.element.Style.setStyles(div, {
        position: "absolute",
        left: this._tableLeft + "px",
        width: (width || 150) + "px",
        top: 20 + "px",
        height: "500px",
        backgroundColor: "#FFE",
      });

      this._tableLeft += (width || 150) + 20;
      document.body.appendChild(div);
      return div;
    },
  },
});
