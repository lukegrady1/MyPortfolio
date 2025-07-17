'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// === Editable size settings ===
const TILE_WIDTH = 340// adjust tile width here (px)
const TILE_IMAGE_HEIGHT_CLASS = 'h-50' // adjust tile image height here (Tailwind class)
const SLIDE_OFFSET = TILE_WIDTH + 32 // px offset for sliding animation (tile width + gap)
// === End editable settings ===

// Replace with your project entries
const projects = [
  {
    title: 'To-Do List API',
    description: 'Simple REST API built with Golang and SQLite',
    image: '/To-Do.jpg',
    live: '',
    github: 'https://github.com/lukegrady1/To-Do-List-API',
  },
  {
    title: 'Project Two',
    description: 'Brief description of Project Two.',
    image: '/projects/project2.png',
    live: 'https://project-two.live',
    github: 'https://github.com/yourusername/project-two',
  },
  {
    title: 'Project Three',
    description: 'Brief description of Project Three.',
    image: '/projects/project3.png',
    live: 'https://project-three.live',
    github: 'https://github.com/yourusername/project-three',
  },
  {
    title: 'Project Four',
    description: 'Brief description of Project Four.',
    image: '/projects/project4.png',
    live: 'https://project-four.live',
    github: 'https://github.com/yourusername/project-four',
  },
]

export default function ProjectsPage() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const perPage = 3
  const total = projects.length

  const next = () => {
    setDirection(1)
    setIndex((prev) => (prev + perPage) % total)
  }

  const prev = () => {
    setDirection(-1)
    setIndex((prev) => (prev - perPage + total) % total)
  }

  const visible = Array.from({ length: perPage }).map((_, i) => projects[(index + i) % total])

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-blue-200 via-purple-400 to-pink-600">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
        >
          Projects
        </motion.h1>

        <div className="relative w-full max-w-6xl overflow-hidden" style={{ minHeight: TILE_WIDTH * 1 }}>
          {/* Previous Button - adjust size via class w-? h-? or padding */}
          <button
            type="button"
            onClick={prev}
            title="Previous projects"
            aria-label="Previous projects"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 p-3 shadow-md hover:bg-gray-200 z-10"
          >
            <FaChevronLeft />
          </button>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ x: direction > 0 ? -SLIDE_OFFSET : SLIDE_OFFSET, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? SLIDE_OFFSET : -SLIDE_OFFSET, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full flex space-x-8 justify-center"
            >
              {visible.map((project) => (
                <div
                  key={project.title}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition transform flex-shrink-0"
                  style={{ width: `${TILE_WIDTH}px` }} // adjust tile width here
                  onClick={() => project.live && window.open(project.live, '_blank')}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full ${TILE_IMAGE_HEIGHT_CLASS} object-cover`} // adjust tile image height here
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 text-2xl"
                  >
                    <FaGithub />
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Next Button - adjust size via class w-? h-? or padding */}
          <button
            type="button"
            onClick={next}
            title="Next projects"
            aria-label="Next projects"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full w-12 h-12 p-3 shadow-md hover:bg-gray-200 z-10"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </>
  )
}
