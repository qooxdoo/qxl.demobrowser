(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.module.Traversing": {
        "require": true
      },
      "qx.module.Animation": {
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /* ************************************************************************
  ************************************************************************ */

  /**
   * @tag noPlayground
   *
   * @require(qx.module.Traversing)
   * @require(qx.module.Animation)
   */
  qx.Class.define("qxl.demobrowser.demo.animation.Timing", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.animation.Timing.prototype.main.base.call(this);
        var timings = ["ease", "linear", "ease-in", "ease-out", "ease-in-out"];
        var colors = ["#3399CC", "#67B8DE", "#91C9E8", "#B4DCED", "#E8F8FF"]; // create the buttons

        for (var i = 0; i < timings.length; i++) {
          var timing = timings[i];
          var bar = document.createElement("div");
          bar.innerHTML = timing;
          bar.className = "bar";
          bar.style.backgroundColor = colors[i % colors.length];
          document.body.appendChild(bar);
        }

        ;
        this.start();
        window.setInterval(this.start, 3000);
      },
      start: function start() {
        q(".bar").forEach(function (item) {
          var timing = item.innerHTML;
          q(item).animate({
            timing: timing,
            duration: 2000,
            keep: 100,
            keyFrames: {
              0: {
                width: "100px"
              },
              100: {
                width: "700px"
              }
            }
          });
        });
      }
    }
  });
  qxl.demobrowser.demo.animation.Timing.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Timing.js.map?dt=1589490211022