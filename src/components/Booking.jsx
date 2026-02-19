import React from 'react';

const Booking = () => {
    return (
        <section id="location" className="py-24 px-8 bg-bg-light/30 backdrop-blur-sm">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="reveal-left">
                    <h2 className="text-4xl mb-6 font-heading font-bold">Reserve Your Experience</h2>
                    <p className="text-text-muted mb-8 text-lg font-body leading-relaxed">
                        Ready to escape to paradise? Fill out the form below or contact us directly to discuss your stay. We offer tailored packages to ensure your holiday is nothing short of perfect.
                    </p>
                    <div className="space-y-4 font-body">
                        <p><strong className="text-primary">Address:</strong> 123 Azure Coast, Serenity Bay, SB 90210</p>
                        <p><strong className="text-primary">Phone:</strong> +1 (555) 000-8888</p>
                        <p><strong className="text-primary">Email:</strong> info@ferienhaus-spanien.com</p>
                    </div>
                </div>

                <form className="reveal-right bg-white/80 backdrop-blur-xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl border border-white/30" onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-6">
                        <label className="block mb-2 font-semibold text-primary">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-semibold text-primary">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 font-semibold text-primary">Preferred Dates</label>
                        <input type="text" placeholder="Check-in - Check-out" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300" />
                    </div>
                    <button className="btn btn-primary hover-lift w-full">Send Inquiry</button>
                </form>
            </div>
        </section>
    );
};

export default Booking;
