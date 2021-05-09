import Vue from "vue";

export default function getCompRootDom(comp, props) {
  const vm = new Vue({
    render: (h) => h(comp, { props }),
  }).$mount();
  return vm.$el;
}
