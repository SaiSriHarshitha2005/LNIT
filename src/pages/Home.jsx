import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import places from '../data/places';

const Home = ({ isPlaceRoute = false }) => {
    const { placeId } = useParams();

    if (isPlaceRoute && placeId && places[placeId]) {
        // Render the Home page for a specific Place
        const place = places[placeId];
        return (
            <>
                <Hero heroImageUrl={place.heroImage} title={place.name} subtitle={place.tagline} isPlaceHome={true} />

                <section className="py-24 bg-white dark:bg-earth-900 relative z-20">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="mb-16 text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">Discover {place.name}</h2>
                            <p className="text-xl text-earth-500 dark:text-earth-100/70 max-w-2xl mx-auto">Explore all the profound details of this completely independent region.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Link to={`/${placeId}/destinations`} className="group rounded-3xl overflow-hidden shadow-xl relative h-96 block">
                                <img src={place.heroImage} alt="Destinations" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">Destinations</h3>
                                </div>
                            </Link>

                            <Link to={`/${placeId}/culture`} className="group rounded-3xl overflow-hidden shadow-xl relative h-96 block">
                                <img src={place.heroImage} alt="Culture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">Culture & Artisans</h3>
                                </div>
                            </Link>

                            <Link to={`/${placeId}/experiences`} className="group rounded-3xl overflow-hidden shadow-xl relative h-96 block">
                                <img src={place.heroImage} alt="Experiences" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">Experiences</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    // Render the Global Home page
    const allPlacesList = Object.values(places);

    return (
        <>
            <Hero heroImageUrl="/images/araku_hero.png" />

            <section className="py-24 bg-white dark:bg-earth-900 relative z-20">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-earth-800 dark:text-earth-100 mb-4">The Regions of Hidden Hamlet</h2>
                        <p className="text-xl text-earth-500 dark:text-earth-100/70 max-w-2xl mx-auto">Select a region to enter its dedicated portal, featuring its unique destinations, culture, and experiences.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allPlacesList.map(place => (
                            <Link key={place.id} to={`/${place.id}`} className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg bg-white dark:bg-black/20">
                                <div className="relative h-44">
                                    <img src={place.heroImage} alt={place.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-100">{place.name}</h3>
                                    <p className="text-sm text-earth-500 dark:text-earth-100/70">{place.tagline}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
