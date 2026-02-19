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
      <header className={`fixed top-0 left-0 w-full flex justify-between items-center z-[1000] transition-all duration-500 ease-in-out ${scrolled || menuOpen ? 'py-4 px-6 md:px-12 bg-white/95 backdrop-blur-md shadow-lg' : 'py-6 px-6 md:px-12 bg-transparent'
        }`}>
        <div className={`font-heading text-xl md:text-2xl font-bold tracking-wider transition-colors duration-500 z-[1001] ${scrolled || menuOpen ? 'text-primary' : 'text-white'
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
          className={`md:hidden z-[1001] p-2 transition-colors duration-500 ${scrolled || menuOpen ? 'text-primary' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-[1000] flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-heading font-bold text-primary active:text-accent"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn btn-primary mt-4" onClick={() => setMenuOpen(false)}>
              Book Your Stay
            </button>
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
