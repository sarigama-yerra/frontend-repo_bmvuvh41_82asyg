import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const ry = (px - 0.5) * 18 // yaw
    const rx = -(py - 0.5) * 18 // pitch
    setTilt({ rx, ry })
  }

  const resetTilt = () => setTilt({ rx: 0, ry: 0 })

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0f172a]">
      {/* Soft gradients + glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(94,234,212,0.35), transparent 60%)'
        }} />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full blur-3xl opacity-20" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.35), transparent 60%)'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_80%_-10%,rgba(94,234,212,0.10),transparent),radial-gradient(700px_400px_at_10%_110%,rgba(56,189,248,0.10),transparent)]" />
      </div>

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

          {/* Interactive spherical portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="justify-self-center"
          >
            <div
              className="relative group"
              onMouseMove={handleMove}
              onMouseLeave={resetTilt}
              style={{ perspective: 900 }}
            >
              <motion.div
                style={{
                  transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
                }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-teal-400/30 shadow-[0_10px_80px_rgba(94,234,212,0.25)]"
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
                {/* subtle highlight sweep */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* Orbiting accent ring */}
              <motion.div
                aria-hidden
                className="absolute inset-0 -z-10 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              >
                <div className="h-[calc(100%+36px)] w-[calc(100%+36px)] rounded-full border border-teal-300/20" />
              </motion.div>
            </div>
            <p className="mt-5 text-center text-sm text-[#94A3B8]">Thoughtful UI with motion and craft</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
