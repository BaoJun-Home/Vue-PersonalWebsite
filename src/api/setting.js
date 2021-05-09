// 全局设置
import request from "./request";

export async function fetchSetting() {
  return await request.get("/api/setting");
}
