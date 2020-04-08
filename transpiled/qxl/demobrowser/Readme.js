(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.ui.container.Scroll": {
        "construct": true,
        "require": true
      },
      "qx.ui.container.Composite": {
        "construct": true
      },
      "qx.ui.layout.VBox": {
        "construct": true
      },
      "qx.ui.basic.Label": {},
      "qx.ui.groupbox.GroupBox": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2010 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Daniel Wagner (d_wagner)
  
  ************************************************************************ */

  /* ************************************************************************
  
  ************************************************************************ */

  /**
   * Displays a title (label) and text (in a groupbox).
   */
  qx.Class.define("qxl.demobrowser.Readme", {
    extend: qx.ui.container.Scroll,
    construct: function construct(title, readmeText) {
      qx.ui.container.Scroll.constructor.call(this);
      this.__container = new qx.ui.container.Composite(new qx.ui.layout.VBox(10));

      this.__container.set({
        padding: 10,
        decorator: "main"
      });

      this.add(this.__container);
      var title = title || "";
      this.setTitle(title);
      var readme = readmeText || "";
      this.setReadmeData(readme);
    },
    properties: {
      title: {
        apply: "_applyTitle"
      },
      readmeData: {
        apply: "_applyReadmeData"
      }
    },
    members: {
      __container: null,
      __title: null,
      __readme: null,
      _applyTitle: function _applyTitle(value, old) {
        if (value === old) {
          return;
        }

        if (this.__title) {
          this.__title.setValue("<h1>" + value + "</h1>");

          return;
        }

        var titleLabel = this.__title = new qx.ui.basic.Label("<h1>" + value + "</h1>");
        titleLabel.setRich(true);

        this.__container.add(titleLabel);
      },
      _applyReadmeData: function _applyReadmeData(value, old) {
        if (value === old) {
          return;
        }

        if (this.__readme) {
          this.__readme.destroy();
        }

        var groupBox = this.__readme = new qx.ui.groupbox.GroupBox("Readme");
        groupBox.setLayout(new qx.ui.layout.VBox(5));
        var readmeText = value.replace(/\\n/g, "<br/>");
        var readmeLabel = new qx.ui.basic.Label(readmeText);
        readmeLabel.setRich(true);
        groupBox.add(readmeLabel);

        this.__container.add(groupBox);
      }
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._disposeObjects("__title", "__readme", "__container");
    }
  });
  qxl.demobrowser.Readme.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Readme.js.map?dt=1586350621879