import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useCallback } from 'react';
import { RouteProps } from 'react-router';
import { routeConfig } from '@/app/providers/router/config/route-config.tsx';
import { Loader } from '@/shared/ui/loader/loader.tsx';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: RouteProps) => {
    const element = <Suspense fallback={<Loader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
