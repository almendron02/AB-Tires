import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Homepage', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'}`}>
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-black italic tracking-tighter text-zinc-900 dark:text-zinc-50 font-headline uppercase">
          AB Tires
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors font-medium hover:text-primary ${
                location.pathname === link.path 
                  ? 'text-primary font-bold border-b-2 border-primary' 
                  : 'text-zinc-600 dark:text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:3343192417" 
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-primary-container text-on-primary-container font-bold rounded-lg scale-95 active:duration-75 hover:opacity-90 transition-all uppercase tracking-wider text-sm"
          >
            Call Now
          </a>
          <button 
            className="md:hidden text-on-background"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800 px-6 py-8 flex flex-col space-y-6 font-headline"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-bold uppercase tracking-tight ${
                  location.pathname === link.path ? 'text-primary' : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:3343192417" 
              className="inline-flex items-center justify-center px-5 py-3 bg-primary-container text-on-primary-container font-bold rounded-lg uppercase tracking-wider text-sm"
            >
              <Phone size={18} className="mr-2" />
              Call (334) 319-2417
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
