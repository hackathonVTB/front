import { RMap, ROSM, RLayerVector, RFeature, RStyle } from 'rlayers';
import { Point } from 'ol/geom';
import { Extent } from 'ol/extent';
import { fromLonLat, toLonLat } from 'ol/proj';
import VtbIcon from '@/shared/assets/vtb-rounded-logo.svg';
import styles from './index.module.scss';
import useOfficeService from './services/useOfficeService';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { useState } from 'react';

const MapView = () => {
  const center = fromLonLat([37.61556, 55.75222]);
  const [extent, setExtent] = useState<Extent>();
  const { offices } = useOfficeService(extent || []);
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
        setExtent([...onePart, ...secPart]);
      }}
    >
      <ROSM />
      <RLayerVector zIndex={10}>
        {offices?.map((el: IShortBank) => (
          <RFeature
            key={el.id}
            geometry={new Point(fromLonLat([el.longitude, el.latitude]))}
          >
            <RStyle.RStyle>
              <RStyle.RIcon src={VtbIcon} />
            </RStyle.RStyle>
          </RFeature>
        ))}
      </RLayerVector>
    </RMap>
  );
};

export default MapView;
