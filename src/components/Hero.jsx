import React from 'react';

const Hero = ({ heroImageUrl, title = "Hidden Hamlet", subtitle = 'Journey through serene valleys, historic caves, cascading waterfalls, and the vibrant living heritage of the region.', isPlaceHome = false }) => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transform scale-105 transition-transform duration-[20s] ease-out hover:scale-110"
                style={{ backgroundImage: `url(${heroImageUrl})` }}
            ></div>

            {/* Overlay gradient */}
            <div className={`absolute inset-0 bg-gradient-to-b ${isPlaceHome ? 'from-black/70 via-black/40 to-earth-900/90' : 'from-black/60 via-black/40 to-earth-800/90'} z-0`}></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white mt-16 animate-[fadeIn_1s_ease-out_forwards]">
                {isPlaceHome ? (
                    <span className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-6 block md:mb-8">Welcome to</span>
                ) : (
                    <span className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-6 block md:mb-8">Welcome to "Hidden Hamlet"</span>
                )}

                <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                    {title}
                </h1>
                <p className="text-lg md:text-2xl font-light mb-12 max-w-3xl mx-auto drop-shadow-md text-slate-200 leading-relaxed">
                    {subtitle}
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-white/80 text-sm mb-2 tracking-widest uppercase">Explore Below</span>
                <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
