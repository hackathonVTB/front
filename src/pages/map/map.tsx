import MapView from '@/widgets/map-wrapper/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar } from '@/widgets';
import { Drawer } from '@/shared';
import { isMobile } from 'react-device-detect';
import { Sidebar } from '@/widgets/sidebar';
import { OfficeList } from '@/entities';

const Map = () => {
  return (
    <MainLayout
      navbar={<Navbar />}
      content={<MapView />}
      drower={isMobile ? <Drawer isOpen={true}>drawer</Drawer> : undefined}
      leftSidebar={
        !isMobile ? (
          <Sidebar>
            <OfficeList />
          </Sidebar>
        ) : undefined
      }
    />
  );
};

export default Map;
