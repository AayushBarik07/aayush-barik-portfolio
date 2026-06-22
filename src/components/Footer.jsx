import React from 'react';


const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-white py-10 px-6 md:px-12 lg:px-24 mt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Top part with 5 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 mb-16">
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-black tracking-[0.18em] uppercase text-white leading-tight mb-5">
              AAYUSH BARIK
            </h2>

            {/* <p className="text-sm tracking-[0.25em] uppercase text-gray-400 font-semibold mb-6 leading-relaxed">
              Frontend Developer • React • Next.js • TypeScript • AI
            </p> */}

            <p className="text-gray-400 text-sm leading-7">
              Building performant web applications and intuitive digital experiences
              with clean UI, scalable architecture, and modern frontend technologies.
            </p>
          </div>

          {/* Availability / CTA */}
          <div className="flex flex-col justify-end lg:justify-start max-w-md">
            <h3 className="text-white text-xl font-bold mb-4">
              Let’s Build Something Great Together.
            </h3>

            <p className="text-gray-400 text-sm leading-7 mb-6">
              Eager to contribute to forward-thinking teams by building high-quality software, solving complex problems, and delivering impactful user experiences.
            </p>

            <a
              href="#contact"
              className="w-fit px-5 py-3 rounded-full border border-white/15 text-sm font-semibold text-white hover:bg-white hover:text-black transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:justify-self-center">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              {["Home", "About", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[12px] text-gray-400 hover:text-white font-bold tracking-wider uppercase transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-12"></div>

        {/* Bottom Part */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-4">
            {/* X (Twitter) */}
            <div className="relative group">
              <a
                href="https://x.com/aayush_barik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
                aria-label="X (Twitter)"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.12-6.7L5.22 22H1.96l7.6-8.68L1.5 2h6.7l4.63 6.12L18.244 2zm-1.15 18h1.81L7.22 3.9H5.28L17.094 20z"/>
                </svg>
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                  Twitter
                </div>
              </div>
            </div>

            {/* Gmail */}
            <div className="relative group">
              <a
                href="mailto:barikaayush85@gmail.com"
                className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
                aria-label="Email"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                  Gmail
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="relative group">
              <a
                href="https://www.linkedin.com/in/aayush-barik-49882b247"
                target="_blank"
                rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.67-1.27 2.3-2.6 4.74-2.6C22 7.6 24 10.1 24 14.1V24h-5v-8.3c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-5V8z"/>
              </svg>
            </a>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                LinkedIn
              </div>
            </div>
          </div>
          <div className="relative group">
            {/* GitHub */}
            <a
              href="https://github.com/AayushBarik07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all"
              aria-label="GitHub"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.2c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.04 1.8 2.74 1.28 3.4.98.1-.76.4-1.28.73-1.58-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.3 1.2-3.1-.12-.3-.52-1.5.12-3.12 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.84 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.62.24 2.82.12 3.12.75.8 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
              </svg>
            </a>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-white text-black text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                Github
              </div>
            </div>
          </div>
          </div>
          <p className="text-[11px] text-gray-500 tracking-wide font-medium">
            &copy;Copyright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
