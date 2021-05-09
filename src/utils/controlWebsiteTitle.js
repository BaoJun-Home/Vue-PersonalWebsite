let routeTitle = "";
let websiteTitle = "";

function setFullTitle() {
  if (!routeTitle && !websiteTitle) {
    document.title = "加载中...";
    return "loading";
  } else if (routeTitle && !websiteTitle) {
    document.title = routeTitle;
  } else if (!routeTitle && websiteTitle) {
    document.title = websiteTitle;
  } else {
    document.title = websiteTitle + " - " + routeTitle;
  }
}
export default {
  setRouteTitle(title) {
    routeTitle = title;
    setFullTitle();
  },
  setWebsiteTitle(title) {
    websiteTitle = title;
    setFullTitle();
  },
};
