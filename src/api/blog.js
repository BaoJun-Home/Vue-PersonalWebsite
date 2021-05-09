import request from "./request";

/**
 * 分页获取博客
 * @param {Object} params 参数对象
 */
export async function fetchBlogs(params = {}) {
  const page = params.page || 1;
  const limit = params.limit || 10;
  const categoryid = params.categoryid || -1;
  return await request.get("/api/blog", {
    params: {
      page,
      limit,
      categoryid,
    },
  });
}

/**
 * 获取博客分类
 */
export async function fetchBlogClassify() {
  return await request.get("/api/blogtype");
}

/**
 * 获取单个博客
 * @param {Number} id 博客ID
 */
export async function fetchBlog(id) {
  return await request.get(`/api/blog/${id}`);
}

/**
 * 提交评论
 * @param {Object} data 评论对象
 */
export async function postComment(commentObj = {}) {
  return await request.post("/api/comment", {
    data: commentObj,
  });
}

/**
 * 分页获取评论
 * @param {*} params 参数对象
 */
export async function fetchComments(params = {}) {
  const page = params.page || 1;
  const limit = params.limit || 10;
  const blogId = params.blogId || -1;
  return await request.get("/api/comment", {
    params: {
      page,
      limit,
      blogId,
    },
  });
}
