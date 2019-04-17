import axios from 'axios'

const api = axios.create({
    baseURL: 'https://oministack-backen.herokuapp.com'
})

export default api;