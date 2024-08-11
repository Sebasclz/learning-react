import { useCatFact } from './hooks/useCatFact.js';
import { useCatImage } from './hooks/useCatImage.js';

export function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleRandomFact = () => {
    refreshFact();
  };

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      placeItems: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>App de gatos</h1>

      <button onClick={handleRandomFact}>Obtener una nueva imagen aleatoria</button>

      {fact &&<p>{fact}</p>}

      {imageUrl &&<img className={{maxWidth: '500px'}} src={`${imageUrl}`} alt={`Imagen extraida usando las tres primeras palabras del texto: ${fact}`}/>}
    </main>
  );
};