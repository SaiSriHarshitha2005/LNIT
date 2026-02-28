import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import places from '../data/places';

const DestinationsPage = () => {
    const { placeId } = useParams();
    const place = places[placeId];

    // In case of a bad route
    if (!place) {
        return (
            <div className="pt-32 pb-20 min-h-screen text-center">
                <h1 className="text-4xl font-bold">Region Not Found</h1>
                <Link to="/" className="text-brand-500 mt-4 inline-block">Return Home</Link>
            </div>
        );
    }

    // Some destinations in the new places.js schema might just have descriptions and no formal 'story' objects yet, 
    // so we will gracefully handle them.
    const destinationsList = place.destinations || [];

    return (
        <div className="pt-24 min-h-screen bg-earth-100 dark:bg-earth-800">
            {/* Header */}
            <div className="bg-earth-800 text-earth-100 py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="container mx-auto text-center relative z-10">
                    <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">Explore The Region</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        {place.name} Destinations
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-earth-100/80">
                        Discover the specific landmarks, scenic spots, and must-visit locations hidden within {place.name}.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">
                {destinationsList.map((dest, index) => (
                    <div key={dest.id} className={`mb-32 flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center group`}>

                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-earth-200">
                            {dest.image && (
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 to-transparent"></div>

                            {/* Floating Stats Badges */}
                            {dest.stats && (
                                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                                    <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                        🏔️ {dest.stats.alt}
                                    </span>
                                    <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                        📍 {dest.stats.dist}
                                    </span>
                                    <span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                                        🎟️ {dest.stats.fee}
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 p-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">
                                {dest.name}
                            </h2>
                            <h3 className="text-xl text-brand-700 dark:text-brand-500 font-medium mb-6">
                                {dest.tagline}
                            </h3>
                            <p className="text-lg text-earth-500 dark:text-earth-100/70 mb-8 leading-relaxed">
                                {dest.description}
                            </p>

                            {/* We omitted activeStory state to keep it simple as old rich details were at top level DestinationsPage. 
                                This is now essentially the detail page for the place's locations. */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DestinationsPage;
