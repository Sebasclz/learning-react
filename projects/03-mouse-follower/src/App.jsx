import { useEffect, useState } from 'react';
import { FollowMove } from './components/FollowMove.jsx';
import { handleClick } from './logic/functions.js';

function App() {

  const [enabled, setEnabled] = useState(false);

  const [ position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };
      
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }

    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);

    return () => {
      document.body.classList.remove('no-cursor');
    };
  }, [enabled]);

  return (
    <main>
      <FollowMove position={position} enabled={enabled} handleClick={() => handleClick(setEnabled, enabled)} />
    </main>
  );
}

export default App;
