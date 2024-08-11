import { searchMovies } from '../services/movies.js';
import { useRef, useState, useMemo, useCallback } from 'react';

export function useMovies({ search, sortChange }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const prevSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === prevSearch.current) return;
    if (search === '') return;

    try {
      setLoading(true);

      prevSearch.current = search;

      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sortChange
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sortChange, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
