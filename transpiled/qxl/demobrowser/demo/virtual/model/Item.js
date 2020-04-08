(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */
  qx.Class.define("qxl.demobrowser.demo.virtual.model.Item", {
    extend: qx.core.Object,
    construct: function construct(label, icon) {
      qx.core.Object.constructor.call(this);

      if (label != null) {
        this.setLabel(label);
      }

      if (icon != null) {
        this.setIcon(icon);
      }
    },
    properties: {
      label: {
        check: "String",
        event: "changeLabel",
        nullable: true
      },
      icon: {
        check: "String",
        event: "changeIcon",
        nullable: true
      }
    }
  });
  qxl.demobrowser.demo.virtual.model.Item.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Item.js.map?dt=1586350630593