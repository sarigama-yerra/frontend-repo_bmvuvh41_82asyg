import { Link, NavLink } from 'react-router-dom'
import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

const navLinkClass = ({ isActive }) => `px-4 py-2 rounded-md transition-colors duration-200 ${isActive ? 'text-teal-300 bg-white/5' : 'text-slate-400 hover:text-teal-300 hover:bg-white/5'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-teal-400 to-teal-600" />
          <span className="text-slate-200 font-semibold tracking-tight">FE Engineer</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="mailto:hello@example.com" className="text-slate-400 hover:text-teal-300 transition-colors" aria-label="Email"><Mail size={20} /></a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-300 hover:text-teal-300" aria-label="Menu"><Menu /></button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5">
          <div className="px-4 py-3 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={navLinkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className={navLinkClass}>Projects</NavLink>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-300" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="mailto:hello@example.com" className="text-slate-400 hover:text-teal-300" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
