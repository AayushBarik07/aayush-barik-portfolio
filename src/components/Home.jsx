import { useEffect, useState } from 'react';
import { Hand } from 'lucide-react';
import profileImage from '../assets/PFP.png';

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
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-black px-6 py-3 font-semibold text-white text-sm sm:text-base md:text-lg tracking-wide transition-colors duration-300 hover:bg-gray-800"
        >
          <span>Contact Me</span>
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="absolute h-4 w-4 rounded-full bg-cyan-400/45 blur-[6px]" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.95)]" />
          </span>
        </a>
      </div>

    </section>
  );
};

export default Home;