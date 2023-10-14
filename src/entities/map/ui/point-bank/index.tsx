import { RFeature, RStyle } from 'rlayers';
import VtbIcon from '@/shared/assets/vtb-rounded-logo.svg';
import { Point } from 'ol/geom';
import { Coordinate } from 'ol/coordinate';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { fromLonLat } from 'ol/proj';
import { observer } from 'mobx-react-lite';
import { useLocalPointsStore } from '@/entities/officePoints/model';
import { IOfficesSide } from '@/shared/interface/OfficesSideBar/IOfficesSide';

interface PointProps {
  bank: IOfficesSide;
}

const PointBank: React.FC<PointProps> = observer(({ bank }) => {
  const { isOpenStore } = useLocalPointsStore();
  return (
    <RFeature
      key={bank.id}
      geometry={new Point(fromLonLat([bank.longitude, bank.latitude]))}
      onClick={() => {
        isOpenStore.setIsOpen(
          true,
          fromLonLat([bank.longitude, bank.latitude]),
        );
      }}
    >
      <RStyle.RStyle>
        <RStyle.RIcon src={VtbIcon} />
      </RStyle.RStyle>
    </RFeature>
  );
});

export default PointBank;
