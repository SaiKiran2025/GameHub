import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "50e35845c41446f1b04da2704ec48d43",
  },
});
