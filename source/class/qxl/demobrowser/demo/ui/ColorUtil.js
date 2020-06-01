/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2020 Oetiker+Partner AG

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tobi Oetiker <tobi@oetiker.ch>
     
************************************************************************ */

qx.Class.define("qxl.demobrowser.demo.ui.ColorUtil", {
    extend: qx.application.Standalone,

    members: {
        main: function () {
            this.base(arguments);
            var gridLayout = new qx.ui.layout.Grid(10, 10);
            var c = this.grid = new qx.ui.container.Composite(gridLayout);
            var scroller = new qx.ui.container.Scroll();
            scroller.add(c);
            var selector = new qx.ui.control.ColorSelector();
            selector.addListener('changeValue',function(e){
                this.baseRGB = e.getData();
                this.updateSwat('scale');
                this.updateSwat('adjust');
            },this);
            c.add(selector, { row: 0, column: 0, colSpan: 6 });
            this.map = {
                adjust: {},
                scale: {}
            };
            var row = 1;
            [
                ['red',255],
                ['green',255],
                ['blue',255],
                ['hue',360],
                ['saturation',100],
                ['brightness',100],
                ['lightness',100],
                ['alpha',1],
            ].forEach(function(prop){
                this.addSlider('adjust',prop[0],prop[1],0,row);
                if (prop[0] != 'hue') {
                    this.addSlider('scale',prop[0],100,3,row);
                }
                row++;
            },this);

            this.swat = {
                adjust: new qx.ui.basic.Atom("qx.util.ColorUtil.adjust").set({
                    minHeight: 200,
                    minWidth: 200
                }),
                scale: new qx.ui.basic.Atom("qx.util.ColorUtil.scale").set({
                    minHeight: 200,
                    minWidth: 200
                })
            };
            c.add(this.swat.adjust,{row: row,column:0, colSpan: 3});
            c.add(this.swat.scale,{row: row,column:3, colSpan: 3});
            selector.set({
                red: 50,
                green: 128,
                blue: 15
            });
            this.getRoot().add(scroller, { edge: 30 });
        },
        grid: null,
        map: null,
        swat: null,
        baseRGB: null,
        addSlider: function(type,key,range,offset,row) {
            this.grid.add(new qx.ui.basic.Label(key),{
                row: row, column: offset});
            var value = new qx.ui.basic.Label().set({
                minWidth: 30
            });
            this.grid.add(value,{
                row: row, column: offset+2});

                var slider = new qx.ui.form.Slider().set({
                minimum: -range,
                maximum: range,
                minWidth: 200
            });
            this.grid.add(slider,{
                row: row, column:offset+1
            });
            slider.bind("value",value,"value");
            slider.addListener('changeValue',function(e){
                this.map[type][key] = e.getData();
                this.updateSwat(type);
            },this);
        },
        updateSwat: function(type) {
            this.swat[type].setBackgroundColor(
                qx.util.ColorUtil[type](this.baseRGB,this.map[type])
            );
        }
    }
});
