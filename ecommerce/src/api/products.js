import api from '.';

// Tüm ürünleri api'dan alacak fonksiyon

const getAllProducts = () =>
  api.get('/products').then(response => response.data.products);

// Bir ürüne ait detay verileri api'dan alacak fonksiyon

export { getAllProducts };
