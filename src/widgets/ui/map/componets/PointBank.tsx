import { RFeature, RStyle } from 'rlayers';
import VtbIcon from '@/shared/assets/vtb-rounded-logo.svg';
import { Point } from 'ol/geom';
import { IShortBank } from '@/shared/interface/banks/IBanks';
import { fromLonLat } from 'ol/proj';
import { Dispatch } from 'react';

interface PointProps {
  bank: IShortBank;
  setIsOpen: Dispatch<boolean>;
}

const PointBank: React.FC<PointProps> = ({ bank, setIsOpen }) => {
  return (
    <RFeature
      key={bank.id}
      geometry={new Point(fromLonLat([bank.longitude, bank.latitude]))}
      onClick={() => setIsOpen(true)}
    >
      <RStyle.RStyle>
        <RStyle.RIcon src={VtbIcon} />
      </RStyle.RStyle>
    </RFeature>
  );
};

export default PointBank;
