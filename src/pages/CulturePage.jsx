import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import places from '../data/places';

const CulturePage = () => {
    const [activeTribe, setActiveTribe] = useState(0);
    const { placeId } = useParams();
    const place = places[placeId];

    if (!place) {
        return (
            <div className="pt-32 pb-20 min-h-screen text-center">
                <h1 className="text-4xl font-bold">Region Not Found</h1>
                <Link to="/" className="text-brand-500 mt-4 inline-block">Return Home</Link>
            </div>
        );
    }

    const tribes = place.culture || [];

    return (
        <div className="pt-24 min-h-screen bg-earth-100 dark:bg-earth-800">
            {/* Header */}
            <div className="bg-earth-800 text-earth-100 py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="container mx-auto text-center relative z-10">
                    <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Living Heritage</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        {place.name} Artisans
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-earth-100/80">
                        Experience the incredible craftsmanship, native communities, and deeply rooted way of life hidden within {place.name}.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">

                {/* The Tribes Interactive Section */}
                <section className="mb-32">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-4xl font-bold text-earth-800 dark:text-earth-100 mb-6">Communities of {place.name}</h2>
                            <p className="text-lg text-earth-500 dark:text-earth-100/80 mb-8 leading-relaxed">
                                Depending on the region, you'll encounter different customs, dialects, and craft traditions that have sustained these communities for centuries.
                            </p>

                            {tribes.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {tribes.map((tribe, i) => (
                                        <button
                                            key={tribe.name}
                                            onClick={() => setActiveTribe(i)}
                                            className={`p-4 rounded-xl text-left transition-all duration-300 border ${activeTribe === i ? 'bg-white dark:bg-surface-dark border-brand-500 shadow-md ring-2 ring-brand-500/20' : 'bg-transparent border-earth-200 dark:border-earth-700 hover:border-brand-300'}`}
                                        >
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className={`w-3 h-3 rounded-full ${tribe.color}`}></div>
                                                <h4 className={`font-bold ${activeTribe === i ? 'text-brand-700 dark:text-brand-500' : 'text-earth-800 dark:text-earth-100'}`}>{tribe.name}</h4>
                                            </div>
                                            <p className="text-sm text-earth-500 dark:text-earth-100/60">{tribe.focus}</p>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <p className="italic text-earth-400">No specific cultural groups documented for this region yet.</p>
                            )}
                        </div>

                        {tribes.length > 0 && (
                            <div className="w-full lg:w-1/2 bg-white dark:bg-black/30 p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                <h3 className="text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6 relative z-10">The {tribes[activeTribe].name} Focus</h3>
                                <p className="text-lg text-earth-500 dark:text-earth-100/80 relative z-10 italic">
                                    "{tribes[activeTribe].description}"
                                </p>
                                {tribes[activeTribe].image && (
                                    <div className="mt-8 rounded-xl overflow-hidden shadow-md h-48 relative">
                                        <img src={tribes[activeTribe].image} alt={tribes[activeTribe].name} className="absolute inset-0 w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CulturePage;
