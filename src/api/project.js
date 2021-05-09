import request from "./request";

export async function fetchProject() {
  return await request.get("/api/project");
}
