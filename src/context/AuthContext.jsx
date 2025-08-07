import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient, authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount, restore user from token if present
  useEffect(() => {
    const restoreUser = async () => {
      const token = localStorage.getItem('token');
      console.log('AuthContext: Restoring user, token found:', !!token);
      if (token) {
        apiClient.defaults.headers.Authorization = `Bearer ${token}`;
        try {
          // Fetch user profile from backend using the token
          console.log('AuthContext: Fetching user profile...');
          const response = await authAPI.getProfile();
          console.log('AuthContext: Profile response:', response.data);
          setUser(response.data); // Profile API returns user data directly
        } catch (err) {
          // Invalid token, remove it
          console.log('AuthContext: Profile fetch failed:', err.message);
          localStorage.removeItem('token');
          delete apiClient.defaults.headers.Authorization;
          setUser(null);
        }
      }
      setLoading(false);
    };
    restoreUser();
  }, []);

  const login = async (email, password) => {
    try {
      console.log('AuthContext: Attempting login...');
      const response = await authAPI.login(email, password);
      const { token, user } = response.data;
      console.log('AuthContext: Login response - token:', token, 'user:', !!user);

      const accessToken = token?.access;
      if (accessToken) {
        localStorage.setItem('token', accessToken);
        console.log('AuthContext: Access token saved to localStorage');
        apiClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
        setUser(user);

        // Verify token was saved
        const savedToken = localStorage.getItem('token');
        console.log('AuthContext: Verified token in localStorage:', !!savedToken);
      } else {
        console.log('AuthContext: No access token in login response');
      }

      return { success: true };
    } catch (error) {
      console.log('AuthContext: Login failed:', error.response?.data?.message || error.message);
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed'
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      const { token, user } = response.data;
      const accessToken = token?.access;
      if (accessToken) {
        localStorage.setItem('token', accessToken);
        apiClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
        setUser(user);
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete apiClient.defaults.headers.Authorization;
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
