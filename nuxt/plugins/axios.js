import axios from 'axios';

export default ({ $config }, inject) => {
  const apiClient = axios.create({
    baseURL: $config.public.apiBaseUrl, // Use runtime config for API base URL
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  // Inject the axios instance to the context as $api
  inject('api', apiClient);
};
