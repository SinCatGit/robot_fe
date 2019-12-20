<template>
  <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
    <a-layout id="components-layout-demo-top-side-2" style="min-height:100vh;">
      <a-layout-sider
        v-if="navLayout === 'left'"
        :theme="navTheme"
        :trigger="null"
        collapsible
        width="256px"
        v-model="collapsed"
      >
        <div class="logo">Jetmint</div>
        <SiderMenu :theme="navTheme"></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background:#fff;padding:0;">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="collapsed = !collapsed"
          />
          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <setting-drawer></setting-drawer>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SiderMenu from "./SiderMenu";
import SettingDrawer from "../components/SettingDrawer";

export default {
  name: "BasicLayout",
  props: {
    msg: String
  },
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    navTheme() {
      return this.$route.query.navTheme || "dark";
    },
    navLayout() {
      return this.$route.query.navLayout || "left";
    }
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    SettingDrawer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.trigger {
  padding: 0 20px;
  line-height: 64px;
  font-size: 20px;
}

.trigger:hover {
  background-color: #eeeeee;
}

.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  overflow: hidden;
}

.nav-theme-dark >>> .logo {
  color: #ffffff;
}
</style>
