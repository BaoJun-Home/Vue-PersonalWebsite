// 利用 Vue 实现事件总线
import Vue from "vue";

// mainScroll事件：主区域滚动事件
// setMainScroll事件：设置主区域滚动条

export default new Vue({});

// 手写事件总线
// const listeners = {
//   // 内部一个事件类型对应一个处理函数的 set 集合
//   // eventType1: [handler1, handler2, ...],
//   // eventType2: [handler1, handler2, ...]
// };

// // 事件总线
// export default {
//   // 监听事件
//   $on(eventType, handler) {
//     if (!listeners[eventType]) {
//       listeners[eventType] = new Set();
//     }
//     listeners[eventType].add(handler);
//   },

//   // 取消监听事件
//   $off(eventType, handler) {
//     if (!listeners[eventType]) {
//       return;
//     }
//     listeners[eventType].delete(handler);
//   },

//   // 触发事件
//   $emit(eventType, ...arg) {
//     if (!listeners[eventType]) {
//       return;
//     }
//     for (const handler of listeners[eventType]) {
//       handler(...arg);
//     }
//   },
// };
