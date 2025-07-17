'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const links = ['Home','About','Projects','Contact']

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/100 backdrop-blur-md py-4 z-20"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          Luke Grady
        </Link>
        <ul className="flex space-x-8 uppercase text-sm">
          {links.map(item => {
            let href = '/'
            if (item === 'About')     href = '/about'
            else if (item === 'Home')  href = '/'
            else if (item === 'Projects') href = '/projects'    // if you have a /projects page
            else if (item === 'Contact')  href = '/#contact'     // or keep it as an anchor
            return (
              <li key={item}>
                <Link href={href}>
                  {item}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
}
