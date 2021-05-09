import request from "./request";

export async function fetchAbout() {
  return await request.get("/api/about");
}
