import axios from "axios";

const apiKey = import.meta.env.VITE_GITHUB_ACCESS_TOKEN
const clientSecret = import.meta.env.VITE_GITHUB_CLIENT_SECRET

const api = axios.create({
  baseURL: "https://api.github.com/users/diegonacif",
  client_id: "d3edd6cd01933a54bd7d",
  client_secret: clientSecret,
  headers: {
    Authorization: `Bearer ${apiKey}`,
    // "Content-Type": "application/json",
  },
});

export default api;