<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "RenderRouterView",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
