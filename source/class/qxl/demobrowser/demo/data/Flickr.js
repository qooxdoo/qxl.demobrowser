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
 * @ignore(qxl.demobrowser.demo.data.store.Flickr)
 * @ignore(qxl.demobrowser.demo.data.store)
 * @tag databinding
 * @tag showcase
 */
qx.Class.define("qxl.demobrowser.demo.data.Flickr", {
  extend: qx.application.Standalone,

  members: {
    main() {
      super.main();

      // fetch some data from Flickr
      var store = new qxl.demobrowser.demo.data.store.Flickr("qooxdoo");

      /* ***********************************************
       * CONTROLS
       * ********************************************* */
      var search = new qx.ui.form.TextField("qooxdoo");
      this.getRoot().add(search, { left: 30, top: 50 });
      var searchGo = new qx.ui.form.Button("Search");
      this.getRoot().add(searchGo, { left: 140, top: 49 });
      searchGo.addListener(
        "execute",
        function () {
          store.searchForTag(search.getValue());
        },
        this
      );
      search.addListener(
        "keydown",
        function (e) {
          if (e.getKeyIdentifier() == "Enter") {
            store.searchForTag(search.getValue());
          }
        },
        this
      );

      /* ***********************************************
       * STATUS
       * ********************************************* */
      var status = new qx.ui.basic.Label("loading");
      this.getRoot().add(status, { left: 210, top: 52 });
      store.bind("state", status, "value");

      /* ***********************************************
       * LIST OF PHOTOS
       * ********************************************* */
      var list = new qx.ui.form.List();
      list.setWidth(700);
      list.setHeight(110);
      list.setOrientation("horizontal");
      this.getRoot().add(list, { left: 30, right: 30, top: 80 });

      var controller = new qx.data.controller.List(null, list);
      controller.setLabelPath("title");

      controller.setDelegate({
        configureItem(item) {
          item.setShow("icon");
        },
      });

      var iconOptions = {
        converter(data, model) {
          return (
            "http://farm" +
            model.getFarm() +
            ".static.flickr.com/" +
            model.getServer() +
            "/" +
            data +
            "_" +
            model.getSecret() +
            "_s.jpg"
          );
        },
      };
      controller.setIconOptions(iconOptions);
      controller.setIconPath("id");

      store.bind("model.photos.photo", controller, "model");

      /* ***********************************************
       * DETAIL VIEW
       * ********************************************* */
      var image = new qx.ui.basic.Image();
      this.getRoot().add(image, { left: 30, top: 200 });
      var detailOptions = {
        converter(data) {
          if (data) {
            return (
              "http://farm" +
              data.getFarm() +
              ".static.flickr.com/" +
              data.getServer() +
              "/" +
              data.getId() +
              "_" +
              data.getSecret() +
              ".jpg"
            );
          }
          return "";
        },
      };
      controller.bind("selection[0]", image, "source", detailOptions);

      /* ***********************************************
       * HEADLINE
       * ********************************************* */
      var headline = new qx.ui.basic.Label();
      headline.setRich(true);
      headline.setWidth(260);
      headline.setValue("<span style='font-size: 20px'>Flickr</span>");

      this.getRoot().add(headline, { left: 10, top: 10 });
    },
  },
});

/*
 * PLEASE NOTE:
 * For demonstration purposes the following class is added to the same file as
 * the application class. For a regular qooxdoo application each class must live
 * in a file of its own. You may neglect any warnings when generating this demo.
 */
qx.Class.define("qxl.demobrowser.demo.data.store.Flickr", {
  extend: qx.data.store.Jsonp,

  construct(tag) {
    this.setCallbackName("jsonFlickrApi");
    super(this.__generateUrl(tag));
  },

  members: {
    searchForTag(tag) {
      if (tag != "") {
        this.setUrl(this.__generateUrl(tag));
      }
    },

    __generateUrl(tag) {
      if (!tag) {
        return;
      }

      var url = "http://api.flickr.com/services/rest/?tags=" + tag;
      url +=
        "&method=flickr.photos.search&api_key=63a8042eead205f7e0040f488c02afd9&format=json";
      return url;
    },
  },
});
