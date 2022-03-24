/*
 * Demonstrate how to edit nodes in the TreeVirtual
 */
qx.Class.define("qxl.demobrowser.demo.treevirtual.TreeVirtual_NodeEdit", {
  extend: qx.application.Standalone,

  members: {
    main() {
      super.main();
      // We want to use some of the high-level node operation convenience
      // methods rather than manually digging into the TreeVirtual helper
      // classes.  Include the mixin that provides them.
      qx.Class.include(qx.ui.treevirtual.TreeVirtual, qx.ui.treevirtual.MNode);

      // Use an HBox to hold the tree and the groupbox
      var hBox = new qx.ui.container.Composite(new qx.ui.layout.HBox(20));
      this.getRoot().add(hBox, { edge: 30 });

      // tree
      var tree = new qx.ui.treevirtual.TreeVirtual("Tree");
      tree.setColumnWidth(0, 400);
      tree.setAlwaysShowOpenCloseSymbol(true);

      // Set the flag to allow the node editing, which is not enabled by default
      tree.setAllowNodeEdit(true);

      // Add the tree
      hBox.add(tree);

      // tree data model
      var dataModel = tree.getDataModel();

      var te1 = dataModel.addBranch(null, "Desktop", true);

      var te;
      dataModel.addBranch(te1, "Files", true);

      te = dataModel.addBranch(te1, "Workspace", true);
      dataModel.addLeaf(te, "Windows (C:)");
      dataModel.addLeaf(te, "Documents (D:)");

      dataModel.addBranch(te1, "Network", true);
      dataModel.addBranch(te1, "Trash", true);

      var te2 = dataModel.addBranch(null, "Inbox", true);

      te = dataModel.addBranch(te2, "Spam", false);
      for (var i = 1; i < 3000; i++) {
        dataModel.addLeaf(te, "Spam Message #" + i);
      }

      dataModel.addBranch(te2, "Sent", false);
      dataModel.addBranch(te2, "Trash", false);
      dataModel.addBranch(te2, "Data", false);
      dataModel.addBranch(te2, "Edit", false);

      dataModel.setData();

      /**
       * Capture the dateEdited event to show a message that the node label has changed
       */
      tree.addListener(
        "dataEdited",
        /**
         * @param e
         * @lint ignoreDeprecated(alert)
         */
        function (e) {
          var data = e.getData();
          alert(
            `dataEdited from ${data.oldValue.label} to ${data.value.label}`
          );
        }
      );

      var instructionGroup = new qx.ui.groupbox.GroupBox("Instructions");
      instructionGroup.setLayout(new qx.ui.layout.VBox(2));
      hBox.add(instructionGroup);

      var filterLabel = new qx.ui.basic.Label(
        "Double-click any node to begin the editing"
      );
      instructionGroup.add(filterLabel);
    },
  },
});
