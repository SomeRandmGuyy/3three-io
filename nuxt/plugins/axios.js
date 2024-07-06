import axios from 'axios';

export default ({ $config }, inject) => {
  const api = axios.create({
    baseURL: $config.public.apiBaseUrl
  });

  api.interceptors.request.use(config => {
    console.log('Making request to ' + config.url);
    config.headers.common['Access-Control-Allow-Origin'] = '*';
    config.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    config.headers.common['Access-Control-Allow-Headers'] = 'X-Requested-With, content-type, Authorization';
    
    // Add CSRF token from cookie
    const token = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='));
    if (token) {
      config.headers['X-XSRF-TOKEN'] = token.split('=')[1];
    }

    return config;
  });

  inject('api', api);
}
