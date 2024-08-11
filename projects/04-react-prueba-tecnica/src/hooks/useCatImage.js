import { useEffect, useState } from 'react';

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(' ', 3).join(' ');

    setImageUrl(
      `https://cataas.com/cat/says/${threeFirstWords}?fontColor=white`
    );
  }, [fact]);

  return { imageUrl };
}
