import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Amenities from './components/Amenities'
import Booking from './components/Booking'

function App() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div className="app">
      <header className={`fixed top-0 left-0 w-full flex justify-between items-center z-[1000] transition-all duration-500 ease-in-out ${scrolled ? 'py-4 px-8 bg-white/95 backdrop-blur-md shadow-lg' : 'py-6 px-8 bg-transparent'
        }`}>
        <div className={`font-heading text-2xl font-bold tracking-wider transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-white'
          }`}>
          Vermietung eines Hauses in Spanien
        </div>
        <nav className="flex gap-8 items-center">
          {['Experience', 'Gallery', 'Amenities', 'Location'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium uppercase tracking-widest transition-colors duration-500 ${scrolled ? 'text-text-dark hover:text-accent' : 'text-white hover:text-accent'
              }`}>
              {item}
            </a>
          ))}
          <button className="btn btn-primary !py-2.5 !px-6 text-sm">
            Book Now
          </button>
        </nav>
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
