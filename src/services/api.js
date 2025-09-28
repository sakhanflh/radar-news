import axios from "axios";

const api = axios.create({
    baseURL: "https://api-berita-senech.vercel.app/cnn-news",
    timeout: 10000,
})

export default api;