import { RMap, ROSM, RLayerVector, RFeature, ROverlay } from 'rlayers';
import { Extent } from 'ol/extent';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import styles from './index.module.scss';
import useOfficeService from './services/useOfficeService';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { useState } from 'react';
import PointBank from './componets/PointBank';
import { createExtent } from './utils/utils';
import { Popover } from '../popover';

const MapView = () => {
  const center = fromLonLat([37.61556, 55.75222]);
  const [extent, setExtent] = useState<Extent>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { offices } = useOfficeService(extent || []);

  const onClose = () => {
    setIsOpen(false);
  };

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
        {offices?.map((bank: IShortBank) => (
          <PointBank
            bank={bank}
            setIsOpen={setIsOpen}
          />
        ))}
      </RLayerVector>
      {isOpen && (
        <RLayerVector zIndex={20}>
          <RFeature geometry={new Point(center)}>
            <ROverlay>
              <Popover
                isOpen={isOpen}
                onClose={onClose}
                children={<div>pfodf</div>}
              />
            </ROverlay>
          </RFeature>
        </RLayerVector>
      )}
    </RMap>
  );
};

export default MapView;
