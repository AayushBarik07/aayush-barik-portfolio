import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { FaArrowRight, FaBriefcase, FaCode, FaLinkedin, FaGithub, FaLaptopCode, FaXTwitter, FaRocket, FaUsers } from 'react-icons/fa6';
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import AIChar from '../assets/AIChar.png';

const thinBorder = 'border border-gray-200/60';

const socials = [
  {
    name: 'LinkedIn',
    handle: '@aayushbarik',
    href: 'https://www.linkedin.com/in/aayush-barik-49882b247/',
    icon: FaLinkedin,
    color: 'text-slate-900',
    border: 'border-gray-300',
    bg: 'bg-gray-50',
  },
  {
    name: 'GitHub',
    handle: '@aayushbarik',
    href: 'https://github.com/AayushBarik07',
    icon: FaGithub,
    color: 'text-slate-800',
    border: 'border-gray-300',
    bg: 'bg-gray-50',
  },
  {
    name: 'Twitter / X',
    handle: '@aayushbarik',
    href: 'https://x.com/aayush_barik',
    icon: FaXTwitter,
    color: 'text-slate-900',
    border: 'border-gray-300',
    bg: 'bg-gray-50',
  },
];

const stats = [
  { label: 'Projects Completed', value: 10, suffix: '+' },
  { label: 'Internships', value: 2, suffix: '' },
  { label: 'DSA Problems Solved', value: 500, suffix: '+' },
  { label: 'Applications Deployed', value: 3, suffix: '+' },
];

const phrases = [
  'Building scalable web applications',
  'Creating AI-powered products',
  'Turning ideas into real-world solutions',
];

const stackGroups = [
  {
    title: 'Frontend',
    icon: SiReact,
    accent: 'from-cyan-50 to-sky-50',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    title: 'Backend',
    icon: SiNodedotjs,
    accent: 'from-emerald-50 to-teal-50',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FaCode },
    ],
  },
  {
    title: 'Database',
    icon: SiMongodb,
    accent: 'from-amber-50 to-orange-50',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    title: 'AI & Tools',
    icon: SiOpenai,
    accent: 'from-fuchsia-50 to-cyan-50',
    items: [
      { name: 'OpenAI APIs', icon: SiOpenai },
      { name: 'RAG Systems', icon: FaRocket },
      { name: 'Git & GitHub', icon: FaGithub },
    ],
  },
];

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Bluestock',
    year: 'Feb. 2025 - Mar. 2025',
    icon: FaBriefcase,
  },
  {
    role: 'Software Developer Intern',
    company: 'YugaYatra Retail OPC Pvt Ltd',
    year: 'Jan. 2026 - Mar. 2026',
    icon: FaLaptopCode,
  },
  {
    role: 'President - Techwiz',
    company: 'SRM Institute of Science and Technology',
    year: 'Aug. 2023 – Mar. 2025',
    icon: FaUsers,
  },
];

function CountUp({ end, suffix = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!inView) return undefined;
    let frameId;
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(end * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [end, inView]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function TypingLine() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="min-h-10 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={phrases[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="text-sm sm:text-base font-medium text-slate-600"
        >
          {phrases[index]}
          <span className="ml-1 inline-block h-5 w-[2px] translate-y-[2px] animate-pulse bg-cyan-500" />
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function StackCard({ item }) {
  const Icon = item.icon;
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group rounded-2xl ${thinBorder} bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:border-cyan-300/70`}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-gray-200/60 bg-slate-50 p-2 text-slate-900 transition-colors duration-300 group-hover:border-cyan-200/70 group-hover:bg-cyan-50 group-hover:text-cyan-700">
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1 flex items-center gap-2 overflow-hidden">
          <h4 className="shrink-0 whitespace-nowrap text-sm font-semibold text-slate-900">{item.name}</h4>
          <p className="min-w-0 truncate text-xs leading-5 text-slate-500">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ item, isLast }) {
  const Icon = item.icon;
  return (
    <motion.div className="relative w-full pl-10">
      <span className="absolute left-[0.58rem] top-5 h-full w-px bg-gradient-to-b from-cyan-300 via-gray-200 to-transparent" />
      <span className="absolute left-0 top-4 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-200/60 bg-white shadow-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
      </span>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        style={{ transformOrigin: 'left center' }}
        className={`w-full rounded-2xl ${thinBorder} bg-white p-5 shadow-sm transition-all duration-300 hover:border-cyan-300/70`}
      >
        <div className="flex items-start gap-3">
          <div className="rounded-xl border border-cyan-100/60 bg-cyan-50 p-2 text-cyan-600">
            <Icon className="h-4 w-4" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-900">{item.role}</h4>
              <span className="whitespace-nowrap rounded-full border border-gray-200/60 bg-gray-50 px-3 py-1 text-[11px] font-medium text-slate-500">
                {item.year}
              </span>
            </div>
            <p className="text-xs font-medium text-cyan-700">{item.company}</p>
            <p className="text-xs leading-5 text-slate-500">{item.description}</p>
          </div>
        </div>
      </motion.div>
      {!isLast ? <span className="absolute left-[0.58rem] bottom-0 h-5 w-px bg-transparent" /> : null}
    </motion.div>
  );
}

const AboutMe = () => {
  const marqueeItems = useMemo(
    () => ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'AI', 'OpenAI', 'Express.js'],
    []
  );

  return (
    <section className="relative isolate overflow-hidden bg-[#f4f1ea] text-slate-900 scroll-mt-24" id="about">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8rem] top-[8rem] h-[18rem] w-[18rem] rounded-full bg-sky-300/12 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-3 py-4 sm:px-4 lg:px-0 lg:py-6 mt-10">
        <div className="mb-6 flex justify-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center text-[clamp(3.4rem,10vw,7.8rem)] font-black uppercase tracking-[-0.06em] leading-none text-slate-950 bg-gradient-to-r from-slate-900 via-slate-900 to-gray-500 bg-clip-text text-transparent"
          >
            ABOUT ME
          </motion.h1>
        </div>

        {/* ✅ KEY CHANGE: grid container needs a defined height so sticky works */}
        <div className="grid gap-4 lg:grid-cols-[300px_minmax(0,1.12fr)_300px] lg:items-start mt-10">

          {/* LEFT ASIDE — scrolls normally */}
          <aside id="skills" className="order-2 space-y-4 lg:order-1 lg:justify-self-start lg:-ml-3 lg:w-full lg:max-w-[320px] scroll-mt-24">
            <div className="relative shadow-sm p-3.5 backdrop-blur">
              <div className="mb-4 flex items-center justify-between gap-3">
                <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900">My Stack</h2>
                <FaCode className="h-4 w-4 text-cyan-500" />
              </div>
              <div className="space-y-2.5">
                {stackGroups.map((group) => {
                  const GroupIcon = group.icon;
                  return (
                    <motion.div
                      key={group.title}
                      whileHover={{ y: -2 }}
                      className={`rounded-2xl ${thinBorder} bg-gradient-to-br ${group.accent} p-3 shadow-sm`}
                    >
                      <div className="mb-2.5 flex items-center gap-2.5">
                        <div className="rounded-xl border border-white/40 bg-white/80 p-1.5 text-slate-900 shadow-sm">
                          <GroupIcon className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-3">
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;
                          let colorClasses = 'border-cyan-300 text-cyan-700';
                          if (group.title === 'Backend') colorClasses = 'border-emerald-300 text-emerald-700';
                          if (group.title === 'Database') colorClasses = 'border-amber-400 text-amber-800';
                          if (group.title === 'AI & Tools') colorClasses = 'border-fuchsia-400 text-fuchsia-700';
                          return (
                            <span
                              key={item.name}
                              className={`inline-flex items-center gap-3 rounded-full border px-3 py-1 text-sm font-medium ${colorClasses} bg-white/5`}
                            >
                              <span className="inline-flex items-center justify-center rounded-full bg-white/10 p-1">
                                <ItemIcon className="h-4 w-4" />
                              </span>
                              <span className="whitespace-nowrap">{item.name}</span>
                            </span>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ✅ MIDDLE — sticky, stays in viewport while sides scroll */}
          <main className="order-1 lg:order-2 lg:sticky lg:top-6 lg:self-start">
            <div className="relative overflow-hidden p-5 backdrop-blur sm:p-6">
              <div className="relative flex flex-col items-center text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="mt-4 text-[clamp(3.5rem,8vw,6.25rem)] leading-none font-black tracking-tight text-slate-900"
                >
                  Aayush Barik
                </motion.h1>

                <p className="mt-3 text-base sm:text-lg font-semibold uppercase tracking-[0.26em] text-slate-500">
                  Web Developer
                </p>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-0 top-20 z-10 inline-flex sm:right-6 sm:top-24 lg:right-7 lg:top-28 mt-43"
                >
                  <div className="relative rounded-full bg-neutral-100 px-2.5 py-1 shadow-sm sm:px-3.5 sm:py-1.5">
                    <span className="text-[0.72rem] font-extrabold uppercase tracking-tight text-black sm:text-sm lg:text-base">
                      Let Me Introduce Myself
                    </span>
                    <span className="absolute bottom-0 left-1/4 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-neutral-100 sm:h-2.5 sm:w-2.5" />
                  </div>
                </motion.div>

                <div className="relative mt-6 flex items-center mt-10 justify-center">
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
                    className="relative"
                  >
                    <div className="absolute inset-x-10 bottom-0 h-6 rounded-full bg-slate-900/10 blur-2xl" />
                    <div className="relative rounded-full bg-transparent p-0 w-full max-w-[28rem] sm:max-w-[32rem] lg:max-w-[40rem] overflow-hidden">
                      <img
                        src={AIChar}
                        alt="Aayush Barik"
                        className="w-full h-auto max-h-[60vh] object-contain mix-blend-multiply"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </main>

          {/* RIGHT ASIDE — scrolls normally */}
          {/* RIGHT ASIDE — scrolls normally */}
<aside className="order-3 space-y-4 lg:order-3 lg:justify-self-end lg:mr-[-1rem] lg:w-full lg:max-w-[320px]">

  {/* Experience — unchanged */}
  <div className="relative p-3.5 shadow-sm backdrop-blur">
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900">My Experience</h2>
      <FaBriefcase className="h-4 w-4 text-cyan-500" />
    </div>
    <div className="space-y-3">
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={`${experience.company}-${experience.year}`}
          item={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  </div>

  {/* ✅ NEW — Social Media section, same card style */}
  <div className="relative p-3.5 shadow-sm backdrop-blur">
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="mt-1 text-xl font-black tracking-tight text-slate-900">Find Me On</h2>
      <FaUsers className="h-4 w-4 text-cyan-500" />
    </div>
    <div className="space-y-3">
      {socials.map((social) => {
        const SocialIcon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`flex items-center gap-3 rounded-2xl ${thinBorder} bg-white p-4 shadow-sm transition-all duration-300 hover:border-cyan-300/70`}
          >
            <div className={`rounded-xl border ${social.border} ${social.bg} p-2 ${social.color}`}>
              <SocialIcon className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{social.name}</p>
              <p className="text-xs text-slate-500">{social.handle}</p>
            </div>
            <FaArrowRight className="ml-auto h-3 w-3 text-slate-300" />
          </motion.a>
        );
      })}
    </div>
  </div>

</aside>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;