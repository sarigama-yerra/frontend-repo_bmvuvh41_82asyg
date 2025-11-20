import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          About me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-[#94A3B8]"
        >
          I’m a frontend engineer focused on building fast, accessible interfaces with a touch of delight. My stack centers on React, TypeScript, Tailwind, and motion. I care about design systems, micro-interactions, and performance budgets.
        </motion.p>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {[
            { k: 'Experience', v: '5+ years' },
            { k: 'Location', v: 'Remote • Anywhere' },
            { k: 'Specialty', v: 'React / Motion / 3D' },
            { k: 'Currently', v: 'Open to opportunities' },
          ].map((item) => (
            <motion.div
              key={item.k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-teal-300 text-sm">{item.k}</div>
              <div className="text-white font-semibold mt-1">{item.v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
