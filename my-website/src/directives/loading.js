import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

export default function (el, binding) {
  // 根据 binding.value 的值决定是创建还是移除 loading 元素
  const loadingImg = getLoadingImg(el);
  const { value } = binding;
  if (!loadingImg && value) {
    const img = createLoadingImg();
    el.appendChild(img);
  } else if (loadingImg && !value) {
    loadingImg.remove();
  }
}

/**
 * 获取 loading 效果的 img 元素
 * @param {HTMLElement} dom
 */
function getLoadingImg(dom) {
  return dom.querySelector("img[data-loading='loading']");
}

// 创建 loading 效果的 img 元素
function createLoadingImg() {
  const img = document.createElement("img");
  img.src = loadingUrl;
  img.dataset.loading = "loading";
  img.className = styles.loading;
  return img;
}
