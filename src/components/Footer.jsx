import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 text-slate-300">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-400" />
            <span className="font-bold text-white">Startify</span>
          </div>
          <p className="text-sm mt-2">Build. Brand. Grow.</p>
          <p className="text-sm mt-2">Made with ❤️ by Startify</p>
        </div>
        <div>
          <p className="text-white font-medium">Quick Links</p>
          <ul className="mt-2 space-y-1 text-sm">
            {['Who We Are','Services','Packages','Case Studies','Why Us','Team','Process','Contact'].map((l,i)=> (
              <li key={i}><a href={'#'+l.toLowerCase().replace(/\s/g,'')} className="hover:text-white">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-white font-medium">Contact</p>
          <p className="text-sm mt-2">contact@startify.agency</p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20" />
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20" />
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20" />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4 border-t border-white/5">© {new Date().getFullYear()} Startify. All rights reserved.</div>
    </footer>
  )
}
