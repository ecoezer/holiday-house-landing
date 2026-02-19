import React from 'react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero" style={{
      relative: 'relative',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '0 2rem'
    }}>
      <div className="reveal">
        <h1 className="reveal delay-1" style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          Your Private Sanctuary <br /> Awaits.
        </h1>
        <p className="reveal delay-2" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          Experience unparalleled luxury and serenity in our coastal retreat.
          The perfect escape for those who seek the extraordinary.
        </p>
        <div className="reveal delay-3" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <button className="btn btn-primary hover-lift">Book Your Stay</button>
          <button className="btn hover-lift" style={{ border: '1px solid white', color: 'white' }}>Take a Tour</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
