import React from 'react';

const Artisans = () => {
    const artisans = [
        {
            id: 1,
            name: "Elias Thorne",
            craft: "Master Potter",
            village: "Oakhaven",
            description: "Elias has been shaping clay from the riverbanks of Oakhaven for over 40 years, keeping ancient firing techniques alive.",
            image: "/images/artisan.png"
        },
        {
            id: 2,
            name: "Elara Vance",
            craft: "Textile Weaver",
            village: "Mistwood",
            description: "Using hand-spun wool and natural dyes from the surrounding forests, Elara creates tapestries that tell the stories of her ancestors.",
            image: "/images/artisan.png"
        },
        {
            id: 3,
            name: "Tobias Reed",
            craft: "Woodcarver",
            village: "Pine Ridge",
            description: "Every piece of wood Tobias touches transforms into a masterpiece, reflecting the deep roots and natural beauty of Pine Ridge.",
            image: "/images/artisan.png"
        }
    ];

    return (
        <section id="artisans" className="py-24 bg-white dark:bg-surface-dark">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
                        Meet the Masters
                    </h2>
                    <p className="text-lg text-earth-500 dark:text-earth-100/70">
                        Behind every hidden gem is a pair of hands that shapes its culture. Discover the artisans who preserve our rural heritage through their extraordinary craftsmanship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {artisans.map(artisan => (
                        <div key={artisan.id} className="group rounded-2xl overflow-hidden shadow-lg bg-earth-100 dark:bg-black/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={artisan.image}
                                    alt={artisan.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-brand-500/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                                    {artisan.village}
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="text-brand-700 dark:text-brand-500 font-semibold mb-2 tracking-wide uppercase text-sm">
                                    {artisan.craft}
                                </div>
                                <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-100 mb-4">
                                    {artisan.name}
                                </h3>
                                <p className="text-earth-500 dark:text-earth-100/70 mb-6 line-clamp-3">
                                    {artisan.description}
                                </p>
                                <button className="text-brand-700 dark:text-brand-500 font-medium hover:text-brand-900 dark:hover:text-brand-100 transition-colors flex items-center gap-2 group-hover:gap-3">
                                    Read Story
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Artisans;
