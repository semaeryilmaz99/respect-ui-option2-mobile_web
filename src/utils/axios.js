import axios from 'axios'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - Add auth token to requests
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Handle common responses and errors
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // Handle common error cases
    if (error.response) {
      const { status, data } = error.response
      
      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('authToken')
          localStorage.removeItem('user')
          window.location.href = '/login'
          break
        case 403:
          console.error('Forbidden: You don\'t have permission to access this resource')
          break
        case 404:
          console.error('Resource not found')
          break
        case 500:
          console.error('Internal server error')
          break
        default:
          console.error('An error occurred:', data?.message || error.message)
      }
      
      return Promise.reject(data || error.message)
    } else if (error.request) {
      // Network error
      console.error('Network error: Please check your connection')
      return Promise.reject('Network error: Please check your connection')
    } else {
      // Something else happened
      console.error('Error:', error.message)
      return Promise.reject(error.message)
    }
  }
)

export default api 