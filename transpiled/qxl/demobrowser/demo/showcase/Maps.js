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
      "qx.ui.container.Composite": {},
      "qx.ui.layout.VBox": {},
      "qx.ui.basic.Label": {},
      "qx.ui.core.Widget": {}
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
       * Adrian Olaru (adrianolaru)
  
  ************************************************************************ */

  /**
   * @tag showcase
   * @ignore(google.*, L)
   */
  qx.Class.define("qxl.demobrowser.demo.showcase.Maps", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.showcase.Maps.prototype.main.base.call(this);

        var LeafletMap = this._createLeafletMap();

        var googleMap = this._createGoogleMap();

        this.getRoot().add(this._createMapContainer("LeafletMap Maps", LeafletMap), {
          left: 20,
          top: 20
        });
        this.getRoot().add(this._createMapContainer("Google Maps", googleMap), {
          left: 490,
          top: 20
        });
      },
      _createMapContainer: function _createMapContainer(title, map) {
        var comp = new qx.ui.container.Composite();
        comp.setLayout(new qx.ui.layout.VBox().set({
          spacing: 10
        }));
        comp.setWidth(450);
        comp.setHeight(400);
        var headline = new qx.ui.basic.Label("<b>" + title + "</b>").set({
          rich: true
        });
        comp.add(headline);
        comp.add(map);
        return comp;
      },
      _createLeafletMap: function _createLeafletMap() {
        var isle = new qx.ui.core.Widget().set({
          width: 450,
          height: 400,
          decorator: "main"
        });
        isle.addListenerOnce("appear", function () {
          try {
            var map = new L.Map(isle.getContentElement().getDomElement(), {
              center: new L.LatLng(43.6400, 3.9658),
              zoom: 14,
              layers: new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
            });
          } catch (ex) {
            var msg = "Could not create Leaflet map!<br/>" + ex.toString();
            this.getContentElement().getDomElement().innerHTML += msg;
          }
        });
        return isle;
      },
      _createGoogleMap: function _createGoogleMap() {
        var isle = new qx.ui.core.Widget().set({
          width: 450,
          height: 400
        }); // Since the decorator requires a bit of extra code, we set
        // an decorator for demonstration purpose here. Of course,
        // you may not need a decorator.

        isle.setDecorator("main");
        isle.addListenerOnce("appear", function () {
          try {
            var map = new google.maps.Map(isle.getContentElement().getDomElement(), {
              zoom: 13,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }); // Fix for [BUG #4178]
            // Make sure zIndex of map element is higher than zIndex of decorator
            // (Maps apparently resets zIndex on init)

            google.maps.event.addListenerOnce(map, "center_changed", function () {
              // Wait for DOM
              window.setTimeout(function () {
                var zIndex = isle.getContentElement().getStyle('zIndex');
                isle.getContentElement().getDomElement().style.zIndex = zIndex;
              }, 500);
            });
            map.setCenter(new google.maps.LatLng(49.011899, 8.403311));
          } catch (ex) {
            var msg = "Could not create Google map!<br/>" + ex.toString();
            this.getContentElement().getDomElement().innerHTML += msg;
          }
        });
        return isle;
      }
    }
  });
  qxl.demobrowser.demo.showcase.Maps.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Maps.js.map?dt=1589490215011