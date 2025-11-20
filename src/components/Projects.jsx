import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Neon UI Kit',
    date: '2024-10-12',
    image: 'https://images.unsplash.com/photo-1605455244075-3ab64033792d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZW9uJTIwVUklMjBLaXR8ZW58MHwwfHx8MTc2MzY0NzIwMHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'A modern component library built with Radix and Tailwind, featuring accessible primitives and motion-presets.'
  },
  {
    id: 2,
    title: 'Realtime Dashboard',
    date: '2024-07-03',
    image: 'https://images.unsplash.com/photo-1651760464181-49092525ca3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWFsdGltZSUyMERhc2hib2FyZHxlbnwwfDB8fHwxNzYzNjQ3MjAxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Websocket-driven analytics dashboard with chart animations and light/dark theming.'
  },
  {
    id: 3,
    title: '3D Product Gallery',
    date: '2024-03-21',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    description: 'Interactive gallery integrating Spline scenes with smooth scroll and parallax.'
  }
]

export default function Projects() {
  const [active, setActive] = useState(null)
  const [open, setOpen] = useState(false)

  const openModal = (p) => { setActive(p); setOpen(true) }

  return (
    <section id="projects" className="bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <p className="mt-2 text-[#94A3B8]">A selection of work that blends performance, polish and play.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.button
              key={p.id}
              onClick={() => openModal(p)}
              whileHover={{ y: -4 }}
              className="text-left rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-teal-400/40 focus:outline-none focus:ring-2 focus:ring-teal-400/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-teal-300 text-sm">{new Date(p.date).toLocaleDateString()}</div>
                <div className="mt-1 text-white font-semibold">{p.title}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur flex items-center justify-center px-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="max-w-3xl w-full rounded-2xl overflow-hidden border border-white/10 bg-[#0b1329]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video overflow-hidden">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-teal-300 text-sm">{new Date(active.date).toLocaleDateString()}</div>
                <h3 className="mt-1 text-white text-2xl font-bold">{active.title}</h3>
                <p className="mt-3 text-[#94A3B8]">{active.description}</p>
                <div className="mt-6 flex justify-end">
                  <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-white/5 text-slate-300 border border-white/10 hover:border-teal-400/40 hover:text-teal-200">Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
