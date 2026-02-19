import React from 'react';

const amenities = [
    { title: 'Infinity Pool', desc: 'Overlooking the vast ocean with heated water year-round.' },
    { title: 'Private Chef', desc: 'Personalized gourmet meals prepared in your own kitchen.' },
    { title: 'Smart Home', desc: 'Fully integrated lighting, sound, and climate control.' },
    { title: 'Home Cinema', desc: 'State-of-the-art theater for intimate movie nights.' },
    { title: 'Spa & Sauna', desc: 'Unwind in your private wellness sanctuary.' },
    { title: 'Concierge', desc: '24/7 assistance for all your local adventures.' }
];

const Amenities = () => {
    return (
        <section id="amenities" style={{ padding: '6rem 2rem' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3.5rem' }}>Curated Amenities</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {amenities.map((item, idx) => (
                        <div key={idx} className="glass-card" style={{ textAlign: 'left', backgroundColor: '#fff', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
