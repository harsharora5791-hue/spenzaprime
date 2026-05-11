import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoImg from '../assets/spenza_prime_logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Applications', href: '/applications' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-outline-variant bg-white/95 text-primary backdrop-blur">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12">
        <Link 
          to="/" 
          className="flex items-center transition-opacity hover:opacity-90"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={logoImg} 
            alt="SpenzaPrime Logo" 
            className="h-16 w-auto" 
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-bold uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-primary/90 active:scale-[0.98] rounded-sm">
              Get a Quote
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center p-2 text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-outline-variant bg-white md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-bold text-primary hover:text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="mt-4 w-full bg-primary py-5 font-bold text-white rounded-sm">
                  Get a Quote
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
