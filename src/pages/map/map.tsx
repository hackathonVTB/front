import MapView from '@/widgets/map-wrapper/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar } from '@/widgets';
import { Drawer, QueueIcon } from '@/shared';
import { isMobile } from 'react-device-detect';
import { Sidebar } from '@/widgets/sidebar';
import Menu from '@/widgets/menu';
import { useState } from 'react';

const Map = () => {
  const [rightSidebarIsOpen, setRightSidebarIsOpen] = useState(false);

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
        !isMobile ? (
          <Sidebar>
            <Menu />
          </Sidebar>
        ) : undefined
      }
      rightSidebar={!isMobile ? rightSidebar : undefined}
      rightDownButton={
        !isMobile ? (
          <img
            src={QueueIcon}
            alt={'QueueIcon'}
            onClick={() => setRightSidebarIsOpen(true)}
          />
        ) : undefined
      }
    />
  );
};

export default Map;
