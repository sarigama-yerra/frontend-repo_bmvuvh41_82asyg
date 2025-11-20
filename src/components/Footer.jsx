import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-slate-400">Let’s connect</p>
            <p className="text-[#94A3B8] text-sm">Open to freelance and full-time roles</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300" aria-label="GitHub"><Github /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300" aria-label="LinkedIn"><Linkedin /></a>
            <a href="mailto:hello@example.com" className="text-slate-400 hover:text-teal-300" aria-label="Email"><Mail /></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300" aria-label="Twitter"><Twitter /></a>
          </div>
        </div>
        <div className="pt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Alex Parker. All rights reserved.</div>
      </div>
    </footer>
  )
}
