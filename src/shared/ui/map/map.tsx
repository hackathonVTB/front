import { Map, YMaps } from '@pbe/react-yandex-maps';
import { classNames } from '@/shared/lib';
import styles from './map.module.scss';

interface MapViewProps {
  className?: string;
}
const MapView = (props: MapViewProps) => {
  const { className } = props;

  return (
    <YMaps>
      <Map
        className={classNames(styles.Map, {}, [className])}
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      />
    </YMaps>
  );
};

export { MapView };
