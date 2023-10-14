import { RMap, ROSM, RLayerVector } from 'rlayers';
import { Extent } from 'ol/extent';
import { fromLonLat } from 'ol/proj';
import styles from './index.module.scss';
import useOfficeService from './services/useOfficeService';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { useState } from 'react';
import PointBank from './componets/PointBank';
import { createExtent } from './utils/utils';

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
        setExtent(createExtent(e));
      }}
    >
      <ROSM />
      <RLayerVector zIndex={10}>
        {offices?.map((bank: IShortBank) => <PointBank bank={bank} />)}
      </RLayerVector>
    </RMap>
  );
};

export default MapView;
