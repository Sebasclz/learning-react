import { getProducts } from '../services/products.js';
import { useEffect, useState } from 'react';

export function useProductsData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        // Filtra los productos
        const filteredProducts = data.products.filter(
          (product) => !(product.id >= 52 && product.id <= 62)
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return products;
}
