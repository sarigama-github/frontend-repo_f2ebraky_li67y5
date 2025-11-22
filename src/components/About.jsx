import React from 'react'
import Section from './Section'

export default function About(){
  return (
    <Section id="about" className="bg-slate-950">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Who We Are</h2>
          <p className="mt-4 text-slate-200/90 leading-relaxed">
            Startify is a youth-led digital growth agency helping small businesses look premium, attract customers, and grow fast. We build modern websites, create branding, and set up your entire digital presence in one place.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-200/90">
            {['Fast delivery','Modern design aesthetic','All-in-one solution','Affordable for small businesses','Real results'].map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-64 sm:h-80 lg:h-full min-h-[300px] rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop" alt="Team working" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-emerald-400/10 mix-blend-overlay" />
        </div>
      </div>
    </Section>
  )
}
