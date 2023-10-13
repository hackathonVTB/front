// import styles from './map.module.scss';
import { useEffect } from 'react';
import { useJsApiScript } from './use-js-api-script.ts';
// import type { LngLat } from '@yandex/ymaps3-types';

// interface MapProps {
//
// }

const Map = () => {
  const isScriptLoaded = useJsApiScript();

  useEffect(() => {
    console.log(isScriptLoaded);
  }, [isScriptLoaded]);

  return (
    <div
      id="map"
      style={{ width: '400px', height: '400px' }}
    ></div>
  );
};

export { Map };
