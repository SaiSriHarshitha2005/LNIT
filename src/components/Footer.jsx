import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-earth-800 text-earth-100 py-16 mt-auto">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-earth-100/20 pb-12">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6 text-white group">
                            <svg className="w-8 h-8 text-brand-500 group-hover:text-brand-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                            </svg>
                            <span className="text-2xl font-bold tracking-tight">Hidden Hamlet</span>
                        </Link>
                        <p className="text-earth-100/70 max-w-sm mb-6 leading-relaxed">
                            Empowering local Adivasi communities by connecting passionate travelers with authentic tribal experiences, traditional craftsmanship, and spectacular hidden nature of the Eastern Ghats.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><span className="text-earth-100 font-semibold block">Lendi Institute of Engineering & Technology (CSIT)</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li><a href="mailto:23kd1a0722@lendi.edu.in" className="text-earth-100/70 hover:text-brand-500 transition-colors break-all">23kd1a0722@lendi.edu.in</a></li>
                            <li><a href="tel:8317679154" className="text-earth-100/70 hover:text-brand-500 transition-colors">Tel: 8317679154</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-earth-100/50">
                    <p>&copy; {new Date().getFullYear()} Hidden Hamlet. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
