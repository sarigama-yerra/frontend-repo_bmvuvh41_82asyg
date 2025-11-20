import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
  },
  {
    id: 4,
    title: 'Design System Audit',
    date: '2023-12-10',
    image: 'https://images.unsplash.com/photo-1743385779347-1549dabf1320?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEZXNpZ24lMjBTeXN0ZW0lMjBBdWRpdHxlbnwwfDB8fHwxNzYzNjUyMTgxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description: 'Accessibility and performance audit for a cross-platform design system.'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const glow = useTransform(scrollYProgress, [0, 1], [0.2, 0.55])

  return (
    <section id="projects" className="bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative" ref={ref}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Project Timeline</h2>
          <p className="mt-2 text-[#94A3B8] max-w-2xl">Milestones that showcase product thinking, delightful motion, and real-world impact.</p>

          {/* Vertical line */}
          <motion.div
            style={{ opacity: glow }}
            className="absolute left-4 sm:left-1/2 top-20 bottom-0 -translate-x-0 sm:-translate-x-1/2 w-px bg-gradient-to-b from-teal-300/60 via-teal-300/30 to-transparent"/>

          <div className="mt-12 space-y-10">
            {projects.map((p, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <TimelineItem key={p.id} project={p} align={isLeft ? 'left' : 'right'} index={idx} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ project, align, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`relative grid grid-cols-[1rem,1fr] sm:grid-cols-2 gap-6 sm:gap-10 items-stretch`}
    >
      {/* Dot */}
      <div className="relative sm:col-span-2">
        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 -top-2 h-3 w-3 rounded-full bg-teal-300 shadow-[0_0_0_6px_rgba(94,234,212,0.15)]" />
      </div>

      {/* Card */}
      <div className={`sm:col-span-2 ${align === 'left' ? 'sm:pr-[55%]' : 'sm:pl-[55%]' }`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="group relative rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-teal-400/40"
        >
          <div className="aspect-[16/9] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="p-5">
            <div className="text-teal-300 text-sm">{new Date(project.date).toLocaleDateString()}</div>
            <h3 className="mt-1 text-white text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-[#94A3B8]">{project.description}</p>
            <div className="mt-4 flex items-center gap-3">
              <button className="px-3 py-1.5 rounded-lg bg-teal-400/15 text-teal-200 border border-teal-400/30 hover:bg-teal-400/25 transition">Details</button>
              <button className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/10 hover:border-teal-400/40 hover:text-teal-200 transition">Live</button>
            </div>
          </div>

          {/* glow */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(400px_160px_at_var(--x,50%)_0%,rgba(94,234,212,0.18),transparent)]" />
        </motion.div>
      </div>
    </motion.div>
  )
}
