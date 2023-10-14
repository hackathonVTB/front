import MapView from '@/widgets/map-wrapper/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar, Toggle } from '@/widgets';
import { Drawer, QueueIcon } from '@/shared';
import { isMobile } from 'react-device-detect';
import { Sidebar } from '@/widgets/sidebar';
import { useState } from 'react';
import SideBarOffice from '@/widgets/sideBarOffice';
import { useTogleLocalStore } from '@/entities/toggle/module';
import { Toogle } from '@/entities/toggle/module/types/ITogle';
import SideBarAtm from '@/widgets/sideBarAtm';
import { observer } from 'mobx-react-lite';
import { ServiceModal } from '@/entities/service';

const Map = observer(() => {
  const [rightSidebarIsOpen, setRightSidebarIsOpen] = useState(false);
  const { tooglStore } = useTogleLocalStore();

  const rightSidebar = rightSidebarIsOpen ? (
    <Sidebar
      closeIcon={true}
      onCloseClick={() => setRightSidebarIsOpen(false)}
    >
      <ServiceModal />
    </Sidebar>
  ) : undefined;

  return (
    <MainLayout
      navbar={<Navbar />}
      content={<MapView />}
      drower={isMobile ? <Drawer isOpen={true}>drawer</Drawer> : undefined}
      leftSidebar={
        !isMobile && (
          <Sidebar>
            {tooglStore.toogle === Toogle.Office ? (
              <SideBarOffice />
            ) : (
              <SideBarAtm />
            )}
          </Sidebar>
        )
      }
      rightSidebar={!isMobile ? rightSidebar : undefined}
      rightDownButton={
        !isMobile && (
          <img
            src={QueueIcon}
            alt={'QueueIcon'}
            onClick={() => setRightSidebarIsOpen(true)}
          />
        )
      }
      toggleTypeService={!isMobile && <Toggle />}
    />
  );
});

export default Map;
