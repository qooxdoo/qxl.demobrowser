/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/*
 */

/**
 * @tag noPlayground
 *
 * @use(qx.event.handler.ElementResize)
 */
qx.Class.define("qxl.demobrowser.demo.event.ElementResize", {
  extend: qx.application.Native,

  members: {
    main() {
      super.main();

      var el = document.getElementById("resize");
      qx.bom.Element.addListener(el, "resize", this._onResize, this);

      this.update(el, el.offsetWidth, el.offsetHeight);
    },

    _onResize(e) {
      var data = e.getData();
      this.update(e.getTarget(), data.width, data.height);
    },

    update(el, width, height) {
      el.innerHTML = "width: " + width + "px<br>height: " + height + "px";
    },
  },
});
