import { RMap, ROSM, RLayerVector } from 'rlayers';
import { Extent } from 'ol/extent';
import { LineString } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import styles from './index.module.scss';
import useOfficeService from './services/useOfficeService';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { useState } from 'react';
import PointBank from './componets/PointBank';
import { createExtent } from './utils/utils';
import Geoloc from '@/widgets/geo';
import { observer } from 'mobx-react-lite';
import { RFeature } from 'node_modules/rlayers';
import { useLocalGeoStore } from '@/entities/map/model/store';

const MapView = observer(() => {
  const center = fromLonLat([37.61556, 55.75222]);
  const { geoStore } = useLocalGeoStore();
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
      <Geoloc />
      <RLayerVector zIndex={20}>
        <RFeature geometry={geoStore.route as LineString} />
      </RLayerVector>
    </RMap>
  );
});

export default MapView;
