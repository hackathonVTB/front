import { RMap, ROSM, RLayerVector, RFeature, RStyle } from 'rlayers';
import { fromLonLat } from 'ol/proj';
import styles from './index.module.scss';
import { LineString, Point } from 'ol/geom';
import { createExtent } from '@/entities/map/model/utils/utils.ts';
import { Popover } from '../../entities/map/ui/popover';
import CardPopover from '../../entities/map/ui/card-popover';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import { IOfficesSide } from '@/shared/interface/OfficesSideBar/IOfficesSide';
import PointBank from '@/entities/map/ui/point-bank';
import { observer } from 'mobx-react-lite';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { geoStore } from '@/entities/map/model/store/geoObj';
import { useTogleLocalStore } from '@/entities/toggle/module';
import { Toogle } from '@/entities/toggle/module/types/ITogle';
import { useLocalAtmStore } from '@/entities/atm/model/store';
import PointAtm from '@/entities/map/ui/point-atm';

const MapView = observer(() => {
  const center = fromLonLat([37.61556, 55.75222]);
  const { extentStore, isOpenStore, officesPointsStore } =
    useLocalPointsStore();
  const { atmStore } = useLocalAtmStore();
  const { tooglStore } = useTogleLocalStore();

  const onClose = () => {
    isOpenStore.setIsOpen(false, [], null);
  };

  return (
    <RMap
      className={styles.map}
      view={[officesPointsStore.view, officesPointsStore.setView]}
      initial={{ center: center, zoom: 17 }}
      noDefaultControls
      onMoveEnd={(e: MapBrowserEvent<UIEvent>) => {
        extentStore.setExtent(createExtent(e));
      }}
    >
      <ROSM />
      {tooglStore.toogle === Toogle.Office ? (
        <RLayerVector zIndex={10}>
          {officesPointsStore.offices?.map((bank: IOfficesSide) => (
            <PointBank bank={bank} />
          ))}
        </RLayerVector>
      ) : (
        <RLayerVector zIndex={10}>
          {atmStore.atms?.map((atm) => <PointAtm atm={atm} />)}
        </RLayerVector>
      )}

      <RLayerVector zIndex={5}>
        <Popover
          isOpen={isOpenStore.isOpen}
          onClose={onClose}
          children={(close: () => void) => <CardPopover close={close} />}
          coords={isOpenStore.coords}
        />
      </RLayerVector>
      <RLayerVector zIndex={5}>
        <RFeature geometry={geoStore.route as LineString}>
          <RStyle.RStyle>
            <RStyle.RStroke
              width={5}
              color="#0AF"
            />
          </RStyle.RStyle>
        </RFeature>
      </RLayerVector>
      <RLayerVector zIndex={5}>
        <RFeature geometry={geoStore.pos as Point} />
      </RLayerVector>
    </RMap>
  );
});

export default MapView;
