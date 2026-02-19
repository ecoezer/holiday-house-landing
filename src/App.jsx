import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Amenities from './components/Amenities'
import Booking from './components/Booking'

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;

      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', revealElements);

    // Initial check
    revealElements();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', revealElements);
    };
  }, []);

  const navItems = ['Experience', 'Gallery', 'Amenities', 'Location'];

  return (
    <div className={`app ${menuOpen ? 'overflow-hidden h-screen' : ''}`}>
      <header className={`fixed top-0 left-0 w-full flex justify-between items-center z-[2000] transition-all duration-500 ease-in-out ${scrolled || menuOpen ? 'py-4 px-5 md:px-12 bg-white shadow-lg' : 'py-6 px-5 md:px-12 bg-transparent'
        }`}>
        <div className={`font-heading text-base sm:text-xl md:text-2xl font-bold tracking-wider transition-colors duration-500 z-[2002] max-w-[65%] sm:max-w-none ${scrolled || menuOpen ? 'text-primary' : 'text-white'
          }`}>
          Vermietung eines Hauses in Spanien
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium uppercase tracking-widest transition-colors duration-500 ${scrolled ? 'text-text-dark hover:text-accent' : 'text-white hover:text-accent'
              }`}>
              {item}
            </a>
          ))}
          <button className="btn btn-primary !py-2.5 !px-6 text-sm">
            Book Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-[2002] p-3 -mr-2 transition-all duration-500 rounded-full ${scrolled || menuOpen ? 'text-primary bg-primary/5' : 'text-white hover:bg-white/10'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-4 relative flex flex-col justify-between overflow-hidden">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${menuOpen ? 'rotate-[42deg] translate-x-1' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-translate-x-full opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${menuOpen ? '-rotate-[42deg] translate-x-1' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 z-[2001] flex flex-col items-center justify-center transition-all duration-700 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Solid background to completely hide hero content */}
          <div className="absolute inset-0 bg-white" style={{ backgroundColor: '#ffffff' }} />

          <nav className="relative z-10 flex flex-col gap-8 items-center overflow-y-auto max-h-screen py-20">
            {navItems.map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-3xl font-heading font-bold text-primary transition-all duration-500 hover:text-accent transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className={`mt-4 transition-all duration-700 delay-500 transform ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
              <button className="btn btn-primary shadow-xl" onClick={() => setMenuOpen(false)}>
                Book Your Stay
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="experience">
          <Gallery />
        </div>
        <Amenities />
        <Booking />
      </main>

      <footer className="py-24 px-8 footer-gradient text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl mb-6 text-white font-heading font-bold">Vermietung eines Hauses in Spanien</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-80 leading-relaxed font-body">
            An architectural masterpiece nestled in the heart of the coast, designed for those who value privacy, comfort, and the beauty of nature.
          </p>
          <div className="flex gap-8 justify-center mb-12">
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">Instagram</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">Facebook</a>
            <a href="#" className="opacity-70 hover:opacity-100 transition-opacity duration-300">LinkedIn</a>
          </div>
          <p className="opacity-50 text-sm font-body font-light">&copy; 2026 Vermietung eines Hauses in Spanien. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
