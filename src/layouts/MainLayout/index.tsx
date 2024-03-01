import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense fallback="loading...">
      <Outlet />
    </Suspense>
  );
};
