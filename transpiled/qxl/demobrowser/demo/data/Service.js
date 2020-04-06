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
      "qxl.datademo.Demo": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

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

  /**
   * @tag showcase
   * @tag databinding
   * @tag noPlayground
   */
  qx.Class.define("qxl.demobrowser.demo.data.Service", {
    extend: qx.application.Standalone,
    members: {
      main: function main() {
        qxl.demobrowser.demo.data.Service.prototype.main.base.call(this);
        this.getRoot().add(new qxl.datademo.Demo());
      }
    }
  });
  qxl.demobrowser.demo.data.Service.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Service.js.map?dt=1586199386966