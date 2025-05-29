'use client';

import { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSInitializerProps {
  children: ReactNode;
}

const AOSInitializer = ({ children }: AOSInitializerProps) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return <>{children}</>;
};

export default AOSInitializer;