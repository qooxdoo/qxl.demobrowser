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
     * Christian Hagendorn (chris_schmidt)

************************************************************************ */

/* ************************************************************************


************************************************************************ */
/**
 *
 * @asset(qxl/demobrowser/demo/data/persons.json)
 * @asset(qx/icon/${qx.icontheme}/16/devices/*)
 */

qx.Class.define("qxl.demobrowser.demo.virtual.SelectBox", {
  extend: qx.application.Standalone,

  members: {
    main() {
      super.main();

      var scroller = new qx.ui.container.Scroll();
      var container = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
      scroller.add(container, { edge: 0 });

      var standard = new qx.ui.container.Composite(new qx.ui.layout.HBox(50));
      standard.setPadding(20);
      standard.add(this.createBox1());
      standard.add(this.createBox2());
      standard.add(this.createBox3());
      standard.add(this.createBox4());

      var advanced = new qx.ui.container.Composite(new qx.ui.layout.HBox(50));
      advanced.setPadding(20);
      advanced.add(this.createBox5());
      advanced.add(this.createBox6());
      advanced.add(this.createBox7());

      var incrementalSearch = new qx.ui.container.Composite(
        new qx.ui.layout.HBox(50)
      );
      incrementalSearch.setPadding(20);
      incrementalSearch.add(this.createBox8());
      incrementalSearch.add(this.createBox9());
      incrementalSearch.add(this.createBox10());

      container.add(standard, { left: 20, top: 20 });
      container.add(advanced, { left: 20, top: 200 });
      container.add(incrementalSearch, { left: 20, top: 380 });
      this.getRoot().add(scroller, { edge: 0 });
    },

    createBox1() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(new qx.ui.basic.Label("Simple"));

      // Creates the model data
      var model = new qx.data.Array();
      for (var i = 0; i < 300; i++) {
        model.push("Item " + (i + 1));
      }

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model);
      container.add(selectBox);

      // Pre-Select "Item No 6"
      selectBox.getSelection().push(model.getItem(5));

      // log all changes on the selection
      selectBox.getSelection().addListener("change", function (e) {
        this.debug("Change selection: ", selectBox.getSelection().getItem(0));
      });

      return container;
    },

    createBox2() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(new qx.ui.basic.Label("Long text"));

      // Creates the model data
      var model = new qx.data.Array();
      for (var i = 0; i < 300; i++) {
        model.push("Random Value " + Math.round(Math.random() * 100000000));
      }

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model);
      container.add(selectBox);

      // Bind selection with tooltip
      selectBox.bind("selection[0]", selectBox, "toolTipText", null);
      var delegate = {
        bindItem(controller, item, id) {
          controller.bindDefaultProperties(item, id);
          controller.bindProperty("", "toolTipText", null, item, id);
        },
      };

      selectBox.setDelegate(delegate);

      return container;
    },

    createBox3() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(new qx.ui.basic.Label("With icons"));

      var iconNames = [
        "audio-card",
        "audio-input-microphone",
        "battery",
        "camera-photo",
        "camera-web",
        "computer",
        "display",
        "drive-harddisk",
        "drive-optical",
        "input-keyboard",
        "input-mouse",
        "media-flash",
        "media-optical",
        "multimedia-player",
        "network-wired",
        "network-wireless",
        "pda",
        "phone",
        "printer",
      ];

      var iconPrefix = "icon/16/devices/";
      var iconPostfix = ".png";

      // Creates row model data
      var rawData = [];
      for (var i = 0; i < iconNames.length; i++) {
        rawData.push({
          label: iconNames[i],
          icon: iconPrefix + iconNames[i] + iconPostfix,
        });
      }

      // Creates the model data
      var model = qx.data.marshal.Json.createModel(rawData);

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model).set({
        labelPath: "label",
        iconPath: "icon",
      });

      container.add(selectBox);

      return container;
    },

    createBox4() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(new qx.ui.basic.Label("Empty Item"));

      // Creates the model data
      var model = new qx.data.Array();
      model.push("");

      for (var i = 0; i < 300; i++) {
        model.push("Option " + (i + 1));
      }

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model);
      container.add(selectBox);

      return container;
    },

    createBox5() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(new qx.ui.basic.Label("Sorted"));

      // Creates the model data
      var model = new qx.data.Array();

      for (var i = 0; i < 300; i++) {
        model.push("Item " + i);
      }

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model);
      container.add(selectBox);

      // Creates the delegate for sorting
      var delegate = {
        // Changes the order (downwards)
        sorter(a, b) {
          return a < b ? 1 : a > b ? -1 : 0;
        },
      };

      selectBox.setDelegate(delegate);

      return container;
    },

    createBox6() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(new qx.ui.basic.Label("Filtered"));

      // Creates the model data
      var model = new qx.data.Array();

      for (var i = 0; i < 300; i++) {
        model.push("Item " + i);
      }

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model);
      container.add(selectBox);

      // Creates the delegate for sorting
      var delegate = {
        // Filters all even items
        filter(data) {
          return parseInt(data.slice(5, data.length), 10) % 2 == 1;
        },
      };

      selectBox.setDelegate(delegate);

      return container;
    },

    createBox7() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(new qx.ui.basic.Label("Grouped with Persons"));

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox();
      selectBox.setLabelPath("firstname");
      selectBox.setLabelOptions({
        converter(data, model) {
          return model ? data + " " + model.getLastname() : "no model...";
        },
      });

      container.add(selectBox);

      // Loads and create the model data
      var url = qx.util.ResourceManager.getInstance().toUri(
        "qxl/demobrowser/demo/data/persons.json"
      );
      var store = new qx.data.store.Json(url);
      store.bind("model.persons", selectBox, "model");

      // Creates the delegate for sorting
      var delegate = {
        // Sorts the model data by first name
        sorter(a, b) {
          a = a.getFirstname();
          b = b.getFirstname();

          return a > b ? 1 : a < b ? -1 : 0;
        },

        // Assign the group name for each item (fist char form first name)
        group(model) {
          return model.getFirstname().charAt(0).toUpperCase();
        },
      };

      selectBox.setDelegate(delegate);

      return container;
    },

    createBox8() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(
        new qx.ui.basic.Label("Incremental Search, plain highlighting")
      );

      // Creates the model data
      var rawData = [
        "Elm street",
        "Abbey road",
        "Route 61",
        "Central station",
        "Central Park",
        "Park Avenue",
        "Broadway",
        "Hohle Gasse",
        "Überlandstrasse",
      ];

      var model = qx.data.marshal.Json.createModel(rawData);

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model).set({
        incrementalSearch: true,
        highlightMode: "plain",
      });

      container.add(selectBox);

      return container;
    },

    createBox9() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(
        new qx.ui.basic.Label("Incremental Search, html highlighting")
      );

      // Creates the model data
      var rawData = [
        "Elm street",
        "Abbey road",
        "Route 61",
        "Central station",
        "Central Park",
        "Park Avenue",
        "Broadway",
        "Hohle Gasse",
        "Überlandstrasse",
      ];

      var model = qx.data.marshal.Json.createModel(rawData);

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model).set({
        incrementalSearch: true,
        highlightMode: "html",
      });

      container.add(selectBox);

      return container;
    },

    createBox10() {
      var container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
      container.add(
        new qx.ui.basic.Label("Incremental Search, no highlighting")
      );

      // Creates the model data
      var rawData = [
        "Elm street",
        "Abbey road",
        "Route 61",
        "Central station",
        "Central Park",
        "Park Avenue",
        "Broadway",
        "Hohle Gasse",
        "Überlandstrasse",
      ];

      var model = qx.data.marshal.Json.createModel(rawData);

      // Creates the select box
      var selectBox = new qx.ui.form.VirtualSelectBox(model).set({
        incrementalSearch: true,
        highlightMode: "none",
      });

      container.add(selectBox);

      return container;
    },
  },
});
