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
qx.Class.define("qxl.demobrowser.demo.layout.Dock_Separator", {
  extend: qxl.demobrowser.demo.util.LayoutApplication,

  members: {
    main() {
      super.main();

      var scroll = new qx.ui.container.Scroll();
      this.getRoot().add(scroll, { edge: 0 });

      var container = new qx.ui.container.Composite(
        new qx.ui.layout.VBox(20)
      ).set({
        padding: 20,
      });

      scroll.add(container);

      // default layout, auto-sized
      var dock = new qx.ui.layout.Dock();
      dock.setSeparatorX("separator-horizontal");
      dock.setSeparatorY("separator-vertical");
      dock.setSpacingX(5);
      dock.setSpacingY(5);

      var widget = new qx.ui.container.Composite(dock).set({
        decorator: "main",
        backgroundColor: "yellow",
        allowGrowX: false,
      });

      var w1 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "red",
      });
      var w2 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "blue",
      });
      var w3 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "orange",
      });
      var w4 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "green",
      });
      var w5 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "fuchsia",
      });

      widget.add(w1, { edge: "north" });
      widget.add(w2, { edge: "west" });
      widget.add(w3, { edge: "south" });
      widget.add(w4, { edge: "east" });
      widget.add(w5, { edge: "center" });

      container.add(widget);

      // y-axis first, auto-sized
      var dock = new qx.ui.layout.Dock();
      dock.setSort("y");
      dock.setSeparatorX("separator-horizontal");
      dock.setSeparatorY("separator-vertical");
      dock.setSpacingX(5);
      dock.setSpacingY(5);

      var widget = new qx.ui.container.Composite(dock).set({
        decorator: "main",
        backgroundColor: "yellow",
        allowGrowX: false,
      });

      var w1 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "red",
      });
      var w2 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "blue",
      });
      var w3 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "orange",
      });
      var w4 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "green",
      });
      var w5 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "fuchsia",
      });

      widget.add(w1, { edge: "north" });
      widget.add(w2, { edge: "west" });
      widget.add(w3, { edge: "south" });
      widget.add(w4, { edge: "east" });
      widget.add(w5, { edge: "center" });

      container.add(widget);

      // x-axis first, auto-sized
      var dock = new qx.ui.layout.Dock();
      dock.setSort("x");
      dock.setSeparatorX("separator-horizontal");
      dock.setSeparatorY("separator-vertical");
      dock.setSpacingX(5);
      dock.setSpacingY(5);

      var widget = new qx.ui.container.Composite(dock).set({
        decorator: "main",
        backgroundColor: "yellow",
        allowGrowX: false,
      });

      var w1 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "red",
      });
      var w2 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "blue",
      });
      var w3 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "orange",
      });
      var w4 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "green",
      });
      var w5 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "fuchsia",
      });

      widget.add(w1, { edge: "north" });
      widget.add(w2, { edge: "west" });
      widget.add(w3, { edge: "south" });
      widget.add(w4, { edge: "east" });
      widget.add(w5, { edge: "center" });

      container.add(widget);

      // default layout, auto-sized + connected separators
      var dock = new qx.ui.layout.Dock();
      dock.setSeparatorX("separator-horizontal");
      dock.setSeparatorY("separator-vertical");
      dock.setSpacingX(5);
      dock.setSpacingY(5);
      dock.setConnectSeparators(true);

      var widget = new qx.ui.container.Composite(dock).set({
        decorator: "main",
        backgroundColor: "yellow",
        allowGrowX: false,
      });

      var w1 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "red",
      });
      var w2 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "blue",
      });
      var w3 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "orange",
      });
      var w4 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "green",
      });
      var w5 = new qx.ui.core.Widget().set({
        decorator: "main",
        backgroundColor: "fuchsia",
      });

      widget.add(w1, { edge: "north" });
      widget.add(w2, { edge: "west" });
      widget.add(w3, { edge: "south" });
      widget.add(w4, { edge: "east" });
      widget.add(w5, { edge: "center" });

      container.add(widget);
    },
  },
});
