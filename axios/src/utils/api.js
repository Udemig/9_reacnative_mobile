import axios from "axios";

// bir axios örneği oluştur
const api = axios.create({
    // hiçbir şey koymasak bile bütün isteklerin atılacağı ortak link
    baseURL: "https://fakestoreapi.com",

    // eğer post isteği atacaksak json olduğunu anlaması için headerı json olarak belirliyoruz.
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;