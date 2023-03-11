import axios from 'axios'
import { config } from 'process'

const service = axios.create({})

service.interceptors.request.use((config) => {
  config.headers['token'] = 123
  return config
})

service.interceptors.response.use((response) => {})

export default service
