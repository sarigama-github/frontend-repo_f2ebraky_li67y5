import React from 'react'
import Section from './Section'
import { Code2, Palette, Sparkles, Share2, Megaphone, Search, Bot, TrendingUp } from 'lucide-react'

const items = [
  { icon: Code2, title: 'Website Development', desc: 'Custom, responsive, fast websites.' },
  { icon: Palette, title: 'Branding & Logo Design', desc: 'Clean visual identity and assets.' },
  { icon: Sparkles, title: 'Marketing Strategy', desc: 'Clear plans to grow your business.' },
  { icon: Share2, title: 'Social Media Setup', desc: 'Profiles, content, and guidance.' },
  { icon: Megaphone, title: 'Digital Advertising', desc: 'FB/IG/Google campaigns that convert.' },
  { icon: Search, title: 'SEO Basics', desc: 'Foundational SEO for visibility.' },
  { icon: Bot, title: 'AI Tools Setup', desc: 'Automation and AI workflows.' },
  { icon: TrendingUp, title: 'Monthly Growth Support', desc: 'Ongoing improvements and reports.' },
]

export default function Services(){
  return (
    <Section id="services" className="bg-slate-950">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Services</h2>
      <p className="text-center text-slate-300 mt-3">Everything you need to look premium and grow.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({icon:Icon,title,desc}) => (
          <div key={title} className="group rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 hover:-translate-y-1 transition-all backdrop-blur">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-400 flex items-center justify-center text-white shadow-lg">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-white">{title}</h3>
            <p className="text-slate-300 text-sm mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
