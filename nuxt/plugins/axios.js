import axios from 'axios';

export default ({ $config }, inject) => {
  const api = axios.create({
    baseURL: $config.public.apiBaseUrl
  });

  // You can set up interceptors here if needed

  inject('api', api);
}
