import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/v2', // Your API base URL
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Example API call to login
export const login = (credentials) => {
  return apiClient.post('/login', credentials);
};

// Example API call to register
export const register = (userData) => {
  return apiClient.post('/register', userData);
};

// Example API call to logout
export const logout = () => {
  return apiClient.post('/logout');
};

// Other API calls...
export const forgotPassword = (email) => {
  return apiClient.post('/password-forgot', { email });
};

export const resetPassword = (data) => {
  return apiClient.post('/password-reset', data);
};

// Fetch user profile
export const fetchUserProfile = () => {
  return apiClient.get('/me');
};

// Update user profile
export const updateUserProfile = (profileData) => {
  return apiClient.patch('/me', profileData);
};

// Upload files
export const uploadFile = (resource, id, field, file) => {
  const formData = new FormData();
  formData.append('file', file);

  return apiClient.post(`/uploads/${resource}/${id}/${field}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

// JSON API resource calls
export const fetchCategories = () => {
  return apiClient.get('/categories');
};

export const fetchItems = () => {
  return apiClient.get('/items');
};

export const fetchPermissions = () => {
  return apiClient.get('/permissions');
};

export const fetchRoles = () => {
  return apiClient.get('/roles');
};

export const fetchTags = () => {
  return apiClient.get('/tags');
};

export const fetchUsers = () => {
  return apiClient.get('/users');
};
