import React from 'react'
import Section from './Section'
import { CheckCircle2 } from 'lucide-react'

const points = [
  'End-to-end business support',
  'Modern UI/UX design',
  'Fast, responsive, clean development',
  'Marketing + design + growth under one roof',
  'Young, creative, energetic team',
  'Affordable for small businesses'
]

export default function WhyUs(){
  return (
    <Section id="why" className="bg-slate-950">
      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(42,247,160,0.08),transparent_60%)] pointer-events-none" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Why Choose Us</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {points.map(p => (
            <div key={p} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-400 flex-shrink-0" />
                <p className="text-slate-200">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
