import { useState, useEffect, useMemo } from 'react';
import { Header, Main, ImageGif, Control, Footer } from './components';
import { giphy } from './common';

interface ImageData {
  title: string;
  url: string;
}

export function App() {
  const [query, setQuery] = useState('');
  const [imageData, setImageData] = useState<null | ImageData>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const randomizeGradient = () => {
      const ogColors = ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'];

      const shuffledColors = ogColors
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      shuffledColors.forEach((color, index) =>
        document.documentElement.style.setProperty(`--color-${index}`, color)
      );
    };
    randomizeGradient();
    getGif();
  }, []);

  const handleGifSuccess = ({
    title,
    images: {
      original: { url }
    }
  }: {
    title: string;
    images: { original: { url: string } };
  }) => {
    const img = document.querySelector('img');

    img!.onload = () => {
      setIsLoaded(true);
      setIsFetching(false);
    };

    img!.onerror = () => {
      setIsLoaded(false);
      setIsFetching(false);
    };

    setImageData({ title, url });
  };

  const handleGifError = () => {
    setIsFetching(false);
    setIsLoaded(false);
  };

  const getGif = (searchQuery?: string) => {
    setIsFetching(true);
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${giphy}&s=${
        !searchQuery ? 'cats' : searchQuery
      }`
    )
      .then((res) => res.json())
      .then(({ data }) => handleGifSuccess(data))
      .catch(() => handleGifError());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getGif(query);
  };

  const imageKey = useMemo(() => Math.random(), [isFetching]);

  return (
    <div className='flex min-h-screen flex-col items-center gap-4'>
      <Header />
      <Main>
        <ImageGif
          query={query}
          isLoaded={isLoaded}
          isFetching={isFetching}
          imageKey={imageKey}
          {...imageData}
        />
        <Control
          getGif={() => getGif(query)}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </Main>
      <Footer />
    </div>
  );
}
