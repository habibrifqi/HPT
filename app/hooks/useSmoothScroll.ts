// hooks/useSmoothScroll.ts
import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      
      if (
        target.hash && 
        (target.href.startsWith(`${window.location.origin}${window.location.pathname}#`) || 
         target.href.startsWith(`${window.location.origin}/#`))
      ) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
  
          // Update URL
          window.history.pushState({}, '', target.hash);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};