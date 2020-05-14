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
      "qx.locale.Manager": {},
      "qx.ui.control.ColorPopup": {},
      "qx.ui.form.Button": {},
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
       * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */
  qx.Class.define("qxl.demobrowser.demo.widget.ColorPopup", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.widget.ColorPopup.prototype.main.base.call(this);
        var doc = this.getRoot();
        /* Set locale to english to avoid language mix if browser locale is
         * non-english. */

        qx.locale.Manager.getInstance().setLocale("en");
        var mypop = new qx.ui.control.ColorPopup();
        mypop.exclude();
        mypop.setValue("#23F3C1");
        var mybtn = new qx.ui.form.Button("Open Popup");
        mybtn.addListener("execute", function (e) {
          mypop.placeToWidget(mybtn);
          mypop.show();
        });
        var myview = new qx.ui.basic.Label("Selected Color").set({
          marginLeft: 10,
          padding: [3, 6],
          decorator: "main"
        });
        doc.add(myview, {
          left: 120,
          top: 20
        });
        doc.add(mybtn, {
          left: 20,
          top: 20
        });
        doc.add(mypop, {
          left: 100,
          top: 100
        });
        mypop.addListener("changeValue", function (e) {
          this.debug("Value Listener: " + e.getData());
          myview.setBackgroundColor(e.getData());
        });
        mypop.addListener("changeRed", function (e) {
          this.debug("Red Listener: " + e.getData());
        });
        mypop.addListener("changeGreen", function (e) {
          this.debug("Green Listener: " + e.getData());
        });
        mypop.addListener("changeBlue", function (e) {
          this.debug("Blue Listener: " + e.getData());
        });
      }
    }
  });
  qxl.demobrowser.demo.widget.ColorPopup.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ColorPopup.js.map?dt=1589490217988