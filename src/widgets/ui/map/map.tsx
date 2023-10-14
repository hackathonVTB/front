import { RMap, ROSM, RLayerVector } from 'rlayers';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { fromLonLat } from 'ol/proj';
import styles from './index.module.scss';
import useOfficeService from './services/useOfficeService';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { useState } from 'react';
import PointBank from './componets/PointBank';
import { createExtent } from './utils/utils';
import { Popover } from '../popover';
import CardPopover from './componets/CardPopover';
import MapBrowserEvent from 'ol/MapBrowserEvent';

const MapView = () => {
  const center = fromLonLat([37.61556, 55.75222]);
  const [extent, setExtent] = useState<Extent>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [coordsPopover, setCoordsPopover] = useState<Coordinate>([]);
  const { offices } = useOfficeService(extent || []);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <RMap
      className={styles.map}
      initial={{ center: center, zoom: 11 }}
      noDefaultControls
      onMoveEnd={(e: MapBrowserEvent<UIEvent>) => {
        setExtent(createExtent(e));
      }}
    >
      <ROSM />
      <RLayerVector zIndex={10}>
        {offices?.map((bank: IShortBank) => (
          <PointBank
            bank={bank}
            setIsOpen={setIsOpen}
            setCoordsPopover={setCoordsPopover}
          />
        ))}
      </RLayerVector>
      <RLayerVector zIndex={5}>
        <Popover
          isOpen={isOpen}
          onClose={onClose}
          children={(close: () => void) => <CardPopover close={close} />}
          coords={coordsPopover}
        />
      </RLayerVector>
    </RMap>
  );
};

export default MapView;
