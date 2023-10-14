import { RMap, ROSM, RLayerVector } from 'rlayers';
import { fromLonLat } from 'ol/proj';
import styles from './index.module.scss';

import { useEffect } from 'react';
import { createExtent } from '@/entities/map/model/utils/utils.ts';
import { Popover } from '../../entities/map/ui/popover';
import CardPopover from '../../entities/map/ui/card-popover';
import MapBrowserEvent from 'ol/MapBrowserEvent';

import { IOfficesSide } from '@/shared/interface/OfficesSideBar/IOfficesSide';

import PointBank from '@/entities/map/ui/point-bank';
import { observer } from 'mobx-react-lite';
import { useLocalStore as useAtmStore } from '@/entities/atm/model/store';
import { useLocalPointsStore } from '@/entities/officePoints/model';

const MapView = observer(() => {
  const center = fromLonLat([37.61556, 55.75222]);
  const { extentStore, isOpenStore, officesPointsStore } =
    useLocalPointsStore();
  const { atmStore } = useAtmStore();

  useEffect(() => {
    if (!extentStore.extent) return;
    atmStore.fetchAtms(extentStore.extent).then((data) => console.log(data));
  }, [atmStore, extentStore.extent]);

  const onClose = () => {
    isOpenStore.setIsOpen(false, []);
  };

  return (
    <RMap
      className={styles.map}
      view={[officesPointsStore.view, officesPointsStore.setView]}
      initial={{ center: center, zoom: 11 }}
      noDefaultControls
      onMoveEnd={(e: MapBrowserEvent<UIEvent>) => {
        extentStore.setExtent(createExtent(e));
      }}
    >
      <ROSM />
      <RLayerVector zIndex={10}>
        {officesPointsStore.offices?.map((bank: IOfficesSide) => (
          <PointBank bank={bank} />
        ))}
      </RLayerVector>
      <RLayerVector zIndex={5}>
        <Popover
          isOpen={isOpenStore.isOpen}
          onClose={onClose}
          children={(close: () => void) => <CardPopover close={close} />}
          coords={isOpenStore.coords}
        />
      </RLayerVector>
    </RMap>
  );
});

export default MapView;
