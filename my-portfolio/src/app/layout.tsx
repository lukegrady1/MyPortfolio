import './globals.css'
import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import SocialIcons from '../components/SocialIcons'

export const metadata = {
  title: 'Your Name – Portfolio',
  description: 'Frontend Developer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <SocialIcons />
        {children}
      </body>
    </html>
  )
}
