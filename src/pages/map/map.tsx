import MapView from '@/widgets/map-wrapper/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar } from '@/widgets';
import { Drawer } from '@/shared';
import { isMobile } from 'react-device-detect';
import { Sidebar } from '@/widgets/sidebar';
import Menu from '@/widgets/menu';
import { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        console.log(lat);
        console.log(lng);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, [navigator.geolocation]);

  return (
    <MainLayout
      navbar={<Navbar />}
      content={<MapView />}
      drower={isMobile ? <Drawer isOpen={true}>drawer</Drawer> : undefined}
      leftSidebar={
        !isMobile ? (
          <Sidebar>
            <Menu />
          </Sidebar>
        ) : undefined
      }
    />
  );
};

export default Map;
