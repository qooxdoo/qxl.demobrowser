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
      "qx.bom.webfonts.WebFont": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.HBox": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.basic.Label": {},
      "qx.ui.form.SelectBox": {},
      "qx.ui.form.ListItem": {},
      "qx.ui.form.TextField": {},
      "qx.ui.form.TextArea": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2011 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   *
   * @asset(qxl/demobrowser/demo/fonts/*)
   */
  qx.Class.define("qxl.demobrowser.demo.ui.WebFonts", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        // Call super class
        qxl.demobrowser.demo.ui.WebFonts.prototype.main.base.call(this); // Enable logging in debug variant

        // The font configuration would normally be defined in the application's
        // font theme ($APPLICATION.theme.Font).
        var fontsConfig = {
          "webFont0": {
            size: 16,
            family: ["sans-serif"],
            sources: [{
              family: "FinelinerScriptRegular",
              source: ["demobrowser/demo/fonts/fineliner_script-webfont.eot", "demobrowser/demo/fonts/fineliner_script-webfont.ttf", "demobrowser/demo/fonts/fineliner_script-webfont.woff"]
            }]
          },
          "webFont1": {
            size: 13,
            family: ["sans-serif"],
            sources: [{
              family: "ToBeContinuedRegular",
              source: ["demobrowser/demo/fonts/tobec___-webfont.eot", "demobrowser/demo/fonts/tobec___-webfont.ttf", "demobrowser/demo/fonts/tobec___-webfont.woff"]
            }]
          },
          "webFont2": {
            size: 16,
            family: ["sans-serif"],
            sources: [{
              family: "YanoneKaffeesatzRegular",
              source: ["demobrowser/demo/fonts/yanonekaffeesatz-regular-webfont.eot", "demobrowser/demo/fonts/yanonekaffeesatz-regular-webfont.ttf", "demobrowser/demo/fonts/yanonekaffeesatz-regular-webfont.woff"]
            }]
          }
        };
        var createdFonts = {};

        for (var key in fontsConfig) {
          createdFonts[key] = new qx.bom.webfonts.WebFont().set(fontsConfig[key]);
        }
        /*
        -------------------------------------------------------------------------
          Below is your actual application code...
        -------------------------------------------------------------------------
        */


        var demoTextShort = "The quick brown fox jumps over the lazy dog";
        var demoTextLong = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Nam lectus justo, porttitor ac, ullamcorper ac, cursus in, ante. Duis mi ante,sodales in, auctor vel, vehicula eget, sapien. Proin iaculis dui vitae leo. Integer blandit tempus leo. Morbi turpis. Suspendisse turpis. Nulla eget leo.Cras interdum sollicitudin ante. Sed placerat scelerisque magna. Vestibulum rutrum nibh a eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";
        var textWidgets = [];
        var mainContainer = new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
        this.getRoot().add(mainContainer, {
          edge: 10
        });
        var menuContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
        mainContainer.add(menuContainer);
        var menuLabel = new qx.ui.basic.Label("Select Font");
        menuLabel.setFont("bold");
        menuContainer.add(menuLabel);
        var fontMenu = new qx.ui.form.SelectBox();
        fontMenu.setMinWidth(300);

        for (var key in createdFonts) {
          var item = new qx.ui.form.ListItem(createdFonts[key].getFamily()[0]);
          item.getChildControl("label").setFont(createdFonts[key]);
          item.setUserData("fontId", key);
          fontMenu.add(item);
        }

        fontMenu.addListener("changeSelection", function (ev) {
          var value = ev.getData()[0];
          var fontId = value.getUserData("fontId");

          for (var i = 0, l = textWidgets.length; i < l; i++) {
            textWidgets[i].setFont(createdFonts[fontId]);
          }
        }, this);
        menuContainer.add(fontMenu);
        var widgetContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));
        mainContainer.add(widgetContainer);
        var label = new qx.ui.basic.Label(demoTextShort);
        textWidgets.push(label);
        label.setFont(createdFonts.webFont0);
        widgetContainer.add(label);
        var field = new qx.ui.form.TextField(demoTextShort);
        textWidgets.push(field);
        field.setFont(createdFonts.webFont0);
        widgetContainer.add(field);
        var area = new qx.ui.form.TextArea(demoTextLong);
        textWidgets.push(area);
        area.setFont(createdFonts.webFont0);
        widgetContainer.add(area);
      }
    }
  });
  qxl.demobrowser.demo.ui.WebFonts.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=WebFonts.js.map?dt=1589490216530