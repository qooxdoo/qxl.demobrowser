(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "require": true
      }
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
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */
  qx.Class.define("qxl.demobrowser.demo.data.model.Person", {
    extend: qx.core.Object,
    properties: {
      name: {
        check: "String",
        event: "changeName",
        nullable: true
      },
      emote: {
        check: "String",
        event: "changeEmote"
      },
      online: {
        check: "Boolean",
        event: "changeOnline",
        init: true
      }
    },
    members: {
      toString: function toString() {
        return this.getName() + " is " + (this.getOnline() ? "online" : "offline");
      }
    }
  });
  qxl.demobrowser.demo.data.model.Person.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Person.js.map?dt=1589490213030