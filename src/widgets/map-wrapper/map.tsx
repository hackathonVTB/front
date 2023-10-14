import { RMap, ROSM, RLayerVector } from 'rlayers';
import { Extent } from 'ol/extent';
import { Coordinate } from 'ol/coordinate';
import { fromLonLat } from 'ol/proj';
import styles from './index.module.scss';
import useAtmService from '@/entities/office/model/services/use-atm-service.ts';
import { useEffect, useState } from 'react';
import { createExtent } from '@/entities/map/model/utils/utils.ts';
import { Popover } from '../../entities/map/ui/popover';
import CardPopover from '../../entities/map/ui/card-popover';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { IShortBank } from '@/entities/office/model/types/IBanks.ts';
import PointBank from '@/entities/map/ui/point-bank';
import { observer } from 'mobx-react-lite';
import { useLocalStore as useAtmStore } from '@/entities/atm/model/store';

const MapView = observer(() => {
  const center = fromLonLat([37.61556, 55.75222]);
  const [extent, setExtent] = useState<Extent>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [coordsPopover, setCoordsPopover] = useState<Coordinate>([]);
  const { offices } = useAtmService(extent || []);
  const { atmStore } = useAtmStore();

  useEffect(() => {
    if (!extent) return;
    atmStore.fetchAtms(extent).then((data) => console.log(data));
  }, [atmStore, extent]);

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
});

export default MapView;
