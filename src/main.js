import Vue from "vue";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Tree
} from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// eslint-disable-next-line no-unused-vars
import Mock from "./mock/mock";
import request from "./utils/request";

Vue.prototype.$request = request;

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Tree);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
