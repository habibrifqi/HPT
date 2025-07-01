// 'use client';

// import { useEffect, ReactNode } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// interface AOSInitializerProps {
//   children: ReactNode;
// }

// const AOSInitializer = ({ children }: AOSInitializerProps) => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false
//     });
//   }, []);

//   return <>{children}</>;
// };

// export default AOSInitializer;

'use client';

import { useEffect, ReactNode } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSInitializerProps {
  children: ReactNode;
}

const AOSInitializer = ({ children }: AOSInitializerProps) => {
  useEffect(() => {
    // Inisialisasi AOS dengan konfigurasi
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Pastikan false untuk animasi berulang
      mirror: true, // Animasi akan trigger saat scroll up dan down
    });

    // Function to reset animation
    const resetAnimationOnExit = () => {
      document.querySelectorAll('[data-aos]').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

        if (!isInViewport) {
          // Remove attribute that prevents animation repetition
          element.removeAttribute('data-aos-animated');
          element.removeAttribute('data-aos');
          
          // Restore original attribute after microtask
          requestAnimationFrame(() => {
            const originalAos = element.getAttribute('data-aos-original');
            if (originalAos) {
              element.setAttribute('data-aos', originalAos);
            }
          });
        }
      });
    };

    // Save original data-aos value
    document.querySelectorAll('[data-aos]').forEach((element) => {
      if (!element.getAttribute('data-aos-original')) {
        element.setAttribute('data-aos-original', element.getAttribute('data-aos') || '');
      }
    });

    // Add event listener with debounce for performance
    let timeout: NodeJS.Timeout;
    const debouncedReset = () => {
      clearTimeout(timeout);
      timeout = setTimeout(resetAnimationOnExit, 100);
    };

    window.addEventListener('scroll', debouncedReset);
    return () => {
      window.removeEventListener('scroll', debouncedReset);
      clearTimeout(timeout);
    };
  }, []);

  return <>{children}</>;
};

export default AOSInitializer;

