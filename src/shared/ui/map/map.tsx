import { Map, YMaps } from '@pbe/react-yandex-maps';

const MapView = () => {
  return (
    <YMaps>
      <Map
        width={'100vw'}
        height={'100vh'}
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      />
    </YMaps>
  );
};

export { MapView };
