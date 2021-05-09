import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/global.less";
import "./mock";
import { popMessage } from "./utils";
Vue.prototype.$popMessage = popMessage;
import eventBus from "./eventBus";
Vue.prototype.$eventBus = eventBus;

import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);
import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
