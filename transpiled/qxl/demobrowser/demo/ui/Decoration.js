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
      "qx.ui.layout.HBox": {},
      "qx.ui.container.Scroll": {},
      "qx.ui.container.Composite": {},
      "qx.theme.manager.Decoration": {},
      "qx.ui.core.queue.Dispose": {},
      "qx.ui.layout.Grid": {},
      "qx.ui.basic.Label": {}
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
  qx.Class.define("qxl.demobrowser.demo.ui.Decoration", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.ui.Decoration.prototype.main.base.call(this);
        var box = new qx.ui.layout.HBox();
        box.setSpacing(10);
        var scroller = new qx.ui.container.Scroll();
        this.getRoot().add(scroller, {
          edge: 0
        });
        var container = new qx.ui.container.Composite(box);
        container.setPadding(20);
        scroller.add(container);
        container.add(this.getDecorations());
        qx.theme.manager.Decoration.getInstance().addListener("changeTheme", function () {
          container.getChildren()[0].destroy();
          qx.ui.core.queue.Dispose.flush();
          container.add(this.getDecorations());
        }, this);
      },
      getDecorations: function getDecorations() {
        var theme = qx.theme.manager.Decoration.getInstance().getTheme(); // auto size

        var layout = new qx.ui.layout.Grid();
        layout.setSpacing(10);
        var box = new qx.ui.container.Composite(layout);
        var decorations = theme.decorations;
        var columns = 8;
        var i = 0;

        for (var key in decorations) {
          box.add(new qx.ui.basic.Label(key).set({
            rich: true,
            wrap: true,
            decorator: key,
            padding: 5,
            height: 80,
            width: 80
          }), {
            row: Math.floor(i / columns),
            column: i % columns
          });
          i += 1;
        }

        return box;
      }
    }
  });
  qxl.demobrowser.demo.ui.Decoration.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Decoration.js.map?dt=1589490215985