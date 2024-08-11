import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

export function Filters() {
  const { filters, setFilters } = useFilters();

  const priceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangePrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor={priceFilterId}>Min Price</label>
        <input
          type="range"
          id={priceFilterId}
          min="0"
          max="95"
          onChange={handleChangePrice}
          value={filters.price}
        />
        <span>${filters.price}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          onChange={handleChangeCategory}
          id={categoryFilterId}
          className="custom-select"
        >
          <option value="all">All</option>
          <option value="Clothes">Clothes</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Shoes">Shoes</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
    </section>
  );
}
