import { AppRoutes, getRouteMain } from '@/shared';
import { RouteProps } from 'react-router';
import { MapPage, NotFoundPage } from '@/pages';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MapPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
