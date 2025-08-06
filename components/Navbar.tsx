import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icone React Icons

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false); // Stato Menù Mobile
    return (
    <nav className="bg-mq-dark text-white font-poppins px-6 py-4 flex justify-between items-center">
        <div className="flex justify-between items-center">
        {/* Logo */}
        <div className = "text-2xl font-bold text-mq-blue">
            <Link href="/">MangaQuest</Link>
         </div>

         {/* Menù Desktop */}
         <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-mq-gold transition-colors">Home</Link>
            <Link href="/manga" className="hover:text-mq-gold transition-colors">Manga</Link>
            <Link href="/about" className="hover:text-mq-gold transition-colors"> About</Link>
        </div>


       {/* Bottone Menù Mobile */}
       <div className="md:hidden l:hidden">
        <button onClick = {() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28}/> : <FiMenu size={28}/>}
        </button>

       </div>
       </div>

         {/* Menù Mobile (visibile solo quando isOpen è True */}
         {isOpen && (
            <div className="md:hidden mt-4 space-y-4 flex flex-col">
            <Link href="/" className="hover:text-mq-gold transition-colors">Home</Link>
            <Link href="/manga" className="hover:text-mq-gold transition-colors">Manga</Link>
            <Link href="/about" className="hover:text-mq-gold transition-colors">About</Link>
                
            </div>
         )}



    </nav>
    )
}