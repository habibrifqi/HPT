// 'use client'; // Wajib untuk komponen client-side di Next.js

// import { motion, useAnimation } from 'framer-motion';
// import { useEffect, useRef } from 'react';

// interface SkillBarProps {
//   skillName: string;
//   percentage: number;
//   color?: string;
//   duration?: number;
//   delay?: number;
// }

// const SkillBar = ({
//   skillName,
//   percentage,
//   color = 'bg-blue-500',
//   duration = 1.5,
//   delay = 0
// }: SkillBarProps) => {
//   const controls = useAnimation();
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             controls.start({
//               width: `${percentage}%`,
//               transition: { 
//                 duration, 
//                 ease: "easeOut",
//                 delay 
//               }
//             });
//           }
//         });
//       },
//       {
//         threshold: 0.1, // Mulai animasi ketika 10% komponen terlihat
//         rootMargin: '0px 0px -50px 0px' // Memicu animasi 50px sebelum masuk viewport
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [controls, percentage, duration, delay]);

//   return (
//     <div ref={ref} className="mb-6">
//       <div className="flex justify-between mb-2 ">
//         <span>{skillName}</span>
//         <span>{percentage}%</span>
//       </div>
//       <div className="skill-bar">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={controls}
//           className={`skill-progress h-full rounded-full ${color}`}
//         />
//       </div>
//     </div>
//   );
// };


// export default SkillBar;

// 'use client';

// import { motion, useAnimation } from 'framer-motion';
// import { useEffect, useRef } from 'react';

// interface SkillBarProps {
//   skillName: string;
//   percentage: number;
//   color?: string;
//   duration?: number;
//   delay?: number;
// }

// const SkillBar = ({
//   skillName,
//   percentage,
//   duration = 1.5,
//   delay = 0
// }: SkillBarProps) => {
//   const controls = useAnimation();
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Reset animasi ke awal sebelum memulai lagi
//             controls.start({ width: 0 }).then(() => {
//               controls.start({
//                 width: `${percentage}%`,
//                 transition: { 
//                   duration, 
//                   ease: "easeOut",
//                   delay 
//                 }
//               });
//             });
//           } else {
//             // Reset saat keluar dari viewport
//             controls.start({ width: 0 });
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: '0px 0px -50px 0px'
//       }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [controls, percentage, duration, delay]);

//   return (
//     <div ref={ref} className="mb-6">
//       <div className="flex justify-between mb-2 ">
//         <span>{skillName}</span>
//         <span>{percentage}%</span>
//       </div>
//       <div className="skill-bar">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={controls}
//           className={`skill-progress `}
//         />
//       </div>
//     </div>
//   );
// };

// export default SkillBar;

'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface SkillBarProps {
  skillName: string;
  percentage: number;
  color?: string;
  duration?: number;
  delay?: number;
}

const SkillBar = ({
  skillName,
  percentage,
  duration = 1.5,
  delay = 0
}: SkillBarProps) => {
  const barControls = useAnimation();
  const percentageControls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animasi ke awal sebelum memulai lagi
            barControls.start({ width: 0 }).then(() => {
              barControls.start({
                width: `${percentage}%`,
                transition: { 
                  duration, 
                  ease: "easeOut",
                  delay 
                }
              });
            });
            
            // Animasi untuk persentase dari 0 ke nilai akhir
            percentageControls.start({
              opacity: [0, 1],
              scale: [0.8, 1],
              transition: { duration: 1.5, delay }
            });
            
            // Animasi angka berhitung
            const start = 0;
            const end = percentage;
            const durationMs = duration * 1000;
            let startTimestamp: number | null = null;
            
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
              const currentValue = Math.floor(progress * (end - start) + start);
              
              if (ref.current) {
                const percentageElement = ref.current.querySelector('.percentage-value');
                if (percentageElement) {
                  percentageElement.textContent = `${currentValue}%`;
                }
              }
              
              if (progress < 1) {
                window.requestAnimationFrame(step);
              }
            };
            
            window.requestAnimationFrame(step);
            
          } else {
            // Reset saat keluar dari viewport
            barControls.start({ width: 0 });
            percentageControls.start({ opacity: 0, scale: 0.8 });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [barControls, percentageControls, percentage, duration, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span>{skillName}</span>
        <motion.span 
          className="percentage-value"
          animate={percentageControls}
          initial={{ opacity: 0, scale: 0.8 }}
        >
          0%
        </motion.span>
      </div>
      <div className="skill-bar">
        <motion.div
          initial={{ width: 0 }}
          animate={barControls}
          className={`skill-progress`}
        />
      </div>
    </div>
  );
};

export default SkillBar;

