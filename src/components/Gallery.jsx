import React from 'react';

const images = [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
];

const Gallery = () => {
    return (
        <section id="gallery" style={{ padding: '6rem 2rem', backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <h2 className="reveal" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>The Experience</h2>
                <p className="reveal delay-1" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Every corner of our house is designed to offer comfort and elegance. Explore our spaces.
                </p>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {images.map((img, idx) => (
                        <div key={idx} className={`reveal img-zoom-container delay-${(idx % 5) + 1}`} style={{
                            height: '300px',
                            cursor: 'pointer',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                        }}>
                            <img src={img} alt={`Gallery ${idx}`} className="img-zoom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
