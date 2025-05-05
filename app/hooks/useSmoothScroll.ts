// hooks/useSmoothScroll.ts
import { useEffect } from 'react';

export const useSmoothScroll = (dependencies: any[] = []) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.hash && target.href.startsWith(`${window.location.origin}#`)) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        
        if (targetElement) {
            // Perhitungan posisi yang lebih akurat
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - 80; // Sesuaikan dengan tinggi navbar
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
  
            // Update URL
            window.history.pushState({}, '', target.hash);
          }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleClick));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, dependencies);
};