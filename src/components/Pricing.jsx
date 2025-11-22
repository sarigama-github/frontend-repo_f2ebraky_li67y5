import React from 'react'
import Section from './Section'

const tiers = [
  {
    name: 'Starter Website', price: '₹15,000', features: [
      '1–3 pages', 'Responsive design', 'Basic branding', '1-week delivery'
    ]
  },
  {
    name: 'Business Boost', price: '₹40,000–60,000', features: [
      'Full website','Branding palette','Copywriting','Google My Business setup','SEO basics'
    ]
  },
  {
    name: 'Growth Engine', price: '₹75,000–1,20,000', features: [
      'Website + branding','Social media templates','10 posts','Ads setup','Marketing strategy','1-month support'
    ]
  },
]

export default function Pricing(){
  return (
    <Section id="packages" className="bg-slate-950">
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-center">Our Packages</h2>
      <p className="text-center text-slate-300 mt-3">Choose the plan that fits your goals.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition">
            <h3 className="text-white font-semibold">{t.name}</h3>
            <p className="text-3xl font-extrabold text-white mt-2">{t.price}</p>
            <ul className="mt-4 space-y-2 text-slate-300 text-sm">
              {t.features.map(f => <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />{f}</li>)}
            </ul>
            <a href="#contact" className="mt-6 inline-block px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 transition">Get a Quote</a>
          </div>
        ))}
      </div>
    </Section>
  )
}
