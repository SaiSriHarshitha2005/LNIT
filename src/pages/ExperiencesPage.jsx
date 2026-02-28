import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import places from '../data/places';

const ExperiencesPage = () => {
    // Simple intersection observer for scroll animations
    const observerRefs = useRef([]);
    const { placeId } = useParams();
    const place = places[placeId];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-12');
                    }
                });
            },
            { threshold: 0.1 }
        );

        observerRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !observerRefs.current.includes(el)) {
            observerRefs.current.push(el);
        }
    };

    if (!place) {
        return (
            <div className="pt-32 pb-20 min-h-screen text-center">
                <h1 className="text-4xl font-bold">Region Not Found</h1>
                <Link to="/" className="text-brand-500 mt-4 inline-block">Return Home</Link>
            </div>
        );
    }

    const experiences = place.experiences || [];

    return (
        <div className="pt-24 min-h-screen bg-earth-100 dark:bg-earth-800">
            {/* Header */}
            <div className="bg-earth-800 text-earth-100 py-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="container mx-auto text-center relative z-10">
                    <span className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4 block">Taste, Ride, Live</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        {place.name} Experiences
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-earth-100/80">
                        Beyond the breathtaking sites, {place.name} offers unique, immersive experiences. Indulge in the true spirit of the region.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20 overflow-hidden">

                {experiences.length > 0 ? (
                    <div className="space-y-32">
                        {experiences.map((exp, index) => {
                            // Cycle through some border colors for visual variety
                            const borderColors = ['border-brand-500', 'border-orange-500', 'border-earth-800'];
                            const borderColor = borderColors[index % borderColors.length];
                            // Alternate layout direction
                            const layoutDirection = index % 2 !== 0 ? 'md:flex-row-reverse border-r-8' : 'md:flex-row border-l-8';

                            return (
                                <div key={exp.id || index} ref={addToRefs} className={`opacity-0 translate-y-12 transition-all duration-1000 ease-out flex flex-col ${layoutDirection} gap-8 items-center bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-xl ${borderColor}`}>
                                    <div className="w-full md:w-1/2 h-80 md:h-[500px] relative overflow-hidden group">
                                        {exp.image && (
                                            <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-[15s] group-hover:scale-125 scale-105 bg-earth-200" />
                                        )}
                                        <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                    <div className="w-full md:w-1/2 p-8 md:p-12 relative">
                                        <div className={`absolute -top-10 ${index % 2 !== 0 ? '-left-10' : '-right-10'} text-9xl text-earth-100 dark:text-earth-900/50 font-bold opacity-50 z-0 select-none`}>
                                            0{index + 1}
                                        </div>
                                        <div className="relative z-10">
                                            <span className="text-brand-500 font-bold uppercase tracking-widest text-sm mb-2 block">Immersive Activity</span>
                                            <h3 className="text-4xl font-bold text-earth-800 dark:text-earth-100 mb-4">{exp.title}</h3>
                                            <p className="text-lg text-earth-500 dark:text-earth-100/80 mb-6 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {exp.highlights && exp.highlights.length > 0 && (
                                                <ul className="space-y-2 mb-8 text-earth-800 dark:text-earth-100/90 font-medium">
                                                    {exp.highlights.map((highlight, hIndex) => (
                                                        <li key={hIndex} className="flex items-center gap-2">✓ {highlight}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="italic text-earth-400 text-xl">No specific immersive experiences documented for this region yet.</p>
                        <Link to={`/${placeId}/destinations`} className="text-brand-500 mt-4 inline-block font-bold">Explore Destinations Instead</Link>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ExperiencesPage;
