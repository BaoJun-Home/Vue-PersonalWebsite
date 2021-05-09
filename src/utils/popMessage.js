import getCompRootDom from "./getCompRootDom";
import styles from "./popMessage.module.less";
import Icon from "@/components/Icon";

/**
 * 弹出消息
 * @param {String} content 消息的内容
 * @param {String} type 消息的类型 info success warn error
 * @param {HTMLElement} container 容器，该消息会在容器中居中，如果没有指定容器，默认是整个视口
 * @param {Number} duration 消息元素消失的时间
 */

export default async function popMessage(options = {}) {
  const content = options.content || "评论成功";
  const type = options.type || "success";
  const container = options.container || document.body;
  const duration = options.duration || 2000;
  const callback = options.callback;
  // 创建消息元素
  const div = document.createElement("div");
  const iconDom = getCompRootDom(Icon, { type });
  div.className = `${styles.message} ${styles["message-" + type]}`;
  div.innerHTML = `<span>${iconDom.outerHTML}</span><div>${content}</div>`;
  if (
    options.container &&
    getComputedStyle(container, null).position === "static"
  ) {
    container.style.position = "relative";
  }
  container.appendChild(div);
  div.clientHeight; // 强行渲染
  div.style.opacity = 1;
  div.style.transform = `translate(-50%, -50%)`;
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%, -50%) translateY(-30px)`;
    window.addEventListener(
      "transitionend",
      () => {
        div.remove();
        callback && callback();
      },
      { once: true }
    );
  }, duration);
}
