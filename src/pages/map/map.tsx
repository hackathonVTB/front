import MapView from '@/widgets/map-wrapper/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar, Toggle } from '@/widgets';
import { Drawer, QueueIcon } from '@/shared';
import { isMobile } from 'react-device-detect';
import { Sidebar } from '@/widgets/sidebar';
import { useState } from 'react';
import SideBarOffice from '@/widgets/sideBarOffice';

const Map = () => {
  const [rightSidebarIsOpen, setRightSidebarIsOpen] = useState(false);
  const [toggle, setToggle] = useState<'office' | 'atms'>('office');

  const rightSidebar = rightSidebarIsOpen ? (
    <Sidebar
      closeIcon={true}
      onCloseClick={() => setRightSidebarIsOpen(false)}
    >
      Queue
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
            <SideBarOffice />
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
      toggleTypeService={
        !isMobile && (
          <Toggle
            toggle={toggle}
            setToggle={setToggle}
          />
        )
      }
    />
  );
};

export default Map;
