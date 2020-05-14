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
      "qx.dom.Element": {},
      "qx.bom.element.Attribute": {}
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
  qx.Class.define("qxl.demobrowser.demo.bom.AttributeStyle_2", {
    extend: qx.application.Native,
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.AttributeStyle_2.prototype.main.base.call(this);
        var chk = qx.dom.Element.create("input", {
          type: "checkbox",
          checked: true,
          id: "chk"
        });
        document.body.appendChild(chk);
        var lab = qx.dom.Element.create("label", {
          "for": "chk"
        });
        qx.bom.element.Attribute.set(lab, "text", "Checkbox #1");
        document.body.appendChild(lab);
      }
    }
  });
  qxl.demobrowser.demo.bom.AttributeStyle_2.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=AttributeStyle_2.js.map?dt=1589490211097