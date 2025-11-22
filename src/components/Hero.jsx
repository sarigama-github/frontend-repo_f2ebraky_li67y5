import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_60%)]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity:0, y: 24 }} animate={{ opacity:1, y:0 }} transition={{ duration: 0.7, ease:'easeOut' }} className="py-10">
          <p className="text-sm text-blue-300/80 tracking-wider uppercase">Build. Brand. Grow.</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-xl">
            We Help Small Businesses Build, Brand & Grow.
          </h1>
          <p className="mt-5 text-slate-200/90 text-lg max-w-xl">
            Modern websites, branding, and marketing — everything your business needs to thrive.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition">Start Your Project</a>
            <a href="#cases" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur border border-white/10 transition">See Our Work</a>
          </div>
        </motion.div>
      </div>

      <a href="#contact" className="fixed bottom-6 right-6 z-40 px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-400 text-white shadow-xl hover:opacity-95 transition">
        Let’s Talk
      </a>
    </section>
  )
}
