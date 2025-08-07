import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-mq-dark text-white font-poppins px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-mq-blue">
          <Link href="/">MangaQuest</Link>
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-mq-gold transition-colors">Home</Link>
          <Link href="/library" className="hover:text-mq-gold transition-colors">La mia Libreria</Link>
          <Link href="/about" className="hover:text-mq-gold transition-colors">About</Link>
        </div>

        {/* Bottone mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 flex flex-col">
          <Link href="/" className="hover:text-mq-gold" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/library" className="hover:text-mq-gold" onClick={() => setIsOpen(false)}>La mia Libreria</Link>
          <Link href="/about" className="hover:text-mq-gold" onClick={() => setIsOpen(false)}>About</Link>
        </div>
      )}
    </nav>
  )
}
