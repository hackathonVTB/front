import MapView from '@/widgets/map-wrapper/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar, Toggle } from '@/widgets';
import { Drawer, QueueIcon } from '@/shared';
import { isMobile } from 'react-device-detect';
import { Sidebar } from '@/widgets/sidebar';
import { useCallback, useState } from 'react';
import SideBarOffice from '@/widgets/sideBarOffice';
import { useTogleLocalStore } from '@/entities/toggle/module';
import { Toogle } from '@/entities/toggle/module/types/ITogle';
import SideBarAtm from '@/widgets/sideBarAtm';
import { observer } from 'mobx-react-lite';
import { ServiceModal } from '@/entities/service';

const Map = observer(() => {
  const [rightSidebarIsOpen, setRightSidebarIsOpen] = useState(false);
  const [toogleIsOpen, setToggleIsOpen] = useState(false);
  const { tooglStore } = useTogleLocalStore();

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
      rightSidebar={!isMobile ? rightSidebar : undefined}
      rightDownButton={
        <img
          src={QueueIcon}
          alt={'QueueIcon'}
          onClick={() => setRightSidebarIsOpen(true)}
        />
      }
      toggleTypeService={<Toggle />}
    />
  );
});

export default Map;
