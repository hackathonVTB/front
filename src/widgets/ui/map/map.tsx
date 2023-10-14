import { RMap, ROSM, RLayerVector } from 'rlayers';
import { fromLonLat } from 'ol/proj';
import styles from './index.module.scss';
import PointBank from './componets/PointBank';
import { createExtent } from './utils/utils';
import { Popover } from '../popover';
import CardPopover from './componets/CardPopover';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { observer } from 'mobx-react-lite';
import { IOfficesSide } from '@/shared/interface/OfficesSideBar/IOfficesSide';

const MapView = observer(() => {
  const center = fromLonLat([37.61556, 55.75222]);
  const { extentStore, isOpenStore, officesPointsStore } =
    useLocalPointsStore();

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
