(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.module.Placeholder": {
        "require": true
      },
      "qx.module.event.GestureHandler": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "q": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2012 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (wittemann)
  
  ************************************************************************ */

  /**
   * @require(qx.module.Placeholder)
   * @require(qx.module.event.GestureHandler)
   */
  qx.Class.define("qxl.demobrowser.demo.bom.Placeholder", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.Placeholder.prototype.main.base.call(this); // set the support label

        q("#support").setHtml(q.env.get("css.placeholder") + ""); // add new textfields button

        q("input[type=button]").setAttribute("disabled", null).on("tap", this.addTextField);
        q.placeholder.update();
      },
      addTextField: function addTextField() {
        var now = Date.now();
        var input = q.create("<input type='text' placeholder='" + now + "'/><br>").appendTo(document.body); // set random styles

        input.setStyles({
          width: now % 100 + 50 + "px",
          padding: now % 20 + "px",
          fontSize: now % 30 + 10 + "px",
          fontWeight: now % 2 ? "bold" : "normal",
          fontStyle: now % 2 ? "italic" : "normal",
          fontFamily: ["monospace", "serif", "sans-serif", "cursive"][now % 4]
        }).updatePlaceholder();
      }
    }
  });
  qxl.demobrowser.demo.bom.Placeholder.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Placeholder.js.map?dt=1586350623148