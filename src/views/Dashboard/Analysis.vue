<template>
  <div>
    <a-tree
      checkable
      @expand="onExpand"
      :expandedKeys="expandedKeys"
      :autoExpandParent="autoExpandParent"
      v-model="checkedKeys"
      @select="onSelect"
      :selectedKeys="selectedKeys"
      :treeData="treeData"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedKeys: [],
      autoExpandParent: true,
      checkedKeys: [],
      selectedKeys: [],
      treeData: []
    };
  },
  mounted() {
    this.getTreeData();
  },
  watch: {
    checkedKeys(/*val*/) {
      // console.log("onCheck", val);
    }
  },
  methods: {
    onExpand(expandedKeys) {
      // console.log("onExpand", expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      // console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys /*, info*/) {
      // console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    },
    getTreeData() {
      this.$request({
        url: "/dashboard/chart",
        method: "get"
      }).then(response => {
        // console.log(response.data);
        this.treeData = response.data;
      });
    }
  }
};
</script>

<style></style>
