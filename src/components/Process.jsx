import React from 'react'
import Section from './Section'

const steps = ['Discovery Call','Wireframes','Design','Development','Content & branding','Testing','Launch','Support & growth']

export default function Process(){
  return (
    <Section id="process" className="bg-slate-950">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Our Process</h2>
      <div className="mt-10 overflow-x-auto">
        <ol className="flex gap-4 min-w-max">
          {steps.map((s,i) => (
            <li key={s} className="flex-1 min-w-[180px] rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <div className="w-8 h-8 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-emerald-400 text-white flex items-center justify-center font-bold">{i+1}</div>
              <p className="mt-2 text-slate-200 text-sm">{s}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
