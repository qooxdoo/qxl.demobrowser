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
      "qx.ui.control.ColorSelector": {},
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
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /* ************************************************************************
  
  ************************************************************************ */
  qx.Class.define("qxl.demobrowser.demo.widget.ColorSelector", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.widget.ColorSelector.prototype.main.base.call(this);
        /* Set locale to english to avoid language mix if browser locale is
         * non-english. */

        qx.locale.Manager.getInstance().setLocale("en");
        var selector = new qx.ui.control.ColorSelector();
        this.getRoot().add(selector, {
          left: 20,
          top: 20
        }); // value property

        var label = new qx.ui.basic.Label("<b>value:</b>");
        label.setRich(true);
        this.getRoot().add(label, {
          left: 20,
          top: 340
        });
        var valueLabel = new qx.ui.basic.Label();
        this.getRoot().add(valueLabel, {
          left: 60,
          top: 340
        });
        selector.bind("value", valueLabel, "value");
      }
    }
  });
  qxl.demobrowser.demo.widget.ColorSelector.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=ColorSelector.js.map?dt=1589490218007