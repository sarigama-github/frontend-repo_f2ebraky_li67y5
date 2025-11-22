import React, { useState } from 'react'
import Section from './Section'

export default function Contact(){
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section id="contact" className="bg-slate-950">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s Grow Your Business</h2>
          <p className="mt-4 text-slate-300">Tell us about your business and what you need. We’ll get back within 24 hours.</p>
          <div className="mt-6 rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-blue-600/10 to-emerald-400/10">
            <p className="text-white font-medium">Startify</p>
            <p className="text-slate-300 text-sm">Build. Brand. Grow.</p>
            <p className="text-slate-400 text-sm mt-2">contact@startify.agency</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Name" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input required type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <input name="business" placeholder="Business Name" className="mt-4 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <select name="services" className="mt-4 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option className="bg-slate-900">What services do you need?</option>
            <option className="bg-slate-900">Website Development</option>
            <option className="bg-slate-900">Branding & Logo Design</option>
            <option className="bg-slate-900">Marketing Strategy</option>
            <option className="bg-slate-900">Social Media Setup</option>
            <option className="bg-slate-900">Digital Advertising (FB/IG/Google)</option>
            <option className="bg-slate-900">SEO Basics</option>
            <option className="bg-slate-900">AI Tools Setup</option>
            <option className="bg-slate-900">Monthly Growth Support</option>
          </select>
          <textarea name="message" placeholder="Message" rows={4} className="mt-4 w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button type="submit" className="mt-4 w-full px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition">Let’s Grow Your Business</button>
          {submitted && <p className="text-emerald-400 text-sm mt-3">Thanks! We’ll reach out shortly.</p>}
        </form>
      </div>
    </Section>
  )
}
