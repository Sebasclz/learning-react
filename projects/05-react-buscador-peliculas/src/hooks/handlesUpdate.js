import debounce from 'just-debounce-it';
import { useCallback } from 'react';

export function handlesUpdate({
  setSearch,
  getMovies,
  search,
  sortChange,
  setSortChange,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleChange = (event) => {
    const newSearch = event.target.value;

    if (newSearch.startsWith(' ')) return;

    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSort = (event) => {
    event.preventDefault();
    setSortChange(!sortChange);
  };

  return { handleSubmit, handleChange, handleSort };
}
