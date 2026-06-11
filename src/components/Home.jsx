import { useEffect, useState } from 'react';
import { Hand } from 'lucide-react';
import profileImage from '../assets/PFP.png';
import { ArrowUpRight } from 'lucide-react';

const Home = () => {
  const [showWave, setShowWave] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setShowWave((prev) => !prev), 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // slight delay so CSS transitions fire after paint
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="w-full min-h-[calc(100vh-72px)] bg-[#f4f1ea] flex flex-col items-center justify-center overflow-hidden px-6 py-8 sm:px-10 md:px-14 lg:px-20 lg:py-10 mt-16 scroll-mt-24"
      id="home"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <svg
          className="absolute right-0 top-0 w-[900px] h-[700px] opacity-50"
          viewBox="0 0 900 700"
          fill="none"
        >
          <path
            d="M100 650C250 520 320 430 450 340C620 220 720 100 900 40"
            stroke="#D6B05E"
            strokeWidth="1.5"
          />

          <path
            d="M160 700C310 570 380 470 510 380C680 260 780 140 900 90"
            stroke="#D6B05E"
            strokeWidth="1"
          />

          <circle
            cx="720"
            cy="90"
            r="70"
            stroke="#D6B05E"
            strokeWidth="1"
          />

          <circle
            cx="840"
            cy="60"
            r="90"
            stroke="#D6B05E"
            strokeWidth="1"
          />
        </svg>

      </div>
      
      {/* ── keyframes injected once ── */}
      <style>{`
        /* waving hand */
        .wave-animate {
          transform-origin: 70% 80%;
          animation: wave-hand 1.4s ease-in-out infinite;
        }
        @keyframes wave-hand {
          0%,100% { transform: rotate(0deg); }
          20%      { transform: rotate(18deg); }
          40%      { transform: rotate(-8deg); }
          60%      { transform: rotate(16deg); }
          80%      { transform: rotate(-4deg); }
        }

        /* single-pass conic beam around the image */
        @keyframes beam-once {
          0%   { transform: rotate(0deg);   opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: rotate(360deg); opacity: 0; }
        }
        .beam-ring {
          animation: beam-once 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s 1 forwards;
          opacity: 0;
        }

        /* soft pulse glow after beam finishes */
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%       { opacity: 0.6;  transform: scale(1.03); }
        }
        .glow-ring {
          animation: glow-pulse 3s ease-in-out 2.2s infinite;
          opacity: 0;
        }

        /* entrance: fade + slide up */
        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                      transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .fade-up.in {
          opacity: 1;
          transform: translateY(0);
        }

        /* entrance: fade + slide in from left */
        .fade-left {
          opacity: 0;
          transform: translateX(-36px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                      transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .fade-left.in {
          opacity: 1;
          transform: translateX(0);
        }

        /* entrance: fade + slide in from right */
        .fade-right {
          opacity: 0;
          transform: translateX(36px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
                      transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .fade-right.in {
          opacity: 1;
          transform: translateX(0);
        }

        /* entrance: scale up from center */
        .scale-in {
          opacity: 0;
          transform: scale(0.88);
          transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1),
                      transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .scale-in.in {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <div className="w-full max-w-[1700px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-8 lg:gap-10">

        {/* ── LEFT — "I'm WEBSITE" ── */}
        <div
          className={`fade-left relative z-20 mx-2 sm:mx-4 md:-mr-8 lg:-mr-10 md:-mt-5 lg:-mt-13 flex flex-col items-start justify-center ${mounted ? 'in' : ''}`}
          style={{ transitionDelay: '0.05s' }}
        >
          <span className="mb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-[0.08em] uppercase text-black">
            I&apos;m
          </span>
          <h1 className="text-[clamp(2.2rem,7vw,8.8rem)] font-black uppercase tracking-[-0.04em] leading-none text-black">
            WEBSITE
          </h1>
        </div>

        {/* ── CENTER — profile image with beam ── */}
        <div
          className={`scale-in relative z-10 shrink-0 ${mounted ? 'in' : ''}`}
          style={{ transitionDelay: '0.18s' }}
        >
          {/* ── outer glow ring (pulses after beam) ── */}
          <div
            className="glow-ring absolute inset-[-6px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,244,100,0.18) 60%, transparent 100%)',
            }}
          />

          {/* ── SVG beam that travels once around the circumference ── */}
          <svg
            className="beam-ring absolute pointer-events-none"
            style={{
              top: '-10px',
              left: '-10px',
              width: 'calc(100% + 20px)',
              height: 'calc(100% + 20px)',
            }}
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="#c7f464" stopOpacity="0" />
                <stop offset="60%"  stopColor="#c7f464" stopOpacity="0.9" />
                <stop offset="80%"  stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#c7f464" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* full circle stroked with the gradient */}
            <circle
              cx="110" cy="110" r="104"
              stroke="url(#beamGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              pathLength="100"
              strokeDasharray="28 72"
            />
          </svg>

          {/* ── actual profile image ── */}
          <img
            src={profileImage}
            alt="profile"
            className="h-[13rem] w-[13rem] sm:h-[15rem] sm:w-[15rem] md:h-[18rem] md:w-[18rem] lg:h-[22rem] lg:w-[22rem] object-contain rounded-full"
          />

          {/* ── wave / hi badge ── */}
          <div className="absolute left-2 bottom-2 sm:left-3 sm:bottom-3 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#c7f464] shadow-lg flex items-center justify-center">
            {showWave ? (
              <Hand className="w-8 h-8 text-black wave-animate" />
            ) : (
              <span className="text-2xl sm:text-3xl font-medium text-black">Hi</span>
            )}
          </div>
        </div>

        {/* ── RIGHT — "DEVELOPER" ── */}
        <h1
          className={`fade-right relative z-20 mx-2 sm:mx-4 md:-ml-8 lg:-ml-10 md:-mt-1 lg:-mt-2 text-center text-[clamp(2.2rem,7vw,8.8rem)] font-black uppercase tracking-[-0.02em] leading-none text-slate-950 bg-gradient-to-r from-slate-900 via-slate-900 to-gray-500 bg-clip-text text-transparent ${mounted ? 'in' : ''}`}
          style={{ transitionDelay: '0.05s' }}
        >
          DEVELOPER
        </h1>
      </div>

      {/* ── tagline ── */}
      <div className="w-full flex justify-center mt-6 px-4">
        <p
          className={`fade-up max-w-3xl text-center mt-7 px-5 py-3 rounded-full border border-black/5 text-black font-bold text-sm sm:text-base md:text-lg leading-relaxed tracking-[-0.02em] ${mounted ? 'in' : ''}`}
          style={{ transitionDelay: '0.32s' }}
        >
          Building modern web experiences with{' '}
          <span className="bg-gradient-to-r from-black via-black to-gray-500 bg-clip-text text-transparent">
            full-stack and AI technologies
          </span>
          .
        </p>
      </div>

      {/* ── CTA button ── */}
      <div className="w-full flex justify-center mt-10">
        
        <a href="#contact"
          className={`fade-up group inline-flex items-center justify-center gap-3 whitespace-nowrap border-2 border-black bg-[#c7f464] px-7 py-3.5 font-black text-black text-sm sm:text-base tracking-[0.12em] uppercase transition-all duration-200 hover:bg-black hover:text-[#d4f705] hover:border-black rounded-full ${mounted ? 'in' : ''}`}
          style={{ transitionDelay: '0.44s' }}
        >
          <span>Contact with me</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
};

export default Home;