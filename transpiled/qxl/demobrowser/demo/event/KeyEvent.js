(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.demobrowser.demo.event.EventDemo": {
        "require": true
      },
      "qx.bom.Element": {}
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
   * Keyhandler test converted to use the low level event API.
   *
   * @tag noPlayground
   * @tag showcase
   */
  qx.Class.define("qxl.demobrowser.demo.event.KeyEvent", {
    extend: qxl.demobrowser.demo.event.EventDemo,
    members: {
      main: function main() {
        qxl.demobrowser.demo.event.KeyEvent.prototype.main.base.call(this);

        this._initLogger(["Event", "Key identifier", "Char code", "Shift", "Ctrl", "Alt"], document.getElementById("logger"), 50);

        var events = ["keydown", "keypress", "keyup", "keyinput"];

        for (var i = 0; i < events.length; i++) {
          qx.bom.Element.addListener(document.documentElement, events[i], this.logKeyEvent, this);
        }
      },
      logKeyEvent: function logKeyEvent(keyEvent) {
        var type = keyEvent.getType();

        this._log([type, type !== "keyinput" ? keyEvent.getKeyIdentifier() : "", type == "keyinput" ? keyEvent.getCharCode() : "", keyEvent.isShiftPressed(), keyEvent.isCtrlPressed(), keyEvent.isAltPressed()]);

        keyEvent.preventDefault();
      }
    }
  });
  qxl.demobrowser.demo.event.KeyEvent.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=KeyEvent.js.map?dt=1586199387422