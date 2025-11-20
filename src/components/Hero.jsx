import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0f172a]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/10 via-[#0f172a]/40 to-[#0f172a] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <p className="uppercase tracking-widest text-xs text-teal-300/80 mb-3">Frontend Engineer</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              Hi, I'm <span className="text-teal-300 drop-shadow-[0_0_12px_rgba(94,234,212,0.35)]">Alex Parker</span>
            </h1>
            <p className="mt-5 text-[#94A3B8] max-w-xl">
              I craft responsive, accessible, and delightful web experiences with React, TypeScript, and modern CSS. I love interactions that feel alive.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#projects" className="px-5 py-2.5 rounded-lg bg-teal-400/20 text-teal-300 border border-teal-400/30 hover:bg-teal-400/30 transition-colors">View Projects</a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/5 text-slate-300 border border-white/10 hover:border-teal-400/40 hover:text-teal-200 transition-colors">Get in touch</a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="justify-self-center"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden ring-2 ring-teal-400/40 shadow-[0_10px_60px_rgba(94,234,212,0.2)]">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Portrait" className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-center text-sm text-[#94A3B8]">Building smooth UI with motion and 3D</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
