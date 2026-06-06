import { useEffect, useState } from 'react';
import { Hand } from 'lucide-react';
import profileImage from '../assets/PFP.png';
import { ArrowUpRight } from 'lucide-react';
const Home = () => {
  const [showWave, setShowWave] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setShowWave((prev) => !prev), 3000);
    return () => clearInterval(timer);
  }, []);
  

  return (
    <section className="w-full min-h-[calc(100vh-72px)] bg-[#f4f1ea] flex flex-col items-center justify-center overflow-hidden px-6 py-8 sm:px-10 md:px-14 lg:px-20 lg:py-10 mt-16 scroll-mt-24" id="home">
      <div className="w-full max-w-[1700px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-8 lg:gap-10">
        <div className="relative z-20 mx-2 sm:mx-4 md:-mr-8 lg:-mr-10 md:-mt-5 lg:-mt-13 flex flex-col items-start justify-center">
          <span className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-[0.08em] uppercase text-black">
            I&apos;m
          </span>
          <h1 className="text-[clamp(2.2rem,7vw,8.8rem)] font-black uppercase tracking-[-0.04em] leading-none text-black">
            WEBSITE
          </h1>
        </div>

        <div className="relative z-10 shrink-0">
          <img
            src={profileImage}
            alt="profile"
            className="h-[13rem] w-[13rem] sm:h-[15rem] sm:w-[15rem] md:h-[18rem] md:w-[18rem] lg:h-[22rem] lg:w-[22rem] object-contain rounded-full"
          />

          <div className="absolute left-2 bottom-2 sm:left-3 sm:bottom-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#c7f464] shadow-lg flex items-center justify-center">
            {showWave ? (
              <Hand className="w-8 h-8 text-black wave-animate" />
            ) : (
              <span className="text-2xl sm:text-3xl font-medium text-black">Hi</span>
            )}
          </div>
        </div>

        <h1 className="relative z-20 mx-2 sm:mx-4 md:-ml-8 lg:-ml-10 md:-mt-1 lg:-mt-2 text-center text-[clamp(2.2rem,7vw,8.8rem)] font-black uppercase tracking-[-0.02em] leading-none text-slate-950 bg-gradient-to-r from-slate-900 via-slate-900 to-gray-500 bg-clip-text text-transparent">
          DEVELOPER
        </h1>
      </div>
      <div className="w-full flex justify-center mt-6 px-4">
        <p className="max-w-3xl text-center mt-7 px-5 py-3 rounded-full border border-black/5  text-black font-bold text-sm sm:text-base md:text-lg leading-relaxed tracking-[-0.02em]">
          Building modern web experiences with{' '}
          <span className="bg-gradient-to-r from-black via-black to-gray-500 bg-clip-text text-transparent">
            full-stack and AI technologies
          </span>
          .
        </p>
      </div>

      <div className="w-full flex justify-center mt-10">
  
          <a href="#contact"
            className="group inline-flex items-center justify-center gap-3 whitespace-nowrap border-2 border-black bg-[#c7f464] px-7 py-3.5 font-black text-black text-sm sm:text-base tracking-[0.12em] uppercase transition-all duration-200 hover:bg-black hover:text-[#d4f705] hover:border-black rounded-full"
          >
            <span>Contect with me</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
      </div>

    </section>
  );
};

export default Home;

// import { useEffect, useState, useRef } from 'react';
// import { Hand } from 'lucide-react';
// import profileImage from '../assets/PFP.png';
// import { ArrowUpRight } from 'lucide-react';

// const Home = () => {
//   const [showWave, setShowWave] = useState(true);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [mounted, setMounted] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const timer = setInterval(() => setShowWave((prev) => !prev), 3000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   useEffect(() => {
//     const handleMouse = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100,
//       });
//     };
//     window.addEventListener('mousemove', handleMouse);
//     return () => window.removeEventListener('mousemove', handleMouse);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full min-h-[calc(100vh-72px)] bg-[#f4f1ea] flex flex-col items-center justify-center overflow-hidden px-6 py-8 sm:px-10 md:px-14 lg:px-20 lg:py-10 mt-16 scroll-mt-24 relative"
//       id="home"
//     >
//       {/* subtle radial spotlight that follows cursor */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700"
//         style={{
//           background: `radial-gradient(38% 38% at ${mousePos.x}% ${mousePos.y}%, rgba(199,244,100,0.18) 0%, transparent 100%)`,
//         }}
//       />

//       {/* faint grain texture overlay */}
//       <div
//         className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
//           backgroundSize: '200px 200px',
//         }}
//       />

//       {/* thin horizontal rule lines for editorial feel */}
//       <div className="pointer-events-none absolute inset-x-0 top-[18%] h-px bg-black/[0.06] z-0" />
//       <div className="pointer-events-none absolute inset-x-0 bottom-[22%] h-px bg-black/[0.06] z-0" />

//       {/* ── Main hero row ── */}
//       <div
//         className="relative z-10 w-full max-w-[1700px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-8 lg:gap-10"
//         style={{
//           opacity: mounted ? 1 : 0,
//           transform: mounted ? 'translateY(0)' : 'translateY(28px)',
//           transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
//         }}
//       >
//         {/* LEFT — "I'm WEBSITE" */}
//         <div className="relative z-20 mx-2 sm:mx-4 md:-mr-8 lg:-mr-10 md:-mt-5 lg:-mt-13 flex flex-col items-start justify-center">
//           {/* floating "I'm" badge */}
//           <span
//             className="mb-3 inline-flex items-center gap-1.5 border border-black/10 bg-white/70 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-[0.18em] uppercase text-black/60"
//             style={{ borderRadius: '2px' }}
//           >
//             <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c7f464]" />
//             I&apos;m
//           </span>

//           <h1
//             className="text-[clamp(2.2rem,7vw,8.8rem)] font-black uppercase leading-none text-black"
//             style={{
//               letterSpacing: '-0.04em',
//               WebkitTextStroke: '0px',
//               transition: 'letter-spacing 0.4s ease',
//             }}
//           >
//             {/* each letter gets a staggered entrance */}
//             {'WEBSITE'.split('').map((ch, i) => (
//               <span
//                 key={i}
//                 className="inline-block"
//                 style={{
//                   opacity: mounted ? 1 : 0,
//                   transform: mounted ? 'translateY(0)' : 'translateY(40px)',
//                   transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${0.12 + i * 0.055}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.12 + i * 0.055}s`,
//                 }}
//               >
//                 {ch}
//               </span>
//             ))}
//           </h1>
//         </div>

//         {/* CENTER — profile image */}
//         <div className="relative z-10 shrink-0">
//           {/* outer ring pulse */}
//           <div className="absolute inset-0 rounded-full animate-ping opacity-[0.07] bg-[#c7f464]" style={{ animationDuration: '3s' }} />

//           <div
//             className="relative"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? 'scale(1)' : 'scale(0.88)',
//               transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s',
//             }}
//           >
//             {/* decorative bracket lines around image */}
//             <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-black/20 rounded-tl-sm" />
//             <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-black/20 rounded-tr-sm" />
//             <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-black/20 rounded-bl-sm" />
//             <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-black/20 rounded-br-sm" />

//             <img
//               src={profileImage}
//               alt="profile"
//               className="h-[13rem] w-[13rem] sm:h-[15rem] sm:w-[15rem] md:h-[18rem] md:w-[18rem] lg:h-[22rem] lg:w-[22rem] object-contain rounded-full"
//               style={{ filter: 'contrast(1.04) saturate(0.96)' }}
//             />

//             {/* wave / hi badge */}
//             <div
//               className="absolute left-2 bottom-2 sm:left-3 sm:bottom-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#c7f464] shadow-lg flex items-center justify-center border-2 border-white"
//               style={{ boxShadow: '0 8px 32px rgba(199,244,100,0.45)' }}
//             >
//               {showWave ? (
//                 <Hand className="w-8 h-8 text-black wave-animate" />
//               ) : (
//                 <span className="text-2xl sm:text-3xl font-black text-black">Hi</span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT — "DEVELOPER" */}
//         <h1
//           className="relative z-20 mx-2 sm:mx-4 md:-ml-8 lg:-ml-10 md:-mt-1 lg:-mt-2 text-center text-[clamp(2.2rem,7vw,8.8rem)] font-black uppercase leading-none text-slate-950 bg-gradient-to-r from-slate-900 via-slate-900 to-gray-500 bg-clip-text text-transparent"
//           style={{ letterSpacing: '-0.02em' }}
//         >
//           {'DEVELOPER'.split('').map((ch, i) => (
//             <span
//               key={i}
//               className="inline-block"
//               style={{
//                 opacity: mounted ? 1 : 0,
//                 transform: mounted ? 'translateY(0)' : 'translateY(40px)',
//                 transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${0.28 + i * 0.045}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.28 + i * 0.045}s`,
//               }}
//             >
//               {ch}
//             </span>
//           ))}
//         </h1>
//       </div>

//       {/* ── tagline ── */}
//       <div
//         className="relative z-10 w-full flex justify-center mt-6 px-4"
//         style={{
//           opacity: mounted ? 1 : 0,
//           transform: mounted ? 'translateY(0)' : 'translateY(16px)',
//           transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s',
//         }}
//       >
//         <p className="max-w-3xl text-center mt-7 px-5 py-3 rounded-full border border-black/5 text-black font-bold text-sm sm:text-base md:text-lg leading-relaxed tracking-[-0.02em] bg-white/40 backdrop-blur-sm">
//           Building modern web experiences with{' '}
//           <span className="bg-gradient-to-r from-black via-black to-gray-500 bg-clip-text text-transparent">
//             full-stack and AI technologies
//           </span>
//           .
//         </p>
//       </div>

//       {/* ── CTA button ── */}
//       <div
//         className="relative z-10 w-full flex justify-center mt-10"
//         style={{
//           opacity: mounted ? 1 : 0,
//           transform: mounted ? 'translateY(0)' : 'translateY(16px)',
//           transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.7s',
//         }}
//       >
//         <a
//           href="#contact"
//           className="group relative inline-flex items-center justify-center gap-3 whitespace-nowrap border-2 border-black bg-[#c7f464] px-7 py-3.5 font-black text-black text-sm sm:text-base tracking-[0.12em] uppercase overflow-hidden rounded-full transition-colors duration-300 hover:border-black"
//           style={{ boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.85)' }}
//           onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 0px 0px rgba(0,0,0,0.85)'; e.currentTarget.style.transform = 'translate(2px, 2px)'; }}
//           onMouseLeave={e => { e.currentTarget.style.boxShadow = '4px 4px 0px 0px rgba(0,0,0,0.85)'; e.currentTarget.style.transform = 'translate(0,0)'; }}
//         >
//           {/* sliding fill on hover */}
//           <span
//             className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
//             aria-hidden="true"
//           />
//           <span className="relative z-10 transition-colors duration-300 group-hover:text-[#c7f464]">
//             Contact Me
//           </span>
//           <ArrowUpRight
//             className="relative z-10 h-4 w-4 transition-all duration-300 group-hover:text-[#c7f464] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//           />
//         </a>
//       </div>

//       {/* global wave keyframe — only for Hand icon */}
//       <style>{`
//         .wave-animate {
//           transform-origin: 70% 80%;
//           animation: wave-hand 1.4s ease-in-out infinite;
//         }
//         @keyframes wave-hand {
//           0%,100% { transform: rotate(0deg); }
//           20%      { transform: rotate(18deg); }
//           40%      { transform: rotate(-8deg); }
//           60%      { transform: rotate(16deg); }
//           80%      { transform: rotate(-4deg); }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Home;