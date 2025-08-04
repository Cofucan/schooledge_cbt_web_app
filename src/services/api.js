import axios from 'axios';

// Configure axios defaults
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

axios.defaults.baseURL = API_BASE_URL;

// Request interceptor to add auth token
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: (email, password) =>
    axios.post('/api/auth/login', { email, password }),

  register: (userData) =>
    axios.post('/api/auth/register', userData),

  verifyToken: () =>
    axios.get('/api/auth/verify'),

  refreshToken: () =>
    axios.post('/api/auth/refresh')
};

// Subscription API calls
export const subscriptionAPI = {
  getUserSubscriptions: () =>
    axios.get('/api/subscriptions'),

  getAvailablePlans: () =>
    axios.get('/api/subscription-plans'),

  subscribe: (planId) =>
    axios.post('/api/subscriptions', { planId }),

  cancelSubscription: (subscriptionId) =>
    axios.delete(`/api/subscriptions/${subscriptionId}`),

  updateSubscription: (subscriptionId, data) =>
    axios.put(`/api/subscriptions/${subscriptionId}`, data)
};

// Admin API calls
export const adminAPI = {
  getUsers: () =>
    axios.get('/api/admin/users'),

  getAllSubscriptions: () =>
    axios.get('/api/admin/subscriptions'),

  getStats: () =>
    axios.get('/api/admin/stats'),

  toggleUserStatus: (userId) =>
    axios.put(`/api/admin/users/${userId}/toggle-status`),

  cancelUserSubscription: (subscriptionId) =>
    axios.put(`/api/admin/subscriptions/${subscriptionId}/cancel`)
};

// Download API calls
export const downloadAPI = {
  getDownloadLink: (platform = 'windows') =>
    axios.get(`/api/downloads/${platform}`, { responseType: 'blob' }),

  getDownloadStats: () =>
    axios.get('/api/downloads/stats')
};

export default {
  authAPI,
  subscriptionAPI,
  adminAPI,
  downloadAPI
};
