'use client'

import { FaLinkedin, FaTwitter, FaGithub, FaBook } from 'react-icons/fa'

const ICONS = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/lukegrady/' },
  { icon: <FaTwitter />,  href: 'https://twitter.com/you' },
  { icon: <FaGithub />,   href: 'https://github.com/lukegrady1' },
  { icon: <FaBook />,     href: '/blog' },
]

export default function SocialIcons() {
  return (
    <div className="fixed left-4 top-1/3 z-10">
      <div className="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center space-y-4">
        {ICONS.map(({ icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary text-xl transition"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

