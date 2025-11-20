import { useState } from 'react'
import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react'

export default function Footer() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')

    // Mock submit for now
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('sent')
    e.currentTarget.reset()
    setTimeout(() => setStatus('idle'), 2500)
  }

  return (
    <footer id="contact" className="border-t border-white/5 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* CTA + Socials */}
          <div>
            <p className="text-slate-400">Let’s connect</p>
            <p className="text-[#94A3B8] text-sm">Open to freelance and full-time roles</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300" aria-label="GitHub"><Github /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:hello@example.com" className="text-slate-400 hover:text-teal-300" aria-label="Email"><Mail /></a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300" aria-label="Twitter"><Twitter /></a>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white text-xl font-semibold">Send a message</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400">Name</label>
                <input id="name" name="name" required className="mt-1 w-full rounded-lg bg-[#0b1329] border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-400">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg bg-[#0b1329] border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm text-slate-400">Message</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-lg bg-[#0b1329] border border-white/10 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400/40" placeholder="Tell me about your project..."/>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-400/20 text-teal-300 border border-teal-400/30 hover:bg-teal-400/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={18} />
                {status === 'loading' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send message'}
              </button>
            </div>
          </form>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Alex Parker. All rights reserved.</div>
      </div>
    </footer>
  )
}
