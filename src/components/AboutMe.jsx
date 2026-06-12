import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  FaArrowRight, FaBriefcase, FaCode, FaLinkedin, FaGithub,
  FaLaptopCode, FaXTwitter, FaRocket, FaUsers
} from 'react-icons/fa6';
import {
  SiExpress, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai,
  SiPostgresql, SiReact, SiTailwindcss, SiTypescript,
} from 'react-icons/si';
import AIChar from '../assets/AIChar.png';

const thinBorder = 'border border-gray-200/60';

const socials = [
  {
    name: 'LinkedIn', handle: '@aayushbarik',
    href: 'https://www.linkedin.com/in/aayush-barik-49882b247/',
    icon: FaLinkedin, color: 'text-slate-900', border: 'border-gray-300', bg: 'bg-gray-50',
  },
  {
    name: 'GitHub', handle: '@aayushbarik',
    href: 'https://github.com/AayushBarik07',
    icon: FaGithub, color: 'text-slate-800', border: 'border-gray-300', bg: 'bg-gray-50',
  },
  {
    name: 'Twitter / X', handle: '@aayush_barik',
    href: 'https://x.com/aayush_barik',
    icon: FaXTwitter, color: 'text-slate-900', border: 'border-gray-300', bg: 'bg-gray-50',
  },
];

const stackGroups = [
  {
    title: 'Frontend', icon: SiReact,
    accent: 'from-cyan-50 to-sky-50',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    title: 'Backend', icon: SiNodedotjs,
    accent: 'from-emerald-50 to-teal-50',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: FaCode },
    ],
  },
  {
    title: 'Database', icon: SiMongodb,
    accent: 'from-amber-50 to-orange-50',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    title: 'AI & Tools', icon: SiOpenai,
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
    year: 'Feb. 2025 – Mar. 2025',
    icon: FaBriefcase,
  },
  {
    role: 'Software Developer Intern',
    company: 'YugaYatra Retail OPC Pvt Ltd',
    year: 'Jan. 2026 – Mar. 2026',
    icon: FaLaptopCode,
  },
  {
    role: 'President — Techwiz',
    company: 'SRM Institute of Science and Technology',
    year: 'Aug. 2023 – Mar. 2025',
    icon: FaUsers,
  },
];

const phrases = [
  'Building scalable web applications',
  'Creating AI-powered products',
  'Turning ideas into real-world solutions',
];

/* ── Count-up ── */
function CountUp({ end, suffix = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  useEffect(() => {
    if (!inView) return;
    let frameId;
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(end * (1 - (1 - p) ** 3)));
      if (p < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [end, inView]);
  return <span ref={ref}>{value}{suffix}</span>;
}

/* ── Rotating tagline ── */
function TypingLine() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % phrases.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="min-h-10 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={phrases[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="text-sm sm:text-base font-medium text-slate-600 font-mono"
        >
          <span className="text-cyan-500 select-none mr-1">{'>'}</span>
          {phrases[index]}
          <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-cyan-500" />
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

/* ── Section label (code-comment style) ── */
function CodeLabel({ children }) {
  return (
    <span className="font-mono text-[11px] font-semibold tracking-widest text-slate-400 uppercase select-none">
      <span className="text-cyan-400">// </span>{children}
    </span>
  );
}

/* ── Stack card ── */
function StackCard({ item, colorClasses }) {
  const Icon = item.icon;
  return (
    <motion.span
      whileHover={{ y: -3, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 340, damping: 22 }}
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${colorClasses} bg-white/5 cursor-default`}
    >
      <span className="inline-flex items-center justify-center rounded-full bg-white/10 p-0.5">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="whitespace-nowrap">{item.name}</span>
    </motion.span>
  );
}

/* ── Experience card with timeline ── */
function ExperienceCard({ item, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = item.icon;
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      className="relative w-full pl-10"
    >
      {!isLast && (
        <span className="absolute left-[0.58rem] top-5 h-full w-px bg-gradient-to-b from-cyan-300/60 via-gray-200/40 to-transparent" />
      )}
      <span className="absolute left-0 top-4 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-200/60 bg-white shadow-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
      </span>
      <motion.div
        whileHover={{ scale: 1.04, x: 4 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className={`w-full rounded-2xl ${thinBorder} bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md hover:border-cyan-200/70`}
      >
        <div className="flex items-start gap-3">
          <div className="rounded-xl border border-cyan-100/60 bg-cyan-50 p-2 text-cyan-600 shrink-0">
            <Icon className="h-4 w-4" />
          </div>
          <div className="flex-1 space-y-1.5 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-1.5">
              <h4 className="text-sm font-bold text-slate-900 leading-tight">{item.role}</h4>
              <span className="whitespace-nowrap rounded-full border border-gray-200/60 bg-gray-50 px-2.5 py-0.5 text-[10px] font-semibold text-slate-500 font-mono shrink-0">
                {item.year}
              </span>
            </div>
            <p className="text-xs font-semibold text-cyan-700">{item.company}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Subtle animated grid background ── */
function GridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft glows */}
      <div className="absolute right-[-6rem] top-[6rem] h-[22rem] w-[22rem] rounded-full bg-sky-300/10 blur-3xl" />
      <div className="absolute left-[-4rem] bottom-[10rem] h-[16rem] w-[16rem] rounded-full bg-cyan-200/10 blur-3xl" />
      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right,rgba(17,24,39,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(17,24,39,0.04) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Dot accent top-right */}
      <div
        className="absolute top-0 right-0 w-48 h-48 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(rgba(6,182,212,0.6) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════ */
const AboutMe = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-[#f4f1ea] text-slate-900 scroll-mt-24"
      id="about"
    >
      {/* Background pattern and accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <svg className="absolute right-0 top-0 h-full w-full opacity-50" viewBox="0 0 1200 800" fill="none">
          <path d="M650 500C780 450 760 350 900 300C1040 250 1080 150 1200 120" stroke="#D6B05E" strokeWidth="2" />
          <path d="M620 550C760 500 780 390 930 340C1080 290 1120 170 1200 150" stroke="#D6B05E" strokeWidth="1.5" />
          <circle cx="1030" cy="120" r="45" stroke="#D6B05E" strokeWidth="1" />
          <circle cx="1140" cy="100" r="55" stroke="#D6B05E" strokeWidth="1" />
        </svg>
        <div className="absolute left-[-6rem] bottom-[6rem] h-[20rem] w-[20rem] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-[4rem] h-[14rem] w-[14rem] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute left-[40%] top-[30%] h-[16rem] w-[16rem] rounded-full bg-indigo-200/10 blur-3xl" />
      </div>

      <GridBackground />

      <div className="relative mx-auto max-w-[88rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-10 mt-6">

        {/* ── PAGE HEADING ── */}
        <div className="mb-2 flex flex-col items-center gap-1 overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-[clamp(3rem,9vw,7.5rem)] font-black uppercase tracking-[-0.06em] leading-none bg-gradient-to-r from-[#13221c] via-[#1d322a] to-[#73807b] bg-clip-text text-transparent"
          >
            ABOUT ME
          </motion.h1>
        </div>

        {/* ── THREE-COLUMN GRID ── */}
        <div className="grid gap-5 lg:grid-cols-[340px_minmax(0,1fr)_340px] lg:items-start mt-12">

          {/* ════ LEFT — STACK ════ */}
          <aside
            id="skills"
            className="order-2 space-y-4 lg:order-1 scroll-mt-24"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-3"
            >
              {/* Section header */}
              <motion.div variants={itemVariants} className="flex items-center justify-between px-1">
                <h2 className="text-xl font-black tracking-tight text-[#13221c]">My Stack</h2>
              </motion.div>

              {stackGroups.map((group) => {
                const GroupIcon = group.icon;
                let colorClasses = 'border-cyan-300 text-cyan-700';
                if (group.title === 'Backend') colorClasses = 'border-emerald-300 text-emerald-700';
                if (group.title === 'Database') colorClasses = 'border-amber-400 text-amber-800';
                if (group.title === 'AI & Tools') colorClasses = 'border-fuchsia-400 text-fuchsia-700';

                return (
                  <motion.div
                    key={group.title}
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                    className={`rounded-2xl ${thinBorder} bg-gradient-to-br ${group.accent} p-4 shadow-sm transition-shadow duration-300 hover:shadow-md`}
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <div className="rounded-xl border border-white/50 bg-white/80 p-1.5 text-[#13221c] shadow-sm">
                        <GroupIcon className="h-4 w-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[#13221c]">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <StackCard key={item.name} item={item} colorClasses={colorClasses} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </aside>

          {/* ════ MIDDLE — HERO (sticky) ════ */}
          <main
            ref={heroRef}
            className="order-1 lg:order-2 lg:sticky lg:top-6 lg:self-start"
          >
            <div className="relative overflow-hidden p-5 sm:p-7">
              <div className="relative flex flex-col items-center text-center">
                {/* Role badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-white/70 px-4 py-1.5 shadow-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-slate-600 font-mono">
                    Web Developer
                  </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="mb-5 text-[clamp(3rem,7.5vw,6rem)] leading-none font-black tracking-tight text-[#13221c]"
                >
                  Aayush Barik
                </motion.h1>


                {/* Floating intro bubble */}
                {/* <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-2 top-16 sm:right-8 sm:top-20 z-10"
                >
                  <div className="relative rounded-2xl bg-white border border-gray-200/60 shadow-sm px-3 py-1.5 sm:px-4 sm:py-2">
                    <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wide text-slate-800 font-mono whitespace-nowrap">
                      Let me introduce myself
                    </span>
                    <span className="absolute -bottom-1.5 left-1/4 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gray-200/60 bg-white" />
                  </div>
                </motion.div> */}

                {/* Avatar */}
                <div className="relative mt-8 flex items-center justify-center">
                  {/* Halo ring */}
                  <motion.div
                    animate={{ scale: [1, 1.04, 1], opacity: [0.25, 0.45, 0.25] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-x-4 bottom-0 h-[85%] w-full rounded-full bg-cyan-300/20 blur-2xl"
                  />
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [-1.2, 1.2, -1.2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-full max-w-[26rem] sm:max-w-[30rem] lg:max-w-[36rem]"
                  >
                    {/* ✅ Bubble lives here — always relative to the character image */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-[-3%] right-[18%] z-10"
                    >
                      <div className="relative rounded-2xl bg-white border border-gray-200/60 shadow-sm px-3 py-1.5 sm:px-4 sm:py-2">
                        <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wide text-[#13221c] font-mono whitespace-nowrap">
                          Let me introduce myself
                        </span>
                        {/* Tail points down toward the head */}
                        <span className="absolute -bottom-1.5 left-1/3 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gray-200/60 bg-white" />
                      </div>
                    </motion.div>

                    <img
                      src={AIChar}
                      alt="Aayush Barik"
                      className="w-full h-auto max-h-[58vh] object-contain mix-blend-multiply"
                    />
                  </motion.div>
                </div>

                {/* Typing line */}
                <div className="mt-4">
                  <TypingLine />
                </div>

                {/* Mini stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-5 grid grid-cols-3 divide-x divide-gray-200/60 w-full max-w-xs"
                >
                  {[
                    { label: 'Projects', value: 30, suffix: '+' },
                    { label: 'Internships', value: 3, suffix: '' },
                    { label: 'DSA Solved', value: 300, suffix: '+' },
                  ].map(({ label, value, suffix }) => (
                    <div key={label} className="flex flex-col items-center gap-0.5 py-2">
                      <span className="text-xl font-black text-slate-900 tabular-nums">
                        <CountUp end={value} suffix={suffix} />
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide font-mono">{label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </main>

          {/* ════ RIGHT — EXPERIENCE + SOCIALS ════ */}
          <aside className="order-3 space-y-4 lg:order-3">

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <h2 className="text-xl font-black tracking-tight text-[#13221c]">My Experience</h2>
              </div>
              <div className="space-y-3">
                {experiences.map((exp, i) => (
                  <ExperienceCard key={`${exp.company}-${exp.year}`} item={exp} index={i} total={experiences.length} />
                ))}
              </div>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="mb-3 flex items-center justify-between px-1">
                <h2 className="text-xl font-black tracking-tight text-[#13221c]">Find Me On</h2>
              </div>
              <div className="space-y-2.5">
                {socials.map((social, i) => {
                  const SocialIcon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.09 }}
                      whileHover={{ x: 4, scale: 1.02 }}
                      className={`flex items-center gap-3 rounded-2xl ${thinBorder} bg-white p-4 shadow-sm transition-all duration-300 hover:border-cyan-300/70 hover:shadow-md`}
                    >
                      <div className={`rounded-xl border ${social.border} ${social.bg} p-2 ${social.color} shrink-0`}>
                        <SocialIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-[#13221c]">{social.name}</p>
                        <p className="text-xs text-[#13221c] font-mono">{social.handle}</p>
                      </div>
                      <motion.span
                        whileHover={{ x: 3 }}
                        className="ml-auto text-slate-300"
                      >
                        <FaArrowRight className="h-3 w-3" />
                      </motion.span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;