export default function debounce(func, duration = 100) {
  let timer = null;
  return (...arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...arg);
    }, duration);
  };
}
