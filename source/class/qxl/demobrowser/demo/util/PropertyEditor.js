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
qx.Class.define("qxl.demobrowser.demo.util.PropertyEditor", {
  extend: qx.ui.core.scroll.AbstractScrollArea,

  construct() {
    super();

    // Force ScrollArea to have an auto-width
    this.setWidth(null);

    this._editorGroups = {};

    var decor = new qx.ui.decoration.Decorator().set({
      widthLeft: 1,
      styleLeft: "solid",
      colorLeft: "black",
    });

    this.setDecorator(decor);
    this.setBackgroundColor("white");

    var pane = new qx.ui.container.Composite().set({
      padding: [20, 14],
    });

    this.getChildControl("pane").add(pane);
    this._pane = pane;

    var layout = new qx.ui.layout.VBox().set({
      spacing: 5,
    });

    pane.setLayout(layout);

    pane.add(this._createWidgetIndicator());

    pane.add(
      new qx.ui.basic.Label("Widget Properties").set({
        font: "bold",
        padding: [1, 0, 5, 0],
      })
    );

    var props = qx.lang.Object.clone(
      qxl.demobrowser.demo.util.PropertyGroup.WIDGET_PROPERTIES
    );
    props.value = { type: "string", nullable: true };

    this._layoutControls = new qxl.demobrowser.demo.util.PropertyGroup(props);
    pane.add(this._layoutControls);
  },

  properties: {
    widget: {
      check: "qx.ui.core.Widget",
      apply: "_applyWidget",
    },
  },

  members: {
    handleWidgetTap(e) {
      var widget = e.getTarget();
      this.setWidget(widget);
    },

    _createWidgetIndicator() {
      var container = new qx.ui.container.Composite(
        new qx.ui.layout.VBox().set({
          spacing: 5,
        })
      );

      container.add(this._createLabel("Selected Widget"));

      this._widgetIndicator = new qx.ui.basic.Label().set({
        height: 30,
        allowGrowX: true,
        allowGrowY: true,
        padding: 5,
      });

      container._add(this._widgetIndicator);

      return container;
    },

    _createLabel(text) {
      return new qx.ui.basic.Label(text).set({
        font: "bold",
        allowGrowX: true,
        padding: [5, 0, 5, 0],
      });
    },

    _createContainer(label, mainWidget) {
      var container = new qx.ui.container.Composite(
        new qx.ui.layout.VBox().set({
          spacing: 5,
        })
      );

      container.add(this._createLabel(label));
      container.add(mainWidget);

      return container;
    },

    updateWidgetLayoutPropertyEditor(widget) {
      var layout = widget.getLayoutParent()
        ? widget.getLayoutParent()._getLayout()
        : null;
      var wlpe = this.getWidgetLayoutPropertyEditor(layout);

      if (wlpe) {
        wlpe.getChildren()[1].setSelected(widget);
      }

      if (wlpe === this._wlpe) {
        return;
      }

      if (this._wlpe) {
        this._pane.remove(this._wlpe);
      }

      if (!wlpe) {
        this._wlpe = wlpe;
        return;
      }

      this._pane.addAfter(wlpe, this._layoutControls);

      this._wlpe = wlpe;
    },

    updateLayoutPropertyEditor(widget) {
      var layout = widget.getLayout ? widget.getLayout() : null;
      var lpe = this.getLayoutPropertyEditor(layout);

      if (lpe) {
        lpe.getChildren()[1].setSelected(layout);
      }

      if (lpe === this._lpe) {
        return;
      }

      if (this._lpe) {
        this._pane.remove(this._lpe);
      }

      if (!lpe) {
        this._lpe = lpe;
        return;
      }

      this._pane.add(lpe);

      this._lpe = lpe;
    },

    getWidgetLayoutPropertyEditor(layout) {
      if (!layout) {
        return null;
      }

      var name = "wlpe_" + layout.constructor.classname;
      var group;

      if (this._editorGroups[name]) {
        return this._editorGroups[name];
      }

      switch (name) {
        case "wlpe_qx.ui.layout.HBox":
        case "wlpe_qx.ui.layout.VBox":
          group = new qxl.demobrowser.demo.util.LayoutPropertyGroup(
            qxl.demobrowser.demo.util.LayoutPropertyGroup.BOX_PROPERTIES
          );

          break;

        case "wlpe_qx.ui.layout.Canvas":
          group = new qxl.demobrowser.demo.util.LayoutPropertyGroup(
            qxl.demobrowser.demo.util.LayoutPropertyGroup.CANVAS_PROPERTIES
          );

          break;

        case "wlpe_qx.ui.layout.Basic":
          group = new qxl.demobrowser.demo.util.LayoutPropertyGroup(
            qxl.demobrowser.demo.util.LayoutPropertyGroup.BASIC_PROPERTIES
          );

          break;

        case "wlpe_qx.ui.layout.Dock":
          group = new qxl.demobrowser.demo.util.LayoutPropertyGroup(
            qxl.demobrowser.demo.util.LayoutPropertyGroup.DOCK_PROPERTIES
          );

          break;

        case "wlpe_qx.ui.layout.Grid":
          group = new qxl.demobrowser.demo.util.LayoutPropertyGroup(
            qxl.demobrowser.demo.util.LayoutPropertyGroup.GRID_PROPERTIES
          );

          break;
      }

      if (!group) {
        return null;
      }

      this._editorGroups[name] = this._createContainer(
        layout.constructor.classname + " layout properties",
        group
      );
      return this._editorGroups[name];
    },

    getLayoutPropertyEditor(layout) {
      if (!layout) {
        return null;
      }

      var name = "lpe_" + layout.constructor.classname;
      var group;

      if (this._editorGroups[name]) {
        return this._editorGroups[name];
      }

      switch (name) {
        case "lpe_qx.ui.layout.HBox":
          group = new qxl.demobrowser.demo.util.PropertyGroup(
            qxl.demobrowser.demo.util.PropertyGroup.HBOX_PROPERTIES
          );

          break;

        case "lpe_qx.ui.layout.Dock":
          group = new qxl.demobrowser.demo.util.PropertyGroup(
            qxl.demobrowser.demo.util.PropertyGroup.DOCK_PROPERTIES
          );

          break;

        case "lpe_qx.ui.layout.Grid":
          group = new qxl.demobrowser.demo.util.PropertyGroup(
            qxl.demobrowser.demo.util.PropertyGroup.GRID_PROPERTIES
          );

          break;
      }

      if (!group) {
        return null;
      }

      this._editorGroups[name] = this._createContainer(
        layout.constructor.classname + " properties",
        group
      );
      return this._editorGroups[name];
    },

    _applyWidget(value, old) {
      this._layoutControls.setSelected(value);

      this._widgetIndicator.setBackgroundColor(value.getBackgroundColor());
      this._widgetIndicator.setDecorator(value.getDecorator());
      this._widgetIndicator.setValue(value.toString());

      this.updateLayoutPropertyEditor(value);
      this.updateWidgetLayoutPropertyEditor(value);
    },
  },

  destruct() {
    this._pane =
      this._editorGroups =
      this._widgetIndicator =
      this._layoutControls =
        null;
  },
});
