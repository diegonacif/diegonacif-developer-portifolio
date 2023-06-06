import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/diegonacif",
  client_id: "d3edd6cd01933a54bd7d",
  client_secret: "766d6eb58ec8025ef8e0c065f7d068de2f0bf3f0"
});

export default api;