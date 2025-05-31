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

    // Fungsi untuk mereset animasi
    const resetAnimationOnExit = () => {
      document.querySelectorAll('[data-aos]').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom >= 0;

        if (!isInViewport) {
          // Hapus atribut yang mencegah animasi berulang
          element.removeAttribute('data-aos-animated');
          element.removeAttribute('data-aos');
          
          // Kembalikan atribut asli setelah microtask
          requestAnimationFrame(() => {
            const originalAos = element.getAttribute('data-aos-original');
            if (originalAos) {
              element.setAttribute('data-aos', originalAos);
            }
          });
        }
      });
    };

    // Simpan nilai data-aos original
    document.querySelectorAll('[data-aos]').forEach((element) => {
      if (!element.getAttribute('data-aos-original')) {
        element.setAttribute('data-aos-original', element.getAttribute('data-aos') || '');
      }
    });

    // Tambahkan event listener dengan debounce untuk performa
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

