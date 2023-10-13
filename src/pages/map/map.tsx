import MapView from '@/widgets/ui/map/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar } from '@/widgets';
import { Drawer } from '@/shared';
import { isMobile } from 'react-device-detect';
// import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';

const Map = () => {
  return (
    <MainLayout
      navbar={<Navbar />}
      content={<MapView />}
      drower={isMobile ? <Drawer isOpen={true}>drawer</Drawer> : undefined}
    />
  );
};

export default Map;
