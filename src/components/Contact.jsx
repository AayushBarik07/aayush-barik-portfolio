import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaArrowRight,
  FaPaperPlane,
  FaEnvelope,
  FaLocationDot,
  FaClock,
} from 'react-icons/fa6';
import AIChar from '../assets/AIChar.png';

/* ── shared style tokens ── */
const thinBorder = 'border border-white/30';
const glass = 'bg-white/20 backdrop-blur-xl backdrop-saturate-150';
const glassInner = 'bg-white/30 backdrop-blur-md';

/* ── social links ── */
const socials = [
  {
    name: 'GitHub',
    handle: '@aayushbarik',
    href: 'https://github.com/aayushbarik',
    icon: FaGithub,
    pill: 'border-white/30 text-slate-800 bg-white/20 hover:bg-white/40',
    dot: 'bg-slate-700',
  },
  {
    name: 'Twitter / X',
    handle: '@aayushbarik',
    href: 'https://twitter.com/aayushbarik',
    icon: FaXTwitter,
    pill: 'border-white/30 text-slate-900 bg-white/20 hover:bg-white/40',
    dot: 'bg-slate-900',
  },
  {
    name: 'LinkedIn',
    handle: 'Aayush Barik',
    href: 'https://linkedin.com/in/aayushbarik',
    icon: FaLinkedin,
    pill: 'border-blue-200/40 text-blue-700 bg-blue-50/20 hover:bg-blue-50/40',
    dot: 'bg-blue-600',
  },
];

/* ── info rows on the left panel ── */
const info = [
  { icon: FaEnvelope, label: 'EMAIL', value: 'superbsup45@example.com' },
  { icon: FaLocationDot, label: 'LOCATION', value: 'India' },
  // { icon: FaClock, label: 'RESPONSE TIME', value: '~24 hours · Mon–Fri' },
];

/* ── stagger variants ── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    /* Replace with your actual email API / EmailJS call */
    await new Promise((r) => setTimeout(r, 1400));
    setSent(true);
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#f4f1ea] text-slate-900 scroll-mt-24"
    >
      {/* ── background decorations (mirrors AboutMe) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] bottom-[6rem] h-[20rem] w-[20rem] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-[4rem] h-[14rem] w-[14rem] rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute left-[40%] top-[30%] h-[16rem] w-[16rem] rounded-full bg-indigo-200/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,24,39,0.035)_1px,transparent_1px)] bg-[size:68px_68px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 lg:px-0 lg:py-14">

        {/* ── Section heading ── */}
        <div className="mb-10 flex justify-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center text-[clamp(3.4rem,10vw,7.8rem)] font-black uppercase tracking-[-0.06em] leading-none bg-gradient-to-r from-slate-900 via-slate-900 to-gray-400 bg-clip-text text-transparent"
          >
            CONTACT ME
          </motion.h1>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-stretch">

          {/* ══════════════════ LEFT PANEL ══════════════════ */}
          <motion.aside
            variants={container}
            initial="hidden"
            animate="show"
            className="h-full"
          >
            <motion.div
              variants={fadeUp}
              className={`relative overflow-hidden rounded-3xl ${thinBorder} ${glass} shadow-lg shadow-black/5 h-full flex flex-col`}
            >
              {/* glass inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-cyan-100/10 pointer-events-none rounded-3xl" />
              {/* top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

              {/* ── Character image ── */}
              <div className="relative flex items-end justify-center pt-6 px-6">
                <motion.img
                  src={AIChar}
                  alt="Aayush Barik"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full max-w-[200px] h-auto object-contain mix-blend-multiply drop-shadow-md"
                />
              </div>

              {/* ── Name + title ── */}
              <div className="relative px-5 pt-3 pb-4 text-center">
                <p className="text-lg font-black tracking-tight text-slate-900">Aayush Barik</p>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 mt-0.5">
                  Web Developer · <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Open to work</span>
                </p>
              </div>

              {/* ── divider ── */}
              <div className="mx-5 border-t border-white/40" />

              {/* ── Info rows ── */}
              <div className="relative px-5 py-4 space-y-3.5">
                {info.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className={`mt-0.5 rounded-xl border border-cyan-200/50 ${glassInner} p-2 text-cyan-600 shrink-0`}>
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
                      <p className="mt-0.5 text-sm font-semibold text-slate-900">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── divider ── */}
              <div className="mx-5 border-t border-white/40" />

              {/* ── Social links ── */}
              <div className="relative px-5 py-4 flex-1">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Elsewhere
                </p>
                <div className="space-y-2">
                  {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4, scale: 1.01 }}
                        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                        className={`flex items-center gap-3 rounded-2xl border px-3.5 py-2.5 transition-all duration-200 backdrop-blur-sm hover:border-cyan-300/50 ${s.pill}`}
                      >
                        <span className={`h-2 w-2 rounded-full ${s.dot} shrink-0`} />
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="flex-1 text-sm font-semibold">{s.name}</span>
                        <span className="text-xs text-slate-400">{s.handle}</span>
                        <FaArrowRight className="h-3 w-3 text-slate-300" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.aside>

          {/* ══════════════════ RIGHT PANEL — FORM ══════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
            className={`relative overflow-hidden rounded-3xl ${thinBorder} ${glass} shadow-lg shadow-black/5 p-6 sm:p-8 h-full flex flex-col`}
          >
            {/* glass inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-sky-100/10 pointer-events-none rounded-3xl" />
            {/* top edge highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="relative mb-6">
              <h2 className="text-2xl font-black tracking-tight text-slate-900">
                Send a Message
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Got a project in mind, or just want to say hello? I'd love to hear from you.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {sent ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex flex-col items-center justify-center gap-4 py-16 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={`flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/50 ${glassInner}`}
                  >
                    <FaPaperPlane className="h-6 w-6 text-cyan-600" />
                  </motion.div>
                  <div>
                    <p className="text-xl font-black text-slate-900">Message sent!</p>
                    <p className="mt-1 text-sm text-slate-500">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                    className="mt-2 text-xs font-semibold text-cyan-600 underline underline-offset-4 hover:text-cyan-800 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative space-y-5"
                >
                  {/* Name + Email row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Name <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Aayush Barik"
                        className="w-full rounded-2xl border border-white/40 bg-white/30 backdrop-blur-sm px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-cyan-400/60 focus:bg-white/50 focus:ring-2 focus:ring-cyan-100/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Email <span className="text-cyan-500">*</span>
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full rounded-2xl border border-white/40 bg-white/30 backdrop-blur-sm px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-cyan-400/60 focus:bg-white/50 focus:ring-2 focus:ring-cyan-100/50"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Message <span className="text-cyan-500">*</span>
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={12}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, idea, or just say hello…"
                      className="w-full resize-none rounded-2xl border border-white/40 bg-white/30 backdrop-blur-sm px-4 py-3 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-cyan-400/60 focus:bg-white/50 focus:ring-2 focus:ring-cyan-100/50"
                    />
                  </div>

                  {/* Footer row */}
                  <div className="flex flex-wrap items-center justify-end gap-4 pt-1">
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: 1.03, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                      className="inline-flex items-center gap-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-sm px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-cyan-600/90 hover:shadow-cyan-200/40 disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="h-3.5 w-3.5" />
                          Send Message
                          <FaArrowRight className="h-3 w-3" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;