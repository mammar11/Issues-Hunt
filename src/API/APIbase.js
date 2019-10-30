import axios from "axios";
const baseURL = "https://api.github.com/search";
export default axios.create({ baseURL });
