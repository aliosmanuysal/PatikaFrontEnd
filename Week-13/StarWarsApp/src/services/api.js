import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/',
  timeout: 10000, // Zaman aşımı süresi (opsiyonel)
});

export default api;