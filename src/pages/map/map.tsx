import MapView from '@/widgets/map-wrapper/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar, Toggle } from '@/widgets';
import { Drawer, QueueIcon } from '@/shared';
import { isMobile } from 'react-device-detect';
import { Sidebar } from '@/widgets/sidebar';
import { useCallback, useEffect, useState } from 'react';
import SideBarOffice from '@/widgets/sideBarOffice';
import { useTogleLocalStore } from '@/entities/toggle/module';
import { Toogle } from '@/entities/toggle/module/types/ITogle';
import SideBarAtm from '@/widgets/sideBarAtm';
import { observer } from 'mobx-react-lite';
import { ServiceModal } from '@/entities/service';
import { Point } from 'ol/geom';
import { fromLonLat, toLonLat } from 'ol/proj';
import { useLocalGeoStore } from '@/entities/map/model/store';
import useSuitOffices from '@/shared/hooks/useSuitOffices.ts';
import useSuitAtms from '@/shared/hooks/useSuitoAtms.ts';

const Map = observer(() => {
  const [rightSidebarIsOpen, setRightSidebarIsOpen] = useState(false);
  const [toogleIsOpen, setToggleIsOpen] = useState(false);
  const { tooglStore } = useTogleLocalStore();
  const { geoStore } = useLocalGeoStore();
  const coord = toLonLat(geoStore.pos.getCoordinates());

  if (isMobile) {
    useSuitOffices([coord[0], coord[1]]);
    useSuitAtms([coord[0], coord[1]]);
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        geoStore.setGeoPos(new Point(fromLonLat([lng, lat])), undefined);
      });
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, [navigator.geolocation, geoStore.geoSearch]);

  const cancelHandle = useCallback(() => {
    setToggleIsOpen(false);
  }, []);

  const rightSidebar = rightSidebarIsOpen ? (
    <Sidebar
      closeIcon={true}
      onCloseClick={() => setRightSidebarIsOpen(false)}
    >
      <ServiceModal />
    </Sidebar>
  ) : undefined;

  if (isMobile) {
    return (
      <MainLayout
        navbar={<Navbar />}
        content={<MapView />}
        drower={
          <Drawer
            isOpen={toogleIsOpen}
            onClose={cancelHandle}
          >
            {tooglStore.toogle === Toogle.Office ? (
              <SideBarOffice />
            ) : (
              <SideBarAtm />
            )}
          </Drawer>
        }
        rightDownButton={
          <img
            src={QueueIcon}
            alt={'QueueIcon'}
            onClick={() => setToggleIsOpen(true)}
          />
        }
        toggleTypeService={<Toggle />}
      />
    );
  }

  return (
    <MainLayout
      navbar={<Navbar />}
      content={<MapView />}
      leftSidebar={
        <Sidebar>
          {tooglStore.toogle === Toogle.Office ? (
            <SideBarOffice />
          ) : (
            <SideBarAtm />
          )}
        </Sidebar>
      }
      rightSidebar={tooglStore.toogle === Toogle.Office && rightSidebar}
      rightDownButton={
        tooglStore.toogle === Toogle.Office && (
          <img
            src={QueueIcon}
            alt={'QueueIcon'}
            onClick={() => setRightSidebarIsOpen(true)}
          />
        )
      }
      toggleTypeService={<Toggle />}
    />
  );
});

export default Map;
