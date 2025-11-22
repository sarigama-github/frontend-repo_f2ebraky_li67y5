import React from 'react'
import Section from './Section'

const team = [
  { name: 'Josh', role: 'Founder & Lead Developer', bio: 'Creative direction, frontend, client strategy.', img: 'https://images.unsplash.com/photo-1548600379-8f07a09d93e8?q=80&w=800&auto=format&fit=crop' },
  { name: 'Member 2', role: 'Frontend Engineer', bio: 'UI animations, layouts, components.', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop' },
  { name: 'Member 3', role: 'Marketing & Growth', bio: 'Ads, social media, strategy.', img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop' },
]

export default function Team(){
  return (
    <Section id="team" className="bg-slate-950">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Meet the Team</h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map(m => (
          <div key={m.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-white font-semibold mt-4">{m.name}</h3>
            <p className="text-slate-300 text-sm">{m.role}</p>
            <p className="text-slate-400 text-sm mt-2">{m.bio}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
