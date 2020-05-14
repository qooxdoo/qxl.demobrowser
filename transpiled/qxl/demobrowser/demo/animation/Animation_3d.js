(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.module.event.PointerHandler": {
        "require": true
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Native": {
        "require": true
      },
      "qx.bom.client.CssAnimation": {},
      "qx.bom.client.CssTransform": {},
      "qx.bom.element.Animation": {},
      "qx.bom.element.Transform": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "css.animation": {
          "className": "qx.bom.client.CssAnimation"
        },
        "css.transform.3d": {
          "className": "qx.bom.client.CssTransform"
        }
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

  /**
   * @tag noPlayground
   * @require(qx.module.event.PointerHandler)
   */
  qx.Class.define("qxl.demobrowser.demo.animation.Animation_3d", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.animation.Animation_3d.prototype.main.base.call(this); // check for annimation support

        if (qx.core.Environment.get("css.animation") == null || !qx.core.Environment.get("css.transform.3d")) {
          document.body.innerHTML = "";
          var label = document.createElement('label');
          label.innerHTML = "CSS animations not supported, sorry!";
          document.body.appendChild(label);
          return;
        } // test transform style


        var spin = {
          duration: 10000,
          repeat: "infinite",
          keyFrames: {
            0: {
              rotate: [null, "0deg"]
            },
            100: {
              rotate: [null, "360deg"]
            }
          }
        };
        var parent = document.getElementById("parent");
        qx.bom.element.Animation.animate(parent, spin);
        qx.bom.element.Transform.setStyle(parent, "preserve-3d");
        qx.bom.element.Transform.transform(parent.children[0], {
          translate: [null, null, "-100px"],
          rotate: [null, "45deg"]
        });
        qx.bom.element.Transform.transform(parent.children[1], {
          translate: [null, null, "50px"],
          rotate: ["20deg"]
        });
        qx.bom.element.Transform.setOrigin(parent.children[1], "center top"); // pointer handler

        var container = document.getElementById("container");
        qx.bom.element.Transform.setPerspective(container, 500);
        qxWeb(container).on("pointerover", function () {
          qx.bom.element.Transform.setStyle(parent, "flat");
        });
        qxWeb(container).on("pointerout", function () {
          qx.bom.element.Transform.setStyle(parent, "preserve-3d");
        });
      }
    }
  });
  qxl.demobrowser.demo.animation.Animation_3d.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Animation_3d.js.map?dt=1589490210880