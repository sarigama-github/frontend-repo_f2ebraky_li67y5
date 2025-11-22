import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'Who We Are' },
    { href: '#services', label: 'Services' },
    { href: '#packages', label: 'Packages' },
    { href: '#cases', label: 'Case Studies' },
    { href: '#why', label: 'Why Us' },
    { href: '#team', label: 'Team' },
    { href: '#process', label: 'Process' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
          <span className="font-bold tracking-tight text-white">Startify</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors text-sm">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition shadow-md shadow-blue-600/20">Start Your Project</a>
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(v=>!v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="text-slate-200/90 py-1">{l.label}</a>
            ))}
            <a href="#contact" onClick={()=>setOpen(false)} className="mt-2 px-4 py-2 rounded-full bg-blue-600 text-white text-center">Start Your Project</a>
          </div>
        </div>
      )}
    </header>
  )
}
