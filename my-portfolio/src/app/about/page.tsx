'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-2xl text-center text-white">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4 text-lg"
        >
          I'm Luke Grady, a Software Engineer developing data-driven applications. I graduated from Worcester Polytechnic Institute with a degree in Computer Science and currently work at Citizens, where I focus on building scalable, efficient systems and innovative user experiences.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg"
        >
          My interests span full-stack development, AI and machine learning, data visualization, and sports analytics. When I'm not coding, I enjoy playing sports, going to the beach and spending time with my friends and family..
        </motion.p>
      </div>
    </section>
  )
}
