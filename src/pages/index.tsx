import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const MapPage = lazy(() => import('./Map/index.tsx'));

export const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MapPage />}
      />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
};
