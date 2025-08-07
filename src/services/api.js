import axios from 'axios';

// Get API URL based on environment
const getApiUrl = () => {
  const env = process.env.REACT_APP_API_ENV || 'local';
  console.log('Environment:', env);
  console.log('Local API URL:', process.env.REACT_APP_API_URL_LOCAL);
  console.log('Live API URL:', process.env.REACT_APP_API_URL_LIVE);

  if (env === 'live') {
    return process.env.REACT_APP_API_URL_LIVE || 'https://api.schooledge.com';
  }
  return process.env.REACT_APP_API_URL_LOCAL || 'http://localhost:4433';
};

const API_BASE_URL = getApiUrl();
console.log('Using API Base URL:', API_BASE_URL);

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
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
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls (based on your schema)
export const authAPI = {
  login: (email, password) =>
    apiClient.post('/account/login/', { email, password }),

  register: (userData) =>
    apiClient.post('/account/register/', userData)
};

// Subscription API calls (based on your schema)
export const subscriptionAPI = {
  getUserSubscriptions: () =>
    apiClient.get('/subscription/user-subscriptions/'),

  getSubscription: () =>
    apiClient.get('/subscription/subscription/'),

  createSubscription: (subscriptionData) =>
    apiClient.post('/subscription/subscription/', subscriptionData),

  getOrganization: () =>
    apiClient.get('/subscription/organization/'),

  createOrganization: (organizationData) =>
    apiClient.post('/subscription/organization/', organizationData)
};

// Payment API calls (based on your schema)
export const paymentAPI = {
  initiatePayment: (paymentData) =>
    apiClient.post('/payment/initiate/', paymentData),

  verifyPayment: (paymentReference) =>
    apiClient.get(`/payment/verify/?reference=${paymentReference}`)
};

// Admin API calls (for platform admin)
export const adminAPI = {
  getUsers: () =>
    apiClient.get('/admin/users/'),

  getAllSubscriptions: () =>
    apiClient.get('/admin/subscriptions/'),

  getStats: () =>
    apiClient.get('/admin/stats/'),

  toggleUserStatus: (userId) =>
    apiClient.put(`/admin/users/${userId}/toggle-status/`),

  cancelUserSubscription: (subscriptionId) =>
    apiClient.put(`/admin/subscriptions/${subscriptionId}/cancel/`)
};

// Download API calls (for desktop app downloads)
export const downloadAPI = {
  getDownloadLink: (platform = 'windows') =>
    apiClient.get(`/downloads/${platform}/`, { responseType: 'blob' }),

  getDownloadStats: () =>
    apiClient.get('/downloads/stats/')
};

export { apiClient };

export default {
  authAPI,
  subscriptionAPI,
  paymentAPI,
  adminAPI,
  downloadAPI,
  apiClient
};
