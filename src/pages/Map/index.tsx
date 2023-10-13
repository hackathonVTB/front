import { MapView } from '@/shared/ui/map/map';
import { OfficeList } from '@/entities';

const MapPage = () => {
  return (
    <>
      <OfficeList></OfficeList>
      <MapView />;
    </>
  );
};

export default MapPage;
