import React, { useState } from 'react'
import Section from './Section'

const cases = [
  { title: 'The Coffee Jar — Café Website', problem: 'No online presence', result: '2x more inquiries', image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop', details: 'We built a cozy, modern café website with menu, gallery, and contact. Clear CTAs increased organic inquiries.' },
  { title: 'FitPro Gym — Fitness Studio', problem: 'Outdated website', result: '45% more trial bookings', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop', details: 'Complete redesign with class schedule and trial pass funnel. Optimized forms boosted bookings.' },
  { title: 'UrbanCuts — Salon', problem: 'No booking system', result: 'Fully booked weekends', image: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1600&auto=format&fit=crop', details: 'Introduced online booking with reminders. Sleek visuals improved trust and conversion.' },
  { title: 'ScholarPoint — Coaching Institute', problem: 'No lead generation', result: '60+ leads/month', image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop', details: 'Landing pages + forms + WhatsApp integration. Clear value props drove consistent leads.' },
  { title: 'ThreadHub — Clothing Store', problem: 'Weak brand perception', result: 'More professional + trustable', image: 'https://images.unsplash.com/photo-1750857964409-bf2d6d725e21?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaGUlMjBDb2ZmZWUlMjBKYXIlMjAlRTIlODAlOTQlMjBDYWYlQzMlQTklMjBXZWJzaXRlfGVufDB8MHx8fDE3NjM4MDE3Mzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', details: 'Brand refresh with new palette and product photography guidance. Sales quality improved.' },
]

export default function CaseStudies(){
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const openModal = (c) => { setActive(c); setOpen(true) }

  return (
    <Section id="cases" className="bg-slate-950">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Case Studies</h2>
      <p className="text-center text-slate-300 mt-3">A snapshot of results we deliver.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map(c => (
          <button key={c.title} onClick={() => openModal(c)} className="group text-left rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:-translate-y-1 transition-transform">
            <div className="h-40 bg-slate-800">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="text-slate-300 text-sm mt-1">Problem: {c.problem}</p>
              <p className="text-emerald-400 text-sm mt-1">Result: {c.result}</p>
            </div>
          </button>
        ))}
      </div>

      {open && active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6" onClick={()=>setOpen(false)}>
          <div className="bg-slate-900 rounded-2xl border border-white/10 max-w-2xl w-full overflow-hidden" onClick={e=>e.stopPropagation()}>
            <div className="h-60">
              <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-bold">{active.title}</h3>
              <p className="text-slate-300 mt-2">{active.details}</p>
              <div className="mt-4 flex gap-4 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200">Problem: {active.problem}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300">Result: {active.result}</span>
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={()=>setOpen(false)} className="px-4 py-2 rounded-full bg-blue-600 text-white">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  )
}
