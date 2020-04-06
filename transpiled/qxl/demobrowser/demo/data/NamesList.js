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
      "qx.ui.form.List": {},
      "qx.data.controller.List": {},
      "qx.util.ResourceManager": {},
      "qx.data.store.Json": {},
      "qx.ui.basic.Label": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2009 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Martin Wittemann (martinwittemann)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   *
   * @asset(qxl/demobrowser/demo/data/persons.json)
   * @tag databinding
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.data.NamesList", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.data.NamesList.prototype.main.base.call(this); // create and add the list

        var list = new qx.ui.form.List();
        this.getRoot().add(list, {
          left: 10,
          top: 80
        }); // create the controller

        var controller = new qx.data.controller.List(null, list); // set the name for the label property

        controller.setLabelPath("firstname"); // convert for the label

        controller.setLabelOptions({
          converter: function converter(data, model) {
            return model ? model.getLastname() + ", " + data : "no model...";
          }
        }); // create the data store

        var url = qx.util.ResourceManager.getInstance().toUri("demobrowser/demo/data/persons.json");
        var store = new qx.data.store.Json(url); // create the status label

        var status = new qx.ui.basic.Label("Loading...");
        this.getRoot().add(status, {
          left: 120,
          top: 80
        }); // connect the store and the controller

        store.bind("model.persons", controller, "model"); // bind the status label

        store.bind("state", status, "value");
        /* ***********************************************
         * DESCRIPTIONS
         * ********************************************* */

        var description = new qx.ui.basic.Label();
        description.setRich(true);
        description.setWidth(470);
        description.setValue("<b>List bound to data in a json file</b><br/>Loading the json file <a href='" + url + "' target='_blank'>" + "persons.json</a> and bind the items to the list widget. In the " + "converter for the label, the names will be set to both, the first " + "and last name.");
        this.getRoot().add(description, {
          left: 10,
          top: 10
        });
      }
    }
  });
  qxl.demobrowser.demo.data.NamesList.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=NamesList.js.map?dt=1586199386806