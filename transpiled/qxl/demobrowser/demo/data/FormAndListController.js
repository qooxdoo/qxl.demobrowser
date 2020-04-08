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
      "qx.data.marshal.Json": {},
      "qx.ui.form.Form": {},
      "qx.ui.form.TextField": {},
      "qx.ui.form.SelectBox": {},
      "qx.data.controller.List": {},
      "qx.ui.form.RadioButtonGroup": {},
      "qx.ui.form.RadioButton": {},
      "qx.ui.form.renderer.Single": {},
      "qx.data.controller.Form": {},
      "qx.ui.form.Button": {},
      "qx.dev.Debug": {}
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

  /**
   * @tag databinding
   * @tag list controller
   * @tag form controller
   */
  qx.Class.define("qxl.demobrowser.demo.data.FormAndListController", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.data.FormAndListController.prototype.main.base.call(this); // create some dummy data

        var data = {
          firstname: "Martin",
          lastname: "Wittemann",
          gender: [{
            label: "male",
            data: "M"
          }, {
            label: "female",
            data: "F"
          }, {
            label: "dont know!",
            data: "?"
          }, {
            label: "Alien",
            data: "A"
          }],
          sendByEmail: "mail"
        };
        var model = qx.data.marshal.Json.createModel(data); // create the form

        var form = new qx.ui.form.Form(); // firstname

        var firstname = new qx.ui.form.TextField();
        form.add(firstname, "Firstname"); // lastname

        var lastname = new qx.ui.form.TextField();
        form.add(lastname, "Lastname"); // gender

        var gender = new qx.ui.form.SelectBox();
        var genderController = new qx.data.controller.List(null, gender);
        genderController.setDelegate({
          bindItem: function bindItem(controller, item, index) {
            controller.bindProperty("label", "label", null, item, index);
            controller.bindProperty("data", "model", null, item, index);
          }
        });
        genderController.setModel(model.getGender());
        form.add(gender, "Gender"); // email / mail

        var radioGroup = new qx.ui.form.RadioButtonGroup();
        var emailButton = new qx.ui.form.RadioButton("Send By Email");
        emailButton.setModel("email");
        var mailButton = new qx.ui.form.RadioButton("Send By Mail");
        mailButton.setModel("mail");
        radioGroup.add(emailButton);
        radioGroup.add(mailButton);
        form.add(radioGroup, "", null, "sendByEmail"); // create the form and add it to the root

        this.getRoot().add(new qx.ui.form.renderer.Single(form), {
          left: 30,
          top: 20
        }); // create a form controller!

        new qx.data.controller.Form(model, form); // A button to log the models content

        var logButton = new qx.ui.form.Button("Show model data in the log");
        this.getRoot().add(logButton, {
          left: 240,
          top: 20
        });
        logButton.addListener("execute", function () {
          this.debug(qx.dev.Debug.debugProperties(model));
        }, this);
      }
    }
  });
  qxl.demobrowser.demo.data.FormAndListController.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=FormAndListController.js.map?dt=1586350623866