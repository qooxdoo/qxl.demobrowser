(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.dispatch.DomBubbling": {},
      "qx.event.handler.Keyboard": {},
      "qx.event.handler.Pointer": {},
      "qx.event.handler.Element": {},
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.demobrowser.demo.event.EventDemo": {
        "require": true
      },
      "qx.event.Registration": {}
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
   * @tag noPlayground
   *
   * @use(qx.event.dispatch.DomBubbling)
   * @use(qx.event.handler.Keyboard)
   * @use(qx.event.handler.Pointer)
   * @use(qx.event.handler.Element)
   */
  qx.Class.define("qxl.demobrowser.demo.event.Event_Bubbling", {
    extend: qxl.demobrowser.demo.event.EventDemo,
    members: {
      main: function main() {
        qxl.demobrowser.demo.event.Event_Bubbling.prototype.main.base.call(this);

        this._initLogger(["Event", "Target", "Current target", "Event phase"], document.getElementById("logger"), 50);

        for (var i = 1; i < 10; i++) {
          var div = document.getElementById("div" + i);
          qx.event.Registration.addListener(div, "tap", this._cascadeCapture, this, true);
          qx.event.Registration.addListener(div, "tap", this._cascadeBubble, this, false);
        }
      },
      _cascadeCapture: function _cascadeCapture(e) {
        this._log([e.getType(), e.getTarget().id, e.getCurrentTarget().id, e.getEventPhase() == 2 ? "at target" : "capture"]);
      },
      _cascadeBubble: function _cascadeBubble(e) {
        this._log([e.getType(), e.getTarget().id, e.getCurrentTarget().id, e.getEventPhase() == 2 ? "at target" : "bubble"]);
      }
    }
  });
  qxl.demobrowser.demo.event.Event_Bubbling.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Event_Bubbling.js.map?dt=1586199387310