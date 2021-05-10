import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress/nprogress";
import NotFound from "@/views/NotFound.vue";

configure({
  showSpinner: false,
  trickleSpeed: 30,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

/**
 * 得到一个异步组件
 * @param {*} compFunc 异步组件函数
 */
function getAsyncComp(compFunc) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(1000);
    }
    const comp = await compFunc();
    done();
    return comp;
  };
}

export default [
  {
    path: "/index.html",
    redirect: "/",
  },
  {
    path: "/index",
    redirect: "/",
  },
  {
    name: "Home",
    path: "/",
    component: getAsyncComp(() =>
      import(/* webpackChunkName: 'Home' */ "@/views/Home")
    ),
    meta: { title: "首页" },
  },
  {
    name: "Blog",
    path: "/article",
    component: getAsyncComp(() =>
      import(/* webpackChunkName: 'Blog' */ "@/views/Blog")
    ),
    meta: { title: "文章" },
  },
  {
    name: "Category",
    path: "/article/category/:categoryId",
    component: getAsyncComp(() =>
      import(/* webpackChunkName: 'Blog' */ "@/views/Blog")
    ),
    meta: { title: "文章" },
  },
  {
    name: "Detail",
    path: "/article/detail/:blogId",
    component: getAsyncComp(() =>
      import(/* webpackChunkName: 'Detail' */ "@/views/Blog/Detail")
    ),
    meta: { title: "文章详情" },
  },
  {
    name: "About",
    path: "/about",
    component: getAsyncComp(() =>
      import(/* webpackChunkName: 'About' */ "@/views/About")
    ),
    meta: { title: "关于我" },
  },
  {
    name: "Project",
    path: "/project",
    component: getAsyncComp(() =>
      import(/* webpackChunkName: 'Project' */ "@/views/Project")
    ),
    meta: { title: "项目&效果" },
  },
  {
    name: "Message",
    path: "/message",
    component: getAsyncComp(() =>
      import(/* webpackChunkName: 'Message' */ "@/views/Message")
    ),
    meta: { title: "留言板" },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];
