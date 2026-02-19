import React from 'react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero relative h-screen flex items-center justify-center text-center text-white px-8" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="reveal">
        <h1 className="reveal delay-1 text-6xl mb-6 leading-[1.1] font-heading font-bold">
          Your Private Sanctuary <br /> Awaits.
        </h1>
        <p className="reveal delay-2 text-xl mb-10 max-w-2xl mx-auto font-body">
          Experience unparalleled luxury and serenity in our coastal retreat.
          The perfect escape for those who seek the extraordinary.
        </p>
        <div className="reveal delay-3 flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn bg-accent text-white hover:bg-[#c08d5d] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-12">
            Book Your Stay
          </button>
          <button className="btn border border-white/50 text-white backdrop-blur-sm hover:bg-white hover:text-primary hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 px-12">
            Take a Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
