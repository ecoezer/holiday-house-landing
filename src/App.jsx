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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.4s ease'
      }}>
        <div className="logo" style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.5rem',
          fontWeight: 700,
          color: scrolled ? 'var(--primary)' : 'white',
          letterSpacing: '1px',
          transition: 'color 0.4s ease'
        }}>
          LUMINA <span style={{ fontWeight: 300 }}>HOUSE</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Experience', 'Gallery', 'Amenities', 'Location'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              color: scrolled ? 'var(--text-dark)' : 'white',
              fontSize: '0.9rem',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'color 0.4s ease'
            }}>
              {item}
            </a>
          ))}
          <button className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
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

      <footer style={{
        padding: '6rem 2rem',
        textAlign: 'center',
        backgroundColor: 'var(--primary)',
        color: 'white'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'white' }}>LUMINA HOUSE</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.8 }}>
            An architectural masterpiece nestled in the heart of the coast, designed for those who value privacy, comfort, and the beauty of nature.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <a href="#" style={{ opacity: 0.7 }}>Instagram</a>
            <a href="#" style={{ opacity: 0.7 }}>Facebook</a>
            <a href="#" style={{ opacity: 0.7 }}>LinkedIn</a>
          </div>
          <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>&copy; 2026 Lumina Holiday House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
