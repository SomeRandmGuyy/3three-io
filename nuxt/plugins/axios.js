import axios from 'axios';

export default ({ $config }, inject) => {
  const api = axios.create({
    baseURL: $config.public.apiBaseUrl
  });

  api.interceptors.request.use(config => {
    console.log('Making request to ' + config.url);
    return config;
  });

  inject('api', api);
}
