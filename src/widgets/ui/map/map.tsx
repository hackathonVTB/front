import { RMap, ROSM, RLayerVector, RFeature, ROverlay } from 'rlayers';
import { Point } from 'ol/geom';
import { fromLonLat, toLonLat } from 'ol/proj';
import { SiPointy } from 'react-icons/si';
import styles from './index.module.scss';
import useOfficeService from './services/useOfficeService';
import { IBank } from '@/shared/interface/banks/IBanks';

const MapView = () => {
  const center = fromLonLat([37.61556, 55.75222]);
  const { offices } = useOfficeService();
  return (
    <RMap
      className={styles.map}
      initial={{ center: center, zoom: 11 }}
      noDefaultControls
      onMoveEnd={(e) => {
        const onePart = toLonLat([
          e.target.frameState_.extent[0],
          e.target.frameState_.extent[1],
        ]);
        const secPart = toLonLat([
          e.target.frameState_.extent[2],
          e.target.frameState_.extent[3],
        ]);
        console.log([...onePart, ...secPart]);
      }}
    >
      <ROSM />
      <RLayerVector zIndex={10}>
        {offices?.map((el: IBank) => (
          <RFeature
            key={el.salePointName}
            geometry={new Point(fromLonLat([el.longitude, el.latitude]))}
          >
            <ROverlay>
              <SiPointy />
            </ROverlay>
          </RFeature>
        ))}
      </RLayerVector>
    </RMap>
  );
};

export default MapView;
