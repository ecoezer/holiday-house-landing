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
        <section id="amenities" className="py-24 px-8 bg-transparent">
            <div className="container mx-auto">
                <h2 className="reveal text-center text-4xl mb-14 font-heading font-bold">Curated Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {amenities.map((item, idx) => (
                        <div key={idx} className={`reveal delay-${(idx % 5) + 1} bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-left`}>
                            <h3 className="text-xl mb-3 text-primary font-heading font-bold">{item.title}</h3>
                            <p className="text-text-muted font-body leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
