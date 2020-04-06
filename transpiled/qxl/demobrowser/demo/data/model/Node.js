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
      },
      "qx.data.Array": {
        "construct": true,
        "usage": "dynamic",
        "require": true
      },
      "qx.core.ValidationError": {}
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
  qx.Class.define("qxl.demobrowser.demo.data.model.Node", {
    extend: qx.core.Object,
    construct: function construct() {
      qx.core.Object.constructor.call(this);
      this.setChildren(new qx.data.Array());
    },
    properties: {
      children: {
        check: "qx.data.Array",
        event: "changeChildren"
      },
      child: {
        check: "qxl.demobrowser.demo.data.model.Node",
        event: "changeChild",
        nullable: true
      },
      names: {
        check: "qx.data.Array",
        event: "changeNames",
        init: new qx.data.Array("Homer", "Marge")
      },
      name: {
        check: "String",
        init: "AFFE",
        event: "changeName"
      },
      name2: {
        check: "String",
        event: "changeName2"
      },
      number: {
        init: 10,
        validate: "__validateNumber"
      },
      color: {
        event: "changeColor",
        nullable: true
      }
    },
    members: {
      __validateNumber: function __validateNumber(value) {
        // check if its a number
        if (!isNaN(parseFloat(value))) {
          if (/^\d+$/.test(value)) {
            return;
          }
        }

        throw new qx.core.ValidationError("Validation Error: " + value + "is no number (parseFloat says so!).");
      },
      toString: function toString(indent) {
        if (indent == undefined) {
          indent = 0;
        }

        var returnString = "";

        for (var i = 0; i < indent; i++) {
          returnString += "- ";
        }

        returnString += this.getName();

        for (var i = 0; i < this.getChildren().length; i++) {
          returnString += "\n" + this.getChildren().getItem(i).toString(indent + 1);
        }

        return returnString;
      }
    }
  });
  qxl.demobrowser.demo.data.model.Node.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Node.js.map?dt=1586199387198