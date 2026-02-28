import React from 'react';

const VisitPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0">
                <img src="/images/araku_hero.png" alt="Araku Valley View" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-earth-900/60 backdrop-blur-sm"></div>
            </div>

            {/* Glowing Glassmorphic Booking Card */}
            <div className="relative z-10 w-full max-w-2xl animate-[fadeIn_0.8s_ease-out_forwards]">
                <div className="glass rounded-[2rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/20 relative overflow-hidden">

                    {/* Decorative ambient glow inside the card */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                    <div className="text-center mb-10 relative z-10">
                        <span className="text-brand-300 font-bold uppercase tracking-widest text-xs mb-3 block">Your Adventure Awaits</span>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-md">Craft Your Journey</h1>
                        <p className="text-earth-100/80 font-light">
                            Connect with local Tribal guides to experience the untouched beauty of the Eastern Ghats.
                        </p>
                    </div>

                    <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your interest! A local guide will contact you soon."); }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input type="text" placeholder="First Name" required className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:border-brand-400 focus:bg-white/10 transition-all placeholder:text-white/50 backdrop-blur-md" />
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name" required className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:border-brand-400 focus:bg-white/10 transition-all placeholder:text-white/50 backdrop-blur-md" />
                            </div>
                        </div>

                        <div>
                            <input type="email" placeholder="Email Address" required className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:border-brand-400 focus:bg-white/10 transition-all placeholder:text-white/50 backdrop-blur-md" />
                        </div>

                        <div className="relative">
                            <select className="w-full px-5 py-4 rounded-xl border border-white/20 bg-earth-900/80 md:bg-white/5 text-white focus:outline-none focus:border-brand-400 transition-all appearance-none cursor-pointer backdrop-blur-md">
                                <option value="" disabled selected className="text-earth-900 bg-white">Select Your Primary Interest</option>
                                <option value="homestay" className="text-earth-900 bg-white">Tribal Village Homestays</option>
                                <option value="sightseeing" className="text-earth-900 bg-white">Caves & Waterfalls Tour</option>
                                <option value="culture" className="text-earth-900 bg-white">Artisan & Culture Trails</option>
                                <option value="all" className="text-earth-900 bg-white">The Complete Araku Experience</option>
                            </select>
                            <svg className="w-5 h-5 absolute right-5 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(76,175,80,0.3)] hover:shadow-[0_0_30px_rgba(76,175,80,0.6)] hover:-translate-y-1 text-lg tracking-wide">
                                Request Local Itinerary
                            </button>
                        </div>

                        <p className="text-center text-xs text-white/40 mt-4">
                            By submitting, you agree to support responsible, community-led tourism.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VisitPage;
