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

/**
 * @tag noPlayground
 */
qx.Class.define("qxl.demobrowser.demo.event.Focus", {
  extend: qx.application.Native,

  members: {
    main() {
      super.main();

      qx.event.Registration.addListener(
        document.documentElement,
        "activate",
        this._onActivate,
        this,
        true
      );
      qx.event.Registration.addListener(
        document.documentElement,
        "deactivate",
        this._onDeactivate,
        this,
        true
      );
      qx.event.Registration.addListener(
        document.documentElement,
        "focusin",
        this._onFocusIn,
        this
      );
      qx.event.Registration.addListener(
        document.documentElement,
        "focusout",
        this._onFocusOut,
        this
      );

      qx.event.Registration.addListener(
        window,
        "focus",
        this._onWindowFocus,
        this
      );
      qx.event.Registration.addListener(
        window,
        "blur",
        this._onWindowBlur,
        this
      );
    },

    _onWindowFocus(e) {
      this.debug("Window focussed");
    },

    _onWindowBlur(e) {
      this.debug("Window blurred");
    },

    _onActivate(e) {
      this.debug("Activate: " + e.getTarget());
      e.getTarget().style.background = "#E8ECF6";
    },

    _onDeactivate(e) {
      this.debug("Deactivate: " + e.getTarget());
      e.getTarget().style.background = "";
    },

    _onFocusIn(e) {
      this.debug("FocusIn: " + e.getTarget());

      if (qx.core.Environment.get("engine.name") == "webkit") {
        e.getTarget().style.border = "1px dotted red";
      } else {
        e.getTarget().style.outline = "1px dotted red";
      }
    },

    _onFocusOut(e) {
      this.debug("FocusOut: " + e.getTarget());

      if (qx.core.Environment.get("engine.name") == "mshtml") {
        e.getTarget().style.border = "1px solid black";
      } else {
        e.getTarget().style.outline = "";
      }
    },
  },
});
