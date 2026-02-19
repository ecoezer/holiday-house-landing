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
        <section id="gallery" className="py-24 px-8 experience-gradient">
            <div className="container mx-auto">
                <h2 className="reveal text-center text-4xl mb-4 font-heading font-bold">The Experience</h2>
                <p className="reveal delay-1 text-center text-text-muted mb-12 max-w-xl mx-auto font-body">
                    Every corner of our house is designed to offer comfort and elegance. Explore our spaces.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <div key={idx} className={`reveal relative overflow-hidden rounded-2xl delay-${(idx % 5) + 1} h-[300px] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 group`}>
                            <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
