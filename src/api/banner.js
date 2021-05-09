import request from "./request";

export async function fetchBanners() {
  return await request.get("/api/banner");
}
