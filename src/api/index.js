import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://itss3.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`
  return config
})

export default axiosInstance
