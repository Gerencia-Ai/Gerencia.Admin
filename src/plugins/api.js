import axios from 'axios'

const api = axios.create({
    baseURL: "https://gerencia-back-dev-thtb.2.ie-1.fl0.io/api/",
})

export default api