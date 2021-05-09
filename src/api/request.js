import axios from "axios";
import { popMessage } from "@/utils";

const instance = axios.create();

instance.interceptors.response.use((resp) => {
  if (resp.data.code === 0) {
    return resp.data.data;
  }
  popMessage({
    content: resp.data.msg,
    type: "error",
  });
  return null;
});

export default instance;
