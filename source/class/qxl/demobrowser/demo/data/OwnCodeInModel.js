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
 * @asset(qxl/demobrowser/demo/data/list.json)
 * @asset(qx/icon/${qx.icontheme}/16/mimetypes/*)
 * @tag databinding
 * @tag delegate
 * @ignore(qxl.demobrowser.demo.data.ItemsMixin)
 */
qx.Class.define("qxl.demobrowser.demo.data.OwnCodeInModel", {
  extend: qx.application.Standalone,

  members: {
    main() {
      super.main();

      // create and add the list
      var list = new qx.ui.form.List();
      this.getRoot().add(list, { left: 10, top: 80 });

      // create the controller
      var controller = new qx.data.controller.List(null, list);
      // set the name for the label property
      controller.setLabelPath("name");
      // set a converter for the icons
      controller.setIconOptions({
        converter(data) {
          return "icon/16/mimetypes/" + data + ".png";
        },
      });
      // set the name of the icon property
      controller.setIconPath("type");

      // create the store delegate
      var delegate = {
        getModelMixins(properties) {
          // if the mixin for the items class is needed
          if (properties == "items") {
            return qxl.demobrowser.demo.data.ItemsMixin;
          }
        },
      };

      // create the data store
      var url = qx.util.ResourceManager.getInstance().toUri(
        "qxl/demobrowser/demo/data/list.json"
      );
      var store = new qx.data.store.Json(url, delegate);

      // connect the store and the controller
      store.bind("model.items", controller, "model");

      /* ***********************************************
       * Controlls: Do only work on the data array
       * ********************************************* */
      var sortByTypeButton = new qx.ui.form.Button("Sort By Type");
      sortByTypeButton.setWidth(120);
      this.getRoot().add(sortByTypeButton, { left: 130, top: 80 });
      sortByTypeButton.addListener(
        "execute",
        function () {
          // execute the new added method on the model
          store.getModel().sortByType();
        },
        this
      );

      var sortByNameButton = new qx.ui.form.Button("Sort By Name");
      sortByNameButton.setWidth(120);
      this.getRoot().add(sortByNameButton, { left: 130, top: 110 });
      sortByNameButton.addListener(
        "execute",
        function () {
          // execute the new added method on the model
          store.getModel().sortByName();
        },
        this
      );

      /* ***********************************************
       * DESCRIPTIONS
       * ********************************************* */
      // List Selection sync description
      var syncListDescription = new qx.ui.basic.Label();
      syncListDescription.setRich(true);
      syncListDescription.setWidth(410);
      syncListDescription.setValue(
        "<b>Adding own code to the model</b><br/>" +
          "Using the delegation to bring two sort function to the root model " +
          "class of this demo. The buttons just calling those sort functions."
      );

      this.getRoot().add(syncListDescription, { left: 10, top: 10 });
    },
  },
});

/**
 * Mixin for the items model containing two sort functions.
 */
qx.Mixin.define("qxl.demobrowser.demo.data.ItemsMixin", {
  members: {
    sortByType() {
      var dataArray = this.getItems();
      dataArray.sort(function (a, b) {
        if (a.getType() > b.getType()) {
          return 1;
        } else if (a.getType() < b.getType()) {
          return -1;
        }
        return 0;
      });
    },

    sortByName() {
      var dataArray = this.getItems();
      dataArray.sort(function (a, b) {
        return a.getName() > b.getName() ? 1 : -1;
      });
    },
  },
});
