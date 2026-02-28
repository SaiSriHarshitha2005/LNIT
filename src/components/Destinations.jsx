import React from 'react';

const Destinations = () => {
    const destinations = [
        {
            id: 1,
            name: "Whispering Pines",
            region: "Northern Valley",
            description: "A serene village famous for its ancient redwood forests, tranquil streams, and legendary woodworking heritage.",
            image: "/images/destination.png"
        },
        {
            id: 2,
            name: "Amber Meadows",
            region: "Sunlight Plains",
            description: "Known for golden wheat fields that stretch to the horizon and vibrant local harvest festivals celebrating rural life.",
            image: "/images/destination.png"
        },
        {
            id: 3,
            name: "Stonebrook Cove",
            region: "Coastal Highlands",
            description: "Nestled between rugged cliffs and the sea, this charming destination offers fresh coastal air and a rich fishing tradition.",
            image: "/images/destination.png"
        }
    ];

    return (
        <section id="destinations" className="py-24 bg-earth-100 dark:bg-earth-800">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-6">
                            Hidden Gems Waiting to be Explored
                        </h2>
                        <p className="text-lg text-earth-500 dark:text-earth-100/70">
                            Escape the hustle and bustle. Immerse yourself in the tranquility of nature and the warmth of rural hospitality.
                        </p>
                    </div>
                    <button className="whitespace-nowrap bg-white dark:bg-black/20 text-earth-800 dark:text-earth-100 border border-brand-500 px-8 py-3 rounded-full font-medium hover:bg-brand-500 hover:text-white transition-all duration-300">
                        View All Destinations
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <div
                            key={dest.id}
                            className={`relative group rounded-3xl overflow-hidden shadow-xl ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} bg-white dark:bg-black/30`}
                            style={{ minHeight: index === 0 ? '500px' : '300px' }}
                        >
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm border border-white/30">
                                    {dest.region}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-2">{dest.name}</h3>
                                <p className={`text-white/80 line-clamp-2 ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                                    {dest.description}
                                </p>
                                <div className="mt-6 flex items-center text-brand-400 font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Discover More
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
