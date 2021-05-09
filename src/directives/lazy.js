import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defautlGif from "@/assets/default.gif";
eventBus.$on("mainScroll", debounce(handleMainScroll, 100));

let images = []; // 图片对象的数组

function handleMainScroll() {
  // 只要图片在视口范围内出现过就算处理过了，处理过的图片会从数组中移除
  for (const imgObj of images) {
    handleImg(imgObj);
  }
}

// 处理图片
function handleImg(imgObj) {
  imgObj.dom.src = defautlGif;
  const { top, height } = imgObj.dom.getBoundingClientRect();
  const clientHeight = document.documentElement.clientHeight;
  if (top >= -height && top <= clientHeight) {
    // 在视口范围内，需要处理图片
    const img = new Image();
    img.onload = function () {
      imgObj.dom.src = imgObj.src;
    };
    img.src = imgObj.src;
    images = images.filter((io) => io.dom !== imgObj.dom);
  }
}

export default {
  inserted(el, binding) {
    const imgObj = {
      dom: el,
      src: binding.value,
    };
    images.push(imgObj);
    handleImg(imgObj); // 立即处理一次
  },
  unbind(el) {
    images = images.filter((imgObj) => imgObj.dom !== el);
  },
};
