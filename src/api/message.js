import request from "./request";

// 提交留言
export async function postMessage(commentObj = {}) {
  return await request.post("/api/message", {
    data: commentObj,
  });
}

export async function getMessages(params = {}) {
  const page = params.page || 1;
  const limit = params.limit || 10;
  return await request.get("/api/message", {
    params: {
      page,
      limit,
    },
  });
}
