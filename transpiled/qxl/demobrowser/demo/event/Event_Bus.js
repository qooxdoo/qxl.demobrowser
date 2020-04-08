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
      "qx.event.message.Bus": {},
      "qx.event.Timer": {}
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
       * Alexander Steitz (aback)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.event.Event_Bus", {
    extend: qxl.demobrowser.demo.event.EventDemo,
    members: {
      main: function main() {
        qxl.demobrowser.demo.event.Event_Bus.prototype.main.base.call(this);

        this._initLogger(["Subscribe", "Dispatch", "Receiving", "Message", "Callback"], document.getElementById("logger"), 50);

        var eventBus = qx.event.message.Bus; // subscribe to message "start"

        eventBus.subscribe("start", this._startCallback, this);

        this._log(["X", "", "", "start", "_startCallback"]); // subscribe to message "start"


        eventBus.subscribe("start", this._anotherStartCallback, this);

        this._log(["X", "", "", "start", "_anotherStartCallback"]); // subscribe to message "loading"


        eventBus.subscribe("loading", this._loadingCallback, this);

        this._log(["X", "", "", "loading", "_loadingCallback"]); // subscribe to message "finished"


        eventBus.subscribe("finished", this._finishedCallback, this);

        this._log(["X", "", "", "finished", "_finishedCallback"]); // subscribe to message "finished"


        eventBus.subscribe("finished", this._anotherFinishedCallback, this);

        this._log(["X", "", "", "finished", "_anotherFinishedCallback"]); // send messages in timeouts
        // 'start' message


        qx.event.Timer.once(function (e) {
          this._log(["", "X", "", "start", ""]);

          eventBus.getInstance().dispatchByName("start");
        }, this, 1000); // 'loading' message

        qx.event.Timer.once(function (e) {
          this._log(["", "X", "", "loading", ""]);

          eventBus.getInstance().dispatchByName("loading");
        }, this, 2500); // 'loading' message

        qx.event.Timer.once(function (e) {
          this._log(["", "X", "", "loading", ""]);

          eventBus.getInstance().dispatchByName("loading");
        }, this, 4000); // 'finished' message

        qx.event.Timer.once(function (e) {
          this._log(["", "X", "", "finished", ""]);

          eventBus.getInstance().dispatchByName("finished");
        }, this, 5000);
      },
      _startCallback: function _startCallback(e) {
        this._log(["", "", "X", "start", "_startCallback"]);
      },
      _anotherStartCallback: function _anotherStartCallback(e) {
        this._log(["", "", "X", "start", "_anotherStartCallback"]);
      },
      _loadingCallback: function _loadingCallback(e) {
        this._log(["", "", "X", "loading", "_loadingCallback"]);
      },
      _finishedCallback: function _finishedCallback(e) {
        this._log(["", "", "X", "finished", "_finishedCallback"]);
      },
      _anotherFinishedCallback: function _anotherFinishedCallback(e) {
        this._log(["", "", "X", "finished", "_anotherFinishedCallback"]);
      }
    }
  });
  qxl.demobrowser.demo.event.Event_Bus.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Event_Bus.js.map?dt=1586350624887