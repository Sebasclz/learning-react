import { useContext } from 'react';
import { FiltersContext } from '../context/filters.jsx';

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.price &&
        (filters.category === 'all' ||
          product.category.name === filters.category)
      );
    });
  };

  return { filterProducts, filters, setFilters };
}
