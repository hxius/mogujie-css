import axios from 'axios'

const service = axios.create({})

service.interceptors.request.use((config) => {
  config.headers['token'] = 123
  return config
})

service.interceptors.response.use((response) => {
  const { data } = response
  return data
})

export default service
