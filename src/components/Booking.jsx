import React from 'react';

const Booking = () => {
    return (
        <section id="location" style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-light)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Reserve Your Experience</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Ready to escape to paradise? Fill out the form below or contact us directly to discuss your stay. We offer tailored packages to ensure your holiday is nothing short of perfect.
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <p><strong>Address:</strong> 123 Azure Coast, Serenity Bay, SB 90210</p>
                        <p><strong>Phone:</strong> +1 (555) 000-8888</p>
                        <p><strong>Email:</strong> reservations@luminahouse.com</p>
                    </div>
                </div>

                <form className="glass-card" style={{ backgroundColor: '#fff', padding: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }} onSubmit={(e) => e.preventDefault()}>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                        <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                        <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Preferred Dates</label>
                        <input type="text" placeholder="Check-in - Check-out" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Send Inquiry</button>
                </form>
            </div>
        </section>
    );
};

export default Booking;
