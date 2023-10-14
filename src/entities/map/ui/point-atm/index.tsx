import { RFeature, RStyle } from 'rlayers';
import AtmLogo from '@/shared/assets/atm-banks-logo.svg';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { observer } from 'mobx-react-lite';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { IAtms } from '@/shared/interface/atms/IAtms';

interface PointProps {
  atm: IAtms;
}

const PointAtm: React.FC<PointProps> = observer(({ atm }) => {
  const { isOpenStore } = useLocalPointsStore();
  return (
    <RFeature
      key={atm.id}
      geometry={new Point(fromLonLat([atm.longitude, atm.latitude]))}
      onClick={() => {
        isOpenStore.setIsOpen(true, fromLonLat([atm.longitude, atm.latitude]), {
          ...atm,
          load_rate: 0,
        });
      }}
    >
      <RStyle.RStyle>
        <RStyle.RIcon src={AtmLogo} />
      </RStyle.RStyle>
    </RFeature>
  );
});

export default PointAtm;
