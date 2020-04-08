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
      "qx.bom.element.Clip": {},
      "qx.log.Logger": {}
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
  qx.Class.define("qxl.demobrowser.demo.bom.Clip", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.Clip.prototype.main.base.call(this);
        window.APPLICATION = this;
        var el = document.getElementById("test1");
        var clip = qx.bom.element.Clip.get(el) || {};
        qx.log.Logger.debug("Clip init: " + clip.left + "," + clip.top + "  " + clip.width + "," + clip.height);
      },
      set0: function set0() {
        var el = document.getElementById("test1");
        qx.log.Logger.debug("Setting to: 20,20  120,40");
        qx.bom.element.Clip.set(el, {
          left: 20,
          top: 20,
          width: 120,
          height: 40
        });
        var clip = qx.bom.element.Clip.get(el) || {};
        qx.log.Logger.debug("Clip after: " + clip.left + "," + clip.top + "  " + clip.width + "," + clip.height);
      },
      set1: function set1() {
        var el = document.getElementById("test1");
        qx.log.Logger.debug("Setting to: 20,20  null,40");
        qx.bom.element.Clip.set(el, {
          left: 20,
          top: 20,
          height: 40
        });
        var clip = qx.bom.element.Clip.get(el) || {};
        qx.log.Logger.debug("Clip after: " + clip.left + "," + clip.top + "  " + clip.width + "," + clip.height);
      },
      set2: function set2() {
        var el = document.getElementById("test1");
        qx.log.Logger.debug("Setting to: 20,20  120,null");
        qx.bom.element.Clip.set(el, {
          left: 20,
          top: 20,
          width: 120
        });
        var clip = qx.bom.element.Clip.get(el) || {};
        qx.log.Logger.debug("Clip after: " + clip.left + "," + clip.top + "  " + clip.width + "," + clip.height);
      },
      set3: function set3() {
        var el = document.getElementById("test1");
        qx.log.Logger.debug("Setting to: null,20  120,40");
        qx.bom.element.Clip.set(el, {
          top: 20,
          width: 120,
          height: 40
        });
        var clip = qx.bom.element.Clip.get(el) || {};
        qx.log.Logger.debug("Clip after: " + clip.left + "," + clip.top + "  " + clip.width + "," + clip.height);
      },
      set4: function set4() {
        var el = document.getElementById("test1");
        qx.log.Logger.debug("Setting to: 20,null  120,40");
        qx.bom.element.Clip.set(el, {
          left: 20,
          width: 120,
          height: 40
        });
        var clip = qx.bom.element.Clip.get(el) || {};
        qx.log.Logger.debug("Clip after: " + clip.left + "," + clip.top + "  " + clip.width + "," + clip.height);
      },
      reset: function reset() {
        var el = document.getElementById("test1");
        qx.log.Logger.debug("Resetting");
        qx.bom.element.Clip.reset(el);
        var clip = qx.bom.element.Clip.get(el) || {};
        qx.log.Logger.debug("Clip after: " + clip.left + "," + clip.top + "  " + clip.width + "," + clip.height);
      }
    }
  });
  qxl.demobrowser.demo.bom.Clip.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Clip.js.map?dt=1586350622717