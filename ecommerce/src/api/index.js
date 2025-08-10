// Axios'u import et
import axios from 'axios';

// Axios kullanarak api işlemleri yapacağımız bir metot oluştur
const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 5000,
  timeoutErrorMessage: 'Api işlemi sırasında hata oluştu',
});

export default api;
