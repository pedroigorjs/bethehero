import axios from 'axios'

const api = axios.create({
  baseURL: 'http://172.19.2.221:3333'
})

export default api