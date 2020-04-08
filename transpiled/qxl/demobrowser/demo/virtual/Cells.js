(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.application.Standalone": {
        "require": true
      },
      "qx.ui.layout.HBox": {},
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.virtual.cell.String": {},
      "qx.util.Permutation": {},
      "qx.util.format.NumberFormat": {},
      "qx.ui.virtual.cell.Number": {},
      "qx.util.format.DateFormat": {},
      "qx.locale.Date": {},
      "qx.ui.virtual.cell.Date": {},
      "qx.ui.virtual.cell.Html": {},
      "qx.ui.virtual.cell.Image": {},
      "qx.ui.virtual.cell.Boolean": {},
      "qx.ui.embed.Html": {},
      "qx.bom.client.Css": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.theme": {},
        "css.boxmodel": {
          "className": "qx.bom.client.Css"
        }
      }
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
       * Jonathan Weiß (jonathan_rass)
  
  ************************************************************************ */

  /* ************************************************************************
  
  
  ************************************************************************ */

  /**
   *
   * @asset(qx/icon/${qx.icontheme}/16/apps/internet-feed-reader.png)
   * @asset(qx/icon/${qx.icontheme}/32/apps/utilities-notes.png)
   * @asset(qx/icon/${qx.icontheme}/16/emotes/face-smile.png)
   * @asset(qx/icon/${qx.icontheme}/16/emotes/face-sad.png)
   * @tag test
   */
  qx.Class.define("qxl.demobrowser.demo.virtual.Cells", {
    extend: qx.application.Standalone,

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      main: function main() {
        qxl.demobrowser.demo.virtual.Cells.prototype.main.base.call(this);
        var layout = new qx.ui.layout.HBox(5);
        this.topContainer = new qx.ui.container.Composite(layout);
        this.runTest("testStringCell");
        this.runTest("testNumberCell");
        this.runTest("testDateCell");
        this.runTest("testHtmlCell"); // TODO: This does not work in Classic!

        if (qx.core.Environment.get("qx.theme") == "qx.theme.Modern") {
          this.runTest("testImageCell");
          this.runTest("testBooleanCell");
          this.runTest("testBooleanCellCustomImage");
        }

        this.getRoot().add(this.topContainer, {
          edge: 5
        });
      },
      runTest: function runTest(testName) {
        this.setUp();
        this[testName](); //this.tearDown();
      },
      setUp: function setUp() {
        this.container = new qx.ui.container.Composite(new qx.ui.layout.VBox(2));
        this.topContainer.add(this.container);
      },
      tearDown: function tearDown() {
        this.container.destroy();
      },
      testStringCell: function testStringCell() {
        var cellData = {
          value: ["Juhu", "<b>HTML</b>", "", null],
          states: [{}, {
            selected: 1
          }]
        };
        var stringCell = new qx.ui.virtual.cell.String();
        qx.util.Permutation.permute(cellData, function (cellData) {
          var cell = this.__renderCell(stringCell, cellData.value, cellData.states);

          this.container.add(cell);
        }, this);
      },
      testNumberCell: function testNumberCell() {
        var cellData = {
          value: [-1.666666, 0, null],
          format: [null, new qx.util.format.NumberFormat().set({
            maximumFractionDigits: 2
          })],
          states: [{}, {
            selected: 1
          }]
        };
        var cellRenderer = new qx.ui.virtual.cell.Number();
        qx.util.Permutation.permute(cellData, function (cellData) {
          if (cellData.format) {
            cellRenderer.setNumberFormat(cellData.format);
          } else {
            cellRenderer.resetNumberFormat();
          }

          var cell = this.__renderCell(cellRenderer, cellData.value, cellData.states);

          this.container.add(cell);
        }, this);
      },
      testDateCell: function testDateCell() {
        var cellData = {
          value: [new Date(), null],
          format: [null, new qx.util.format.DateFormat(qx.locale.Date.getDateFormat("medium"))],
          states: [{}, {
            selected: 1
          }]
        };
        var cellRenderer = new qx.ui.virtual.cell.Date();
        qx.util.Permutation.permute(cellData, function (cellData) {
          if (cellData.format) {
            cellRenderer.setDateFormat(cellData.format);
          } else {
            cellRenderer.resetDateFormat();
          }

          var cell = this.__renderCell(cellRenderer, cellData.value, cellData.states);

          this.container.add(cell);
        }, this);
      },
      testHtmlCell: function testHtmlCell() {
        var cellData = {
          value: ["Juhu", "<b>HTML</b>", "", null],
          states: [{}, {
            selected: 1
          }]
        };
        var cellRenderer = new qx.ui.virtual.cell.Html();
        qx.util.Permutation.permute(cellData, function (cellData) {
          var cell = this.__renderCell(cellRenderer, cellData.value, cellData.states);

          this.container.add(cell);
        }, this);
      },
      testImageCell: function testImageCell() {
        var cellData = {
          value: [{
            url: "icon/16/apps/internet-feed-reader.png",
            tooltip: "This is a feed reader!"
          }, {
            url: "icon/32/apps/utilities-notes.png",
            tooltip: "foobar!"
          }, null],
          states: [{}, {
            selected: 1
          }]
        };
        var cellRenderer = new qx.ui.virtual.cell.Image();
        qx.util.Permutation.permute(cellData, function (cellData) {
          var cell = this.__renderCell(cellRenderer, cellData.value, cellData.states);

          this.container.add(cell);
        }, this);
      },
      testBooleanCell: function testBooleanCell() {
        var cellData = {
          value: [true, false, null],
          states: [{}, {
            selected: 1
          }]
        };
        var cellRenderer = new qx.ui.virtual.cell.Boolean();
        qx.util.Permutation.permute(cellData, function (cellData) {
          var cell = this.__renderCell(cellRenderer, cellData.value, cellData.states);

          this.container.add(cell);
        }, this);
      },
      testBooleanCellCustomImage: function testBooleanCellCustomImage() {
        var cellData = {
          value: [true, false, null],
          states: [{}, {
            selected: 1
          }]
        };
        var cellRenderer = new qx.ui.virtual.cell.Boolean();
        cellRenderer.setIconFalse("icon/16/emotes/face-sad.png");
        cellRenderer.setIconTrue("icon/16/emotes/face-smile.png");
        qx.util.Permutation.permute(cellData, function (cellData) {
          var cell = this.__renderCell(cellRenderer, cellData.value, cellData.states);

          this.container.add(cell);
        }, this);
      },
      __renderCell: function __renderCell(cell, value, states) {
        var width = 100;
        var height = 30;
        var embed = new qx.ui.embed.Html().set({
          width: width,
          height: height,
          decorator: states.selected ? null : "main"
        }); //      decorator : states.selected ? "selected" : "main"

        var cellProperties = cell.getCellProperties(value, states);
        var insets = cellProperties.insets;
        var html = ["<div ", "style='", this._getCellSizeStyle(width, height, insets[0], insets[1]), cellProperties.style, "' ", "class='", cellProperties.classes, "' ", cellProperties.attributes, ">", cellProperties.content, "</div>"].join("");
        embed.setHtml(html);
        return embed;
      },
      _getCellSizeStyle: function _getCellSizeStyle(width, height, insetX, insetY) {
        var style = "";

        if (qx.core.Environment.get("css.boxmodel") == "content") {
          width -= insetX;
          height -= insetY;
        }

        style += "width:" + width + "px;";
        style += "height:" + height + "px;";
        return style;
      }
    }
  });
  qxl.demobrowser.demo.virtual.Cells.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Cells.js.map?dt=1586350629465