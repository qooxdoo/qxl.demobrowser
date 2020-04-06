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
      "qx.ui.virtual.core.Scroller": {},
      "qx.ui.virtual.layer.Row": {},
      "qx.ui.virtual.layer.GridLines": {},
      "qxl.demobrowser.demo.virtual.DemoLayer": {},
      "qx.ui.virtual.behavior.Prefetch": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
     * Fabian Jakobs (fjakobs)
     * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */

  /**
   * @tag test
   */
  qx.Class.define("qxl.demobrowser.demo.virtual.Complex", {
    extend: qx.application.Standalone,

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      /**
       * This method contains the initial application code and gets called
       * during startup of the application
       */
      main: function main() {
        // Call super class
        qxl.demobrowser.demo.virtual.Complex.prototype.main.base.call(this);
        var scroller = new qx.ui.virtual.core.Scroller(100, 15, 32, 120);
        scroller.getPane().setWidth(450); // change 8 sizes

        for (var i = 2; i < 10; i++) {
          scroller.getPane().getRowConfig().setItemSize(i, 50 + Math.round(Math.random() * 40));
          scroller.getPane().getColumnConfig().setItemSize(i, 50 + Math.round(Math.random() * 80));
        }

        this.getRoot().add(scroller, {
          left: 20,
          top: 10
        });
        scroller.getPane().addLayer(new qx.ui.virtual.layer.Row("white", "rgb(238, 243, 255)"));
        scroller.getPane().addLayer(new qx.ui.virtual.layer.GridLines("horizontal"));
        scroller.getPane().addLayer(new qxl.demobrowser.demo.virtual.DemoLayer()); // Creates the prefetch behavior

        new qx.ui.virtual.behavior.Prefetch(scroller, {
          minLeft: 500,
          maxLeft: 600,
          minRight: 1000,
          maxRight: 1200,
          minAbove: 0,
          maxAbove: 0,
          minBelow: 0,
          maxBelow: 0
        });
      }
    }
  });
  qxl.demobrowser.demo.virtual.Complex.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Complex.js.map?dt=1586199391135