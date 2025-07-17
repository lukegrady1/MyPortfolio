'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex items-center justify-center
        px-6
        bg-gradient-to-br
        from-blue-300
        via-purple-300
        to-pink-300
      "
    >
      <div className="text-center max-w-2xl">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold uppercase text-white"
        >
          Hey, I'm Luke Grady
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-100"
        >
          A Software Engineer developing data-driven applications and analytical tools that transform raw data into actionable insights and drive product impact.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="#projects"
            className="inline-block bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg shadow-lg"
          >
            Projects
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

