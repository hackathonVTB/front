import MapView from '@/widgets/ui/map/map.tsx';
import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
import { Navbar } from '@/widgets';
// import { MainLayout } from '@/shared/ui/layouts/main-layout/main-layout.tsx';
// import { Navbar } from '@/widgets';

const Map = () => {
  return (
    <MainLayout
      navbar={<Navbar />}
      content={<MapView />}
    />
  );
};

export default Map;
