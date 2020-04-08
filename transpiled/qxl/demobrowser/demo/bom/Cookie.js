(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.container.Composite": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.form.TextField": {},
      "qx.ui.form.Button": {},
      "qx.bom.Cookie": {}
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
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */

  /**
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.bom.Cookie", {
    extend: qx.application.Standalone,
    statics: {
      COOKIE_KEY: "TextFieldContent"
    },
    members: {
      main: function main() {
        qxl.demobrowser.demo.bom.Cookie.prototype.main.base.call(this);
        var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(8));
        this.getRoot().add(container, {
          left: 20,
          top: 20
        });
        var textField = new qx.ui.form.TextField();
        container.add(textField);
        var saveButton = new qx.ui.form.Button("Save");
        container.add(saveButton);
        saveButton.addListener("execute", function (e) {
          if (textField.getValue() != "") {
            qx.bom.Cookie.set(qxl.demobrowser.demo.bom.Cookie.COOKIE_KEY, textField.getValue());
            textField.setValue("");
          }
        }, this);
        var restoreButton = new qx.ui.form.Button("Restore");
        container.add(restoreButton);
        restoreButton.addListener("execute", function (e) {
          var restoredValue = qx.bom.Cookie.get(qxl.demobrowser.demo.bom.Cookie.COOKIE_KEY);
          textField.setValue(restoredValue != null ? restoredValue : "");
        }, this);
        var deleteButton = new qx.ui.form.Button("Delete");
        container.add(deleteButton);
        deleteButton.addListener("execute", function (e) {
          qx.bom.Cookie.del(qxl.demobrowser.demo.bom.Cookie.COOKIE_KEY);
          textField.setValue("");
        }, this);
      }
    }
  });
  qxl.demobrowser.demo.bom.Cookie.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Cookie.js.map?dt=1586350622750