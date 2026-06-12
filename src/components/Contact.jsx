import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaArrowRight,
  FaPaperPlane,
  FaEnvelope,
  FaLocationDot,
} from 'react-icons/fa6';
import AIChar_2_removebg from '../assets/AIChar_2-removebg.png';

const thinBorder = 'border border-white/30';
const glass = 'bg-white/20 backdrop-blur-xl backdrop-saturate-150';

const socials = [
  {
    name: 'GitHub',
    handle: '@aayushbarik',
    href: 'https://github.com/AayushBarik07',
    icon: FaGithub,
    dot: 'bg-slate-700',
  },
  {
    name: 'LinkedIn',
    handle: 'Aayush Barik',
    href: 'https://www.linkedin.com/in/aayush-barik-49882b247/',
    icon: FaLinkedin,
    dot: 'bg-blue-600',
  },
  {
    name: 'Twitter / X',
    handle: '@aayushbarik',
    href: 'https://x.com/aayush_barik',
    icon: FaXTwitter,
    dot: 'bg-black',
  },
];

const info = [
  { icon: FaLocationDot, label: 'Location', value: 'India' },
  { icon: FaEnvelope, label: 'Email', value: 'superbsup45@example.com' },
];

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
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await emailjs.send(
        'service_wgo8wec',
        'template_zudlrrh',
        { from_name: form.name, from_email: form.email, message: form.message },
        'va0_xXIbVC3vM64Tl'
      );
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // ✅ FIX 1: Removed h-screen and overflow-hidden — let content breathe
    <section
      id="contact"
      className="relative min-h-screen bg-[#f4f1ea] py-16 pb-24"
    >
      {/* ── Background decorations ── */}
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

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ── Section heading ── */}
        {/* ✅ FIX 2: Removed the duplicate nested h1/motion.h1, clean single heading block */}
        <div className="mb-12 text-center">
          <p className="text-[#D6B05E] uppercase tracking-[4px] text-xs font-bold mb-3">
            CONTACT
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-[clamp(3.5rem,10vw,7rem)] font-black uppercase leading-none text-[#13221c]"
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="max-w-xl mx-auto mt-4 text-slate-500 text-base"
          >
            Got a project in mind, want to collaborate, or just want to say hello?
            I'm currently open to work and would love to hear from you.
          </motion.p>
        </div>

        {/* ── Two-column layout ── */}
        {/* ✅ FIX 3: Removed h-[75vh] and items-stretch that clipped content */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 items-start">

          {/* ══ LEFT PANEL ══ */}
          <motion.aside variants={container} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              className={`relative overflow-hidden rounded-3xl ${thinBorder} ${glass} shadow-lg shadow-black/5 flex flex-col`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-cyan-100/10 pointer-events-none rounded-3xl" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

              {/* Character image */}
              <div className="flex items-end justify-center pt-8 px-6">
                <motion.img
                  src={AIChar_2_removebg}
                  alt="Aayush Barik"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-full max-w-[200px] h-auto object-contain mix-blend-multiply drop-shadow-md"
                />
              </div>

              {/* Name + title */}
              <div className="relative px-5 pt-3 pb-4 text-center">
                <h3 className="text-3xl font-black text-[#13221c]">Aayush Barik</h3>
                <p className="mt-2 uppercase tracking-[4px] text-sm text-slate-400">
                  WEB DEVELOPER <span className="mx-2">•</span>
                  <span className="text-blue-500">OPEN TO WORK</span>
                </p>
              </div>

              <div className="mx-5 border-t border-white/40" />

              {/* Info rows */}
              <div className="grid grid-cols-2 gap-3 p-5">
                {info.map(({ icon: Icon, label, value }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    // ✅ FIX: Email card spans full width so the value isn't truncated
                    className={`group rounded-2xl border border-black/5 bg-white/30 backdrop-blur-sm px-4 py-4 transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:shadow-black/5 ${
                      label === 'Email' ? 'col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D6B05E]/40 bg-white/40 text-[#D6B05E] transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</p>
                        {/* ✅ FIX: Removed truncate, allow text to wrap naturally */}
                        <p className="mt-0.5 text-sm font-semibold text-[#1E2A44] break-all">{value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mx-5 border-t border-white/40" />

              {/* Social links */}
              <div className="px-5 py-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-[#D6B05E]" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Elsewhere</p>
                </div>
                <div className="space-y-3">
                  {socials.map((s, index) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ x: 8, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="group flex items-center gap-4 rounded-2xl border border-white/40 bg-white/30 px-4 py-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/50 hover:shadow-lg hover:shadow-black/5"
                      >
                        <span className={`h-2.5 w-2.5 rounded-full ${s.dot} shrink-0`} />
                        <Icon className="h-5 w-5 text-slate-700 shrink-0" />
                        <span className="flex-1 text-[15px] font-semibold text-slate-800">{s.name}</span>
                        <span className="hidden sm:block text-sm text-slate-400">{s.handle}</span>
                        <FaArrowRight className="h-3.5 w-3.5 text-slate-300" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.aside>

          {/* ══ RIGHT PANEL — FORM ══ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[40px] border border-black/5 bg-white/25 backdrop-blur-md p-8 shadow-xl shadow-black/5"
          >
            {/* Gold Spiral Decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="absolute -right-10 -top-10 w-[500px] h-[500px] opacity-40" viewBox="0 0 500 500" fill="none">
                <path d="M250 250C320 250 380 200 380 130C380 60 320 20 250 20C180 20 120 70 120 140C120 210 180 250 250 250Z" stroke="#D6B05E" strokeWidth="1" />
                <path d="M250 250C340 250 420 180 420 90C420 0 340 -70 250 -70C160 -70 80 0 80 90C80 180 160 250 250 250Z" stroke="#D6B05E" strokeWidth="1" />
                <path d="M250 250C370 250 470 160 470 40C470 -80 370 -170 250 -170C130 -170 30 -80 30 40C30 160 130 250 250 250Z" stroke="#D6B05E" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="mb-8">
                <p className="text-[#D6B05E] uppercase tracking-[4px] text-xb text-4xl font-bold mb-3">LET'S CONNECT</p>
                {/* <h2 className="text-4xl font-black text-[#1E2A44] leading-none">LET'S CONNECT</h2> */}
                <p className="mt-4 text-slate-500 max-w-lg">
                  Have an idea, project, opportunity, or just want to say hello? I'd love to hear from you.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center gap-5 py-20 text-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 0.8 }}
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1E2A44] text-white"
                    >
                      <FaPaperPlane className="h-7 w-7" />
                    </motion.div>
                    <div>
                      <p className="text-2xl font-black text-[#1E2A44]">Message Sent!</p>
                      <p className="mt-2 text-slate-500">Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                    <button
                      onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                      className="mt-3 text-sm font-semibold text-[#D6B05E] hover:text-[#1E2A44] transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {error && (
                      <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
                    )}

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Name</label>
                        <input
                          required name="name" type="text" value={form.name} onChange={handleChange}
                          placeholder="Aayush Barik"
                          className="w-full rounded-2xl border border-black/5 bg-white/50 px-5 py-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-[#D6B05E] focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Email</label>
                        <input
                          required name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full rounded-2xl border border-black/5 bg-white/50 px-5 py-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-[#D6B05E] focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">Message</label>
                      <textarea
                        required name="message" rows={7} value={form.message} onChange={handleChange}
                        placeholder="Tell me about your project, idea, or just say hello..."
                        className="w-full resize-none rounded-2xl border border-black/5 bg-white/50 px-5 py-4 text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-[#D6B05E] focus:bg-white"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ y: -3, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative overflow-hidden inline-flex items-center gap-3 rounded-[22px] px-8 py-4 text-sm font-semibold text-white cursor-pointer transition-all duration-300 bg-gradient-to-b
                          from-[#294239]
                          via-[#1d322a]
                          to-[#13221c]

                          shadow-[0_12px_24px_rgba(0,0,0,0.35),inset_0_2px_2px_rgba(255,255,255,0.12),inset_0_-2px_2px_rgba(0,0,0,0.25)]

                          hover:shadow-[0_18px_35px_rgba(0,0,0,0.45),inset_0_2px_2px_rgba(255,255,255,0.15)]
                          disabled:opacity-60
                        ">
                        {/* Top glossy highlight */}
                        <span className="absolute left-2 right-2 top-1 h-[35%] rounded-full bg-white/10 blur-md" />

                        {/* Right side shine */}
                        <span className="absolute right-3 top-2 h-[70%] w-6 rounded-full bg-white/10 blur-sm" />

                        {loading ? (
                          <>
                            <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span className="relative z-10">Sending...</span>
                          </>
                        ) : (
                          <>
                            <span className="relative z-10">Send Message</span>
                            <FaArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;