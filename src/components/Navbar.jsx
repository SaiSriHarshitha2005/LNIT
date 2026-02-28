import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import places from '../data/places';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { placeId } = useParams();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const placeName = placeId && places[placeId] ? places[placeId].name : 'Hidden Hamlet';

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <svg className="w-8 h-8 text-brand-700 group-hover:text-brand-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                    <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-earth-800 dark:text-earth-100' : 'text-white'}`}>
                        {placeName}
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {placeId ? (
                        <>
                            <Link to={`/${placeId}/destinations`} className={`font-medium transition-colors duration-300 hover:text-brand-500 ${scrolled ? 'text-earth-800 dark:text-earth-100' : 'text-white/90 hover:text-white'}`}>Destinations</Link>
                            <Link to={`/${placeId}/culture`} className={`font-medium transition-colors duration-300 hover:text-brand-500 ${scrolled ? 'text-earth-800 dark:text-earth-100' : 'text-white/90 hover:text-white'}`}>Culture & Artisans</Link>
                            <Link to={`/${placeId}/experiences`} className={`font-medium transition-colors duration-300 hover:text-brand-500 ${scrolled ? 'text-earth-800 dark:text-earth-100' : 'text-white/90 hover:text-white'}`}>Experiences</Link>
                        </>
                    ) : (
                        <span className={`italic text-sm transition-colors duration-300 ${scrolled ? 'text-earth-400' : 'text-white/70'}`}>Select a place to explore</span>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
