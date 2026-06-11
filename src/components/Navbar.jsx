import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import AIChar_2 from '../assets/AIChar_2.png';
import resumePdf from '../assets/Aayush Barik Resume.pdf.pdf';

export default function Navbar() {
  const [active, setActive] = useState('Contact');
  
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ['Home', 'About', 'Projects', 'Blogs', 'Resume/CV'];

  const sectionMap = {
    Home: 'home',
    About: 'about',
    Projects: 'projects',
    // Skills: 'skills',
    Blogs: 'blogs',
  };

  const handleNavigate = (label) => {
    setActive(label);

    if (label === 'Resume/CV') {
      window.open(resumePdf, '_blank', 'noopener,noreferrer');
      return;
    }

    const targetId = sectionMap[label];
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-3 left-1/2 z-50 transform -translate-x-1/2 w-[min(94%,900px)] max-w-2xl bg-white/95 backdrop-blur rounded-full shadow-sm px-4 py-2 flex items-center border border-gray-300 dark:border-gray/100">
      {/* Avatar with flip effect on hover */}
      <div className="relative w-11 h-11 mr-3 sm:mr-4 shrink-0 cursor-pointer [perspective:600px] group">
        
        {/* Inner flip container */}
        <div className="relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          
          {/* FRONT — AB initials */}
          <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-200 [backface-visibility:hidden]">
            <span className="text-sm font-medium text-gray-700">AB</span>
          </div>

          {/* BACK — AI Character image */}
          <div className="absolute inset-0 rounded-full overflow-hidden ring-1 ring-gray-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <img
              src={AIChar_2}
              alt="Aayush Barik"
              className="w-full h-full object-cover object-[center_15%]"
            />
          </div>

        </div>
      </div>

      {/* Center links */}
      <ul className="hidden md:flex flex-1 justify-center items-center gap-8">
        {links.map((label) => (
          <li key={label} className="relative group cursor-pointer">
            <button
              onClick={() => handleNavigate(label)}
              className={`cursor-pointer text-sm font-medium transition-colors duration-150 ${
                active === label ? 'text-gray-800' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {label}
            </button>

            {label === 'Resume/CV' ? (
              <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 translate-y-1 scale-95 rounded-full border border-white/10 bg-linear-to-b from-black to-zinc-900 px-4 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-200 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                Download
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rotate-45 border-l border-t border-white/10 bg-black" />
              </span>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Contact button */}
      <div className="hidden md:flex relative items-center cursor-pointer">
        <a href="#contact"
          onClick={() => setActive('Contact')}
          className={`cursor-pointer px-5 py-2 rounded-full text-sm font-semibold transition-shadow duration-150 ${
            active === 'Contact'
              ? 'bg-black text-white shadow-md hover:bg-indigo-500 hover:text-white hover:shadow-lg'
              : 'bg-white text-black hover:bg-black hover:text-white hover:shadow-md'
          }`}
        >
          Let's Talk
        </a>
      </div>

      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        className="ml-auto md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white text-black shadow-sm transition-transform duration-150 active:scale-95 cursor-pointer"
      >
        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <div
        className={`absolute inset-x-2 top-full mt-3 max-w-xl mx-auto md:hidden overflow-hidden rounded-[1.6rem] border border-gray-300 bg-white/95 shadow-sm backdrop-blur transition-all duration-250 ease-out ${
          menuOpen
            ? 'max-h-80 opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 pointer-events-none translate-y-2'
        }`}
      >
        <div className="flex flex-col gap-2 px-4 py-4">
          {links.map((label, index) => (
            <button
              key={label}
              onClick={() => {
                handleNavigate(label);
                setMenuOpen(false);
              }}
              style={{ transitionDelay: menuOpen ? `${index * 60}ms` : '0ms' }}
              className={`cursor-pointer rounded-full px-4 py-2 text-center text-sm font-medium transition-all duration-300 ease-out transform ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              } ${
                active === label ? 'text-gray-800 bg-gray-100' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => {
              setActive('Contact');
              setMenuOpen(false);
            }}
            style={{ transitionDelay: menuOpen ? `${links.length * 60}ms` : '0ms' }}
            className={`mt-1 cursor-pointer self-center rounded-full bg-black px-6 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 ease-out transform ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
