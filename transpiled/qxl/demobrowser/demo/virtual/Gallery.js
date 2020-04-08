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
      "qx.ui.window.Window": {
        "construct": true,
        "require": true
      },
      "qx.ui.layout.Grow": {
        "construct": true
      },
      "qx.ui.virtual.selection.CellRectangle": {
        "construct": true
      },
      "qx.util.AliasManager": {},
      "qx.util.ResourceManager": {},
      "qx.ui.virtual.cell.AbstractWidget": {
        "require": true
      },
      "qx.ui.basic.Atom": {},
      "qx.ui.virtual.core.Scroller": {},
      "qx.ui.virtual.layer.WidgetCell": {},
      "qx.ui.virtual.behavior.Prefetch": {},
      "qx.theme.manager.Font": {
        "construct": true
      },
      "qx.bom.element.Style": {
        "construct": true
      },
      "qx.ui.virtual.layer.HtmlCell": {},
      "qx.ui.virtual.layer.GridLines": {}
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
   *
   * @asset(qx/icon/${qx.icontheme}/32/places/*)
   * @ignore(qxl.demobrowser.demo.virtual.GalleryCell)
   * @ignore(qxl.demobrowser.demo.virtual.HtmlGallery)
   * @ignore(qxl.demobrowser.demo.virtual.WidgetGallery)
   * @ignore(qxl.demobrowser.demo.virtual.AbstractGallery)
   */
  qx.Class.define("qxl.demobrowser.demo.virtual.Gallery", {
    extend: qx.application.Standalone,

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      main: function main() {
        qxl.demobrowser.demo.virtual.Gallery.prototype.main.base.call(this); // widget window

        new qxl.demobrowser.demo.virtual.WidgetGallery("Gallery (widgets)"); // html window

        var htmlWin = new qxl.demobrowser.demo.virtual.HtmlGallery("Gallery (HTML - divs)");
        htmlWin.moveTo(400, 50);
      }
    }
  });
  /*
   * PLEASE NOTE:
   * For demonstration purposes the following class is added to the same file as
   * the application class. For a regular qooxdoo application each class must live
   * in a file of its own. You may neglect any warnings when generating this demo.
   */

  /*
  *****************************************************************************
     ABSTRACT GALLERY
  *****************************************************************************
  */

  qx.Class.define("qxl.demobrowser.demo.virtual.AbstractGallery", {
    extend: qx.ui.window.Window,
    type: "abstract",
    construct: function construct(title) {
      qx.ui.window.Window.constructor.call(this, title);
      this.set({
        contentPadding: 0,
        showClose: false,
        showMinimize: false,
        width: 320,
        height: 400
      });
      this.setLayout(new qx.ui.layout.Grow());
      this.moveTo(30, 50);
      this.open();
      this.itemHeight = 65;
      this.itemWidth = 70;
      this.itemCount = 431;
      this.itemPerLine = 1;
      this.items = this._generateItems(this.itemCount);

      var scroller = this._createScroller();

      scroller.set({
        scrollbarX: "off",
        scrollbarY: "auto"
      });
      scroller.getPane().addListener("resize", this._onPaneResize, this);
      this.add(scroller);
      this.manager = new qx.ui.virtual.selection.CellRectangle(scroller.getPane(), this).set({
        mode: "multi",
        drag: true
      });
      this.manager.attachPointerEvents();
      this.manager.attachKeyEvents(scroller);
    },
    members: {
      getItemData: function getItemData(row, column) {
        return this.items[row * this.itemPerLine + column];
      },
      _createScroller: function _createScroller() {// abstract method
      },
      isItemSelectable: function isItemSelectable(item) {
        return !!this.getItemData(item.row, item.column);
      },
      styleSelectable: function styleSelectable(item, type, wasAdded) {// abstract method
      },
      _onPaneResize: function _onPaneResize(e) {
        var pane = e.getTarget();
        var width = e.getData().width;
        var colCount = Math.max(1, Math.floor(width / this.itemWidth));

        if (colCount == this.itemsPerLine) {
          return;
        }

        this.itemPerLine = colCount;
        var rowCount = Math.ceil(this.itemCount / colCount);
        pane.getColumnConfig().setItemCount(colCount);
        pane.getRowConfig().setItemCount(rowCount);
      },
      _generateItems: function _generateItems(count) {
        var items = [];
        var iconImages = ["folder.png", "user-trash.png", "network-server.png", "network-workgroup.png", "user-desktop.png"];
        var aliasManager = qx.util.AliasManager.getInstance();
        var resourceManager = qx.util.ResourceManager.getInstance();

        for (var i = 0; i < count; i++) {
          var icon = "icon/32/places/" + iconImages[Math.floor(Math.random() * iconImages.length)];
          var resolved = aliasManager.resolve(icon);
          var url = resourceManager.toUri(resolved);
          items[i] = {
            label: "Icon #" + (i + 1),
            icon: icon,
            resolvedIcon: url
          };
        }

        return items;
      }
    },
    destruct: function destruct() {
      this.items = null;

      this._disposeObjects("manager");
    }
  });
  /*
   * PLEASE NOTE:
   * For demonstration purposes the following class is added to the same file as
   * the application class. For a regular qooxdoo application each class must live
   * in a file of its own. You may neglect any warnings when generating this demo.
   */

  /*
  *****************************************************************************
     GALLERY CELL
  *****************************************************************************
  */

  qx.Class.define("qxl.demobrowser.demo.virtual.GalleryCell", {
    extend: qx.ui.virtual.cell.AbstractWidget,
    members: {
      _createWidget: function _createWidget() {
        var widget = new qx.ui.basic.Atom().set({
          iconPosition: "top"
        });
        widget.getChildControl("label").set({
          padding: [0, 4]
        });
        widget.getChildControl("icon").set({
          padding: 4
        });
        return widget;
      },
      updateData: function updateData(widget, data) {
        widget.set({
          icon: data.icon,
          label: data.label
        });
      },
      updateStates: function updateStates(widget, states) {
        var label = widget.getChildControl("label");
        var icon = widget.getChildControl("icon");

        if (states.selected) {
          label.setBackgroundColor("background-selected");
          label.setTextColor("text-selected");
          icon.setDecorator("white-box");
          icon.setBackgroundColor("background");
        } else {
          label.resetBackgroundColor();
          label.resetTextColor();
          icon.resetDecorator();
          icon.resetBackgroundColor();
        }
      }
    }
  });
  /*
   * PLEASE NOTE:
   * For demonstration purposes the following class is added to the same file as
   * the application class. For a regular qooxdoo application each class must live
   * in a file of its own. You may neglect any warnings when generating this demo.
   */

  /**
   *****************************************************************************
     WIDGET GALLERY
   *****************************************************************************
   *
   * @ignore(qxl.demobrowser.demo.virtual.AbstractGallery)
   * @ignore(qxl.demobrowser.demo.virtual.GalleryCell)
   */

  qx.Class.define("qxl.demobrowser.demo.virtual.WidgetGallery", {
    extend: qxl.demobrowser.demo.virtual.AbstractGallery,
    construct: function construct(title) {
      qxl.demobrowser.demo.virtual.AbstractGallery.constructor.call(this, title);
      this.__cell = new qxl.demobrowser.demo.virtual.GalleryCell();
    },
    members: {
      __cell: null,
      _createScroller: function _createScroller() {
        var scroller = new qx.ui.virtual.core.Scroller(1, this.itemPerLine, this.itemHeight, this.itemWidth);
        this.layer = new qx.ui.virtual.layer.WidgetCell(this);
        scroller.getPane().addLayer(this.layer); // Creates the prefetch behavior

        new qx.ui.virtual.behavior.Prefetch(scroller, {
          minLeft: 0,
          maxLeft: 0,
          minRight: 0,
          maxRight: 0,
          minAbove: 200,
          maxAbove: 300,
          minBelow: 600,
          maxBelow: 800
        }).set({
          interval: 500
        });
        return scroller;
      },
      styleSelectable: function styleSelectable(item, type, wasAdded) {
        if (type !== "selected") {
          return;
        }

        var widgets = this.layer.getChildren();

        for (var i = 0; i < widgets.length; i++) {
          var widget = widgets[i];
          var cell = widget.getUserData("cell");

          if (item.row !== cell.row || item.column !== cell.column) {
            continue;
          }

          if (wasAdded) {
            this.__cell.updateStates(widget, {
              selected: 1
            });
          } else {
            this.__cell.updateStates(widget, {});
          }
        }
      },
      getCellWidget: function getCellWidget(row, column) {
        var itemData = this.getItemData(row, column);

        if (!itemData) {
          return null;
        }

        var cell = {
          row: row,
          column: column
        };
        var states = {};

        if (this.manager.isItemSelected(cell)) {
          states.selected = true;
        }

        var widget = this.__cell.getCellWidget(itemData, states);

        widget.setUserData("cell", cell);
        return widget;
      },
      poolCellWidget: function poolCellWidget(widget) {
        this.__cell.pool(widget);
      }
    },

    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this._disposeObjects("__cell", "layer");
    }
  });
  /*
   * PLEASE NOTE:
   * For demonstration purposes the following class is added to the same file as
   * the application class. For a regular qooxdoo application each class must live
   * in a file of its own. You may neglect any warnings when generating this demo.
   */

  /**
   *****************************************************************************
      HTML GALLERY
   *****************************************************************************
   *
   * @ignore(qxl.demobrowser.demo.virtual.AbstractGallery)
   */

  qx.Class.define("qxl.demobrowser.demo.virtual.HtmlGallery", {
    extend: qxl.demobrowser.demo.virtual.AbstractGallery,
    construct: function construct(title) {
      qxl.demobrowser.demo.virtual.AbstractGallery.constructor.call(this, title);
      var fontStyles = qx.theme.manager.Font.getInstance().resolve("default").getStyles();
      this._fontCss = qx.bom.element.Style.compile(fontStyles);
    },
    members: {
      _createScroller: function _createScroller() {
        var scroller = new qx.ui.virtual.core.Scroller(1, this.itemPerLine, this.itemHeight, this.itemWidth);
        this.layer = new qx.ui.virtual.layer.HtmlCell(this);
        scroller.getPane().addLayer(this.layer);
        var lines = new qx.ui.virtual.layer.GridLines("horizontal", "#f3f3f3");
        scroller.getPane().addLayer(lines);
        var lines = new qx.ui.virtual.layer.GridLines("vertical", "#f3f3f3");
        scroller.getPane().addLayer(lines);
        return scroller;
      },
      _onPaneResize: function _onPaneResize(e) {
        qxl.demobrowser.demo.virtual.HtmlGallery.prototype._onPaneResize.base.call(this, e);

        this.manager.clearSelection();
      },
      styleSelectable: function styleSelectable(item, type, wasAdded) {
        this.layer.updateLayerData();
      },
      getCellProperties: function getCellProperties(row, column) {
        var itemData = this.getItemData(row, column);

        if (!itemData) {
          return "";
        }

        var isSelected = this.manager.isItemSelected({
          row: row,
          column: column
        });
        var color = isSelected ? "color: white; background-color: #00398D;" : "";
        return {
          style: ["position: absolute;", "text-align: center;", this._fontCss, color].join(""),
          content: ["<img src='", itemData.resolvedIcon, "'></img>", "<br>", itemData.label].join("")
        };
      }
    },

    /*
     *****************************************************************************
        DESTRUCT
     *****************************************************************************
     */
    destruct: function destruct() {
      this._disposeObjects("layer");
    }
  });
  qxl.demobrowser.demo.virtual.Gallery.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Gallery.js.map?dt=1586350629719