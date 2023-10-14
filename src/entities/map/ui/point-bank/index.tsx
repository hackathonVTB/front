import { RFeature, RStyle } from 'rlayers';
import VtbIcon from '@/shared/assets/vtb-rounded-logo.svg';
import { Point } from 'ol/geom';
import { Coordinate } from 'ol/coordinate';
import { IShortBank } from '@/entities/map/model/types/IBanks.ts';
import { fromLonLat } from 'ol/proj';
import { Dispatch } from 'react';

interface PointProps {
  bank: IShortBank;
  setIsOpen: Dispatch<boolean>;
  setCoordsPopover: Dispatch<Coordinate>;
}

const PointBank: React.FC<PointProps> = ({
  bank,
  setIsOpen,
  setCoordsPopover,
}) => {
  return (
    <RFeature
      key={bank.id}
      geometry={new Point(fromLonLat([bank.longitude, bank.latitude]))}
      onClick={() => {
        setCoordsPopover(fromLonLat([bank.longitude, bank.latitude]));
        setIsOpen(true);
      }}
    >
      <RStyle.RStyle>
        <RStyle.RIcon src={VtbIcon} />
      </RStyle.RStyle>
    </RFeature>
  );
};

export default PointBank;
