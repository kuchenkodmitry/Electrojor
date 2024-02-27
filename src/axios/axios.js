import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.electrojor.ru"
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token') // Если любой запрос происходит проверяем авторизацию
return config
})

export default instance;