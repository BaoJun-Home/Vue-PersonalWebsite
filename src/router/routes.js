import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
import Detail from "@/views/Blog/Detail";

export default [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: { title: "首页" },
  },
  {
    name: "Blog",
    path: "/article",
    component: Blog,
    meta: { title: "文章" },
  },
  {
    name: "Category",
    path: "/article/category/:categoryId",
    component: Blog,
    meta: { title: "文章" },
  },
  {
    name: "Detail",
    path: "/article/detail/:blogId",
    component: Detail,
    meta: { title: "文章详情" },
  },
  {
    name: "About",
    path: "/about",
    component: About,
    meta: { title: "关于我" },
  },
  {
    name: "Project",
    path: "/project",
    component: Project,
    meta: { title: "项目&效果" },
  },
  {
    name: "Message",
    path: "/message",
    component: Message,
    meta: { title: "留言板" },
  },
];
