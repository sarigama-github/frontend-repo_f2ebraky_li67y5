import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

export default function Section({ id, className = '', children, delay = 0 }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
        className="container mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  )
}
