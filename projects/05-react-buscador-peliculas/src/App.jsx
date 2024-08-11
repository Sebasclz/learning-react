import './App.css';
import { Movies } from './components/Movies.jsx';
import { useMovies } from './hooks/useMovies.js';
import { useSearch } from './hooks/useSearch.js';
import { handlesUpdate } from './hooks/handlesUpdate.js';
import { useState } from 'react';

function App() {
  const [sortChange, setSortChange] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sortChange });
  const { handleSubmit, handleChange, handleSort } = handlesUpdate({
    setSearch,
    getMovies,
    search,
    sortChange,
    setSortChange,
  });

  return (
    <main>
      <header className="header">
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <button
              disabled={
                movies === undefined || movies === null || movies.length === 0
              }
              className="button-sort"
              onClick={handleSort}
            >
              Ordenar
            </button>
            <input
              style={{
                border: '1px solid transparent',
                borderColor: error ? 'red' : 'transparent',
              }}
              onChange={handleChange}
              value={search}
              name="query"
              type="text"
              placeholder="Avengers, Batman..."
            />
            <button className="button-search" type="submit">
              Buscar
            </button>
          </form>
          {error && (
            <p
              style={{
                color: 'red',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {error}
            </p>
          )}
        </div>
      </header>

      <section className="results">
        {loading ? <p>Cargando.</p> : <Movies movies={movies} />}
      </section>
    </main>
  );
}

export default App;
