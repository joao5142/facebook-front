import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import { AppError } from '@/utils/erros/AppError'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 10000,
})

const requestHandler = (requestConfig: AdaptAxiosRequestConfig) => {
  try {
    const token = ''

    if (token) {
      requestConfig.headers.Authorization = 'bearer ' + token
    }
  } catch (e) {}

  return requestConfig
}

axiosInstance.interceptors.request.use((requestConfig) => requestHandler(requestConfig))

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message))
    } else {
      return Promise.reject(error)
    }
  }
)

export default axiosInstance
