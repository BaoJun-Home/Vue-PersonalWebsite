import Home from "@/views/Home";
import Blog from "@/views/Blog";
import About from "@/views/About";
import Project from "@/views/Project";
import Message from "@/views/Message";
import Detail from "@/views/Blog/Detail";

export default [
  { name: "Home", path: "/", component: Home },
  { name: "Blog", path: "/article", component: Blog },
  { name: "Category", path: "/article/category/:categoryId", component: Blog },
  { name: "Detail", path: "/article/detail/:blogId", component: Detail },
  { name: "About", path: "/about", component: About },
  { name: "Project", path: "/project", component: Project },
  { name: "Message", path: "/message", component: Message },
];
