(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.bom.element.Dimension": {}
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

  /**
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.bom.Dimension", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.Dimension.prototype.main.base.call(this);

        for (var i = 1; i < 1000; i++) {
          var el = document.getElementById("block" + i);

          if (!el) {
            break;
          }

          var msg = "Block " + i + ": Box=" + boxSize(el) + "; Content=" + contentSize(el);
          this.debug(msg);
        }

        function boxSize(el) {
          var Dimension = qx.bom.element.Dimension;
          return Dimension.getWidth(el) + "x" + Dimension.getHeight(el);
        }

        function contentSize(el) {
          var Dimension = qx.bom.element.Dimension;
          return Dimension.getContentWidth(el) + "x" + Dimension.getContentHeight(el);
        }
      }
    }
  });
  qxl.demobrowser.demo.bom.Dimension.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Dimension.js.map?dt=1586199385571