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

/* ************************************************************************


************************************************************************ */
/**
 *
 * @asset(qxl/demobrowser/demo/icons/multimedia-player.png)
 * @asset(qxl/demobrowser/demo/fonts/fontawesome-webfont*)
 * @asset(qx/icon/${qx.icontheme}/32/actions/format-*)
 * @asset(qx/icon/${qx.icontheme}/32/actions/go-home.png)
 */

qx.Class.define("qxl.demobrowser.demo.widget.Image", {
  extend: qx.application.Standalone,

  members: {
    main() {
      super.main();

      this._initFont();

      var layout = new qx.ui.layout.HBox();
      layout.setSpacing(20);

      var container = new qx.ui.container.Composite(layout);
      this.getRoot().add(container, { left: 20, top: 20 });

      container.add(
        new qx.ui.basic.Image(
          "qxl/demobrowser/demo/icons/multimedia-player.png"
        )
      );

      var ileft = new qx.ui.basic.Image(
        "icon/32/actions/format-justify-left.png"
      );
      container.add(ileft);

      var iright = new qx.ui.basic.Image(
        "icon/32/actions/format-justify-right.png"
      );
      container.add(iright);

      var ifill = new qx.ui.basic.Image(
        "icon/32/actions/format-justify-fill.png"
      );
      container.add(ifill);

      var icenter = new qx.ui.basic.Image(
        "icon/32/actions/format-justify-center.png"
      );
      container.add(icenter);

      var big = new qx.ui.basic.Image("icon/32/actions/go-home.png");
      big.setScale(true);
      big.setWidth(64);
      big.setHeight(64);
      container.add(big);

      var font = new qx.ui.basic.Image("@FontAwesome/heart");
      font.setScale(true);
      font.setWidth(64);
      font.setHeight(64);
      container.add(font);

      var external = new qx.ui.basic.Image(
        "http://resources.qooxdoo.org/images/logo.gif"
      );
      container.add(external);

      var externalSmall = new qx.ui.basic.Image(
        "http://resources.qooxdoo.org/images/logo.gif"
      );
      externalSmall.setWidth(136);
      externalSmall.setHeight(40);
      externalSmall.setScale(true);
      container.add(externalSmall);

      // toggle button
      var btn = new qx.ui.form.ToggleButton("Toggle enabled");
      btn.setValue(true);
      btn.addListener("changeValue", function (e) {
        container.setEnabled(e.getData());
      });

      this.getRoot().add(btn, { left: 20, top: 180 });
    },

    _initFont() {
      var currentFont = qx.theme.manager.Font.getInstance().getTheme();

      // Add font definitions
      var config = {
        fonts: {
          FontAwesome: {
            size: 40,
            lineHeight: 1,
            comparisonString: "\uf1e3\uf1f7\uf11b\uf19d",
            family: ["FontAwesome"],
            sources: [
              {
                family: "FontAwesome",
                source: [
                  "qxl/demobrowser/demo/fonts/fontawesome-webfont.ttf",
                  "qxl/demobrowser/demo/fonts/fontawesome-webfont.woff",
                  "qxl/demobrowser/demo/fonts/fontawesome-webfont.woff2",
                  "qxl/demobrowser/demo/fonts/fontawesome-webfont.eot",
                ],
              },
            ],
          },
        },
      };

      qx.Theme.define("qxl.demobrowser.theme.icon.Font", config);
    },
  },
});
