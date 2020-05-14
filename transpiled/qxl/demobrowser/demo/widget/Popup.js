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
      "qx.ui.container.Composite": {},
      "qx.ui.form.Button": {},
      "qx.ui.popup.Popup": {},
      "qx.ui.layout.Canvas": {},
      "qx.ui.basic.Atom": {}
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

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   *
   * @asset(qx/icon/${qx.icontheme}/32/apps/media-photo-album.png)
   */
  qx.Class.define("qxl.demobrowser.demo.widget.Popup", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.widget.Popup.prototype.main.base.call(this);
        var box = new qx.ui.layout.HBox();
        box.setSpacing(20);
        var container = new qx.ui.container.Composite(box).set({
          padding: 20
        });
        this.getRoot().add(container);
        container.add(this._getPopupButton1());
        container.add(this._getPopupButton2());
      },
      _getPopupButton1: function _getPopupButton1() {
        var button = new qx.ui.form.Button("Open Popup #1");
        var popup = new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({
          backgroundColor: "#FFFAD3",
          padding: [2, 4],
          offset: 3,
          offsetBottom: 20
        });
        popup.add(new qx.ui.basic.Atom("Hello World #1", "icon/32/apps/media-photo-album.png"));
        button.addListener("pointerdown", function (e) {
          popup.placeToPointer(e);
          popup.show();
        }, this);
        return button;
      },
      _getPopupButton2: function _getPopupButton2() {
        var button = new qx.ui.form.Button("Open Popup #2");
        var popup = new qx.ui.popup.Popup(new qx.ui.layout.Canvas()).set({
          backgroundColor: "#DFFAD3",
          padding: [2, 4],
          offset: 3,
          position: "top-right"
        });
        popup.add(new qx.ui.basic.Atom("Hello World #1", "icon/32/apps/media-photo-album.png"));
        button.addListener("pointerdown", function (e) {
          popup.placeToPointer(e);
          popup.show();
        }, this);
        return button;
      }
    }
  });
  qxl.demobrowser.demo.widget.Popup.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Popup.js.map?dt=1589490218640