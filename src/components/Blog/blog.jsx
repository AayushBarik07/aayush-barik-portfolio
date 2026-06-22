import React from 'react';
import { motion } from 'framer-motion';

const blog = () => {
  const points = [
    "Who Aayush Barik is",
    "What he is building",
    "What he is learning",
    "How active he is in tech",
    "His achievements",
    "His growth mindset",
    "His community participation",
    "His technical expertise"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] bg-[#f4f1ea] dark:bg-[#13221c] flex flex-col items-center justify-center overflow-hidden px-6 py-20 mt-16 transition-colors duration-300">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        
        {/* Soft glowing orbs */}
        <div className="absolute left-[-10rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#D6B05E]/10 blur-[100px] dark:bg-[#D6B05E]/5" />
        <div className="absolute right-[-10rem] bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-300/20 blur-[100px] dark:bg-cyan-900/10" />
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6B05E]/60 bg-white/70 dark:bg-slate-800/70 px-4 py-1.5 shadow-sm backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[#D6B05E] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 font-mono">
            In Development
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tight text-[#13221c] dark:text-[#f4f1ea] leading-[1.05] mb-6"
        >
          Blog page, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6B05E] via-amber-500 to-amber-700 dark:to-amber-400">
            Coming soon!
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-xl font-semibold text-slate-600 dark:text-slate-300 mb-10 max-w-xl leading-relaxed"
        >
          A place where recruiters can instantly understand:
        </motion.p>

        {/* Dynamic Text Pills */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap justify-center gap-3 md:gap-4 w-full px-2"
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-5 py-3 md:px-6 md:py-3.5 rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md shadow-sm transition-all hover:border-[#D6B05E]/50 dark:hover:border-[#D6B05E]/50 hover:shadow-md cursor-default"
            >
              <span className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#13221c] dark:group-hover:text-[#D6B05E] transition-colors">
                {point}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#D6B05E]/50 to-transparent" />
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              Prepare to be amazed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default blog;
