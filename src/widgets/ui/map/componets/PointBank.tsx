import { RFeature, RStyle } from 'rlayers';
import VtbIcon from '@/shared/assets/vtb-rounded-logo.svg';
import { Point } from 'ol/geom';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { fromLonLat } from 'ol/proj';

interface PointProps {
  bank: IShortBank;
}

const PointBank: React.FC<PointProps> = ({ bank }) => {
  return (
    <RFeature
      key={bank.id}
      geometry={new Point(fromLonLat([bank.longitude, bank.latitude]))}
    >
      <RStyle.RStyle>
        <RStyle.RIcon src={VtbIcon} />
      </RStyle.RStyle>
    </RFeature>
  );
};

export default PointBank;
