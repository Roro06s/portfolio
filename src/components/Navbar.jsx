import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Détection du scroll pour effet transparent → solide
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/#about' },
    { name: 'Compétences', href: '/#skills' },
    { name: 'Réalisations', href: '/#projects' },
  ]

  const servicePages = [
    { name: 'Sites Web', href: '/services/sites-web' },
    { name: 'Applications', href: '/services/applications-web' },
    { name: 'Branding', href: '/services/branding' },
    { name: 'Référencement SEO', href: '/services/seo' },
    { name: 'Maintenance & Support', href: '/services/maintenance' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - PLUS COLLÉ À GAUCHE */}
          <a href="#hero" className="group -ml-11 hidden lg:block">
            <h1 className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-text-primary' : 'text-white drop-shadow-lg'
            } group-hover:text-accent-violet`} style={{fontFamily: '"Permanent Marker", cursive'}}>
              Devko Studio
            </h1>
          </a>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {navLinks.map((link) => (
              
              <a  key={link.name}
                href={link.href}
                className={`relative font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-text-secondary hover:text-accent-violet' 
                    : 'text-white drop-shadow-lg hover:text-white/80'
                } group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-violet transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Dropdown Services */}
            <div className="relative group">
              <button
                className={`font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-text-secondary hover:text-accent-violet' 
                    : 'text-white drop-shadow-lg hover:text-white/80'
                } flex items-center gap-1`}
              >
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown menu */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {servicePages.map((service) => (
                    
                 <a     key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-text-secondary hover:bg-accent-violet/10 hover:text-accent-violet transition-colors duration-200"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact — après le dropdown Services */}
            <a
              href="/#contact"
              className={`relative font-medium transition-colors duration-300 ${
                isScrolled
                  ? 'text-text-secondary hover:text-accent-violet'
                  : 'text-white drop-shadow-lg hover:text-white/80'
              } group`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-violet transition-all duration-300 group-hover:w-full" />
            </a>

            {/* CTA Button - INVISIBLE au début, VISIBLE au scroll */}
            {isScrolled && (
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-accent-violet to-accent-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-accent-violet/50 transition-all duration-300 ml-8"
              >
                Devis Gratuit
              </motion.a>
            )}
          </div>

          {/* Burger Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-text-primary' : 'text-white drop-shadow-lg'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                
            <a      key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-text-secondary hover:text-accent-violet transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}

              {/* Services en accordéon mobile */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-text-primary mb-2">Services</p>
                {servicePages.map((service) => (
                  
                <a    key={service.name}
                    href={service.href}
                    className="block py-2 pl-4 text-text-secondary hover:text-accent-violet transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                ))}
              </div>

              {/* CTA Mobile */}
              
           <a     href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-accent-violet to-accent-blue text-white font-semibold rounded-full"
              >
                Devis Gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}