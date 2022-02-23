qx.Theme.define("qxl.demobrowser.Appearance", {
  extend: qx.theme.indigo.Appearance,
  title: "Demo browser",

  appearances: {
    "demo-tree": {
      alias: "tree",
      include: "tree",

      style() {
        return {
          width: 270,
          padding: 0,
          decorator: "main",
        };
      },
    },
  },
});
