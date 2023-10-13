import { useEffect, useState } from 'react';

const useJsApiScript = () => {
  const [loaded, setLoaded] = useState(false);

  const addHarp = () => {
    const script = document.createElement('script');

    script.id = 'js-api';
    script.type = 'text/javascript';
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${
      import.meta.env.VITE_YANDEX_MAP_API_KEY
    }&lang=ru_RU`;

    document.body.appendChild(script);
  };

  const removeJsApi = () => {
    const script = document.getElementById('js-api');

    if (script) {
      document.body.removeChild(script);
    }
  };

  useEffect(() => {
    addHarp();

    document
      .getElementById('js-api')
      ?.addEventListener('load', () => setLoaded(true));

    return () => {
      removeJsApi();

      document
        .getElementById('js-api')
        ?.addEventListener('load', () => setLoaded(true));
    };
  }, []);

  return loaded;
};

export { useJsApiScript };
