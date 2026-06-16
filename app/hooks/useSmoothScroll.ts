// hooks/useSmoothScroll.ts
import { useEffect, DependencyList } from 'react';

export const useSmoothScroll = (dependencies: DependencyList = []) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      if (target.hash && target.href.startsWith(`${window.location.origin}#`)) {
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

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleClick as EventListener));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick as EventListener));
    };
  }, dependencies);
};