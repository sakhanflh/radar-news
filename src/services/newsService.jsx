import api from "./api";

export async function getAllNews() {
    const res = await api.get("/")
    return res.data
}

export async function getNewsByCategory(category) {
    const res = await api.get(`/${category}`)
    return res.data
}