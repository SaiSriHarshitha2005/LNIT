import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import destinations from '../data/destinations';

const DestinationDetail = () => {
  const { id } = useParams();
  const dest = destinations.find(d => d.id === id);
  const [activeStory, setActiveStory] = useState(false);

  if (!dest) {
    return (
      <div className="pt-24 container mx-auto px-6 min-h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold text-earth-800 dark:text-earth-100">Destination Location Not Found</h2>
        <p className="mt-4 text-earth-500 text-xl">The path leads nowhere. Try exploring the <Link to="/destinations" className="text-brand-500 font-bold hover:underline">destinations list</Link> instead.</p>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-earth-100 dark:bg-earth-900 pb-20">

      {/* Hero Header Region */}
      <div className="relative overflow-hidden bg-black h-[60vh] md:h-[70vh] flex items-center justify-center">
        <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center container mx-auto px-6 mt-16">
          <span className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-4 block">Hidden Hamlet Guide</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">{dest.name}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 drop-shadow-md">{dest.tagline}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 -mt-16 relative z-20">

        {/* At a Glance Stats Card */}
        <div className="bg-white dark:bg-earth-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6 border border-earth-200 dark:border-earth-700 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-xl">🗺️</div>
            <div><p className="text-sm text-earth-500 uppercase tracking-wider font-bold">Distance</p><p className="font-medium dark:text-earth-100">{dest.stats.dist}</p></div>
          </div>
          <div className="hidden md:block w-px h-12 bg-earth-200 dark:bg-earth-700"></div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-xl">🏔️</div>
            <div><p className="text-sm text-earth-500 uppercase tracking-wider font-bold">Altitude/Type</p><p className="font-medium dark:text-earth-100">{dest.stats.alt}</p></div>
          </div>
          <div className="hidden md:block w-px h-12 bg-earth-200 dark:bg-earth-700"></div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-xl">🎟️</div>
            <div><p className="text-sm text-earth-500 uppercase tracking-wider font-bold">Entry Fee</p><p className="font-medium dark:text-earth-100">{dest.stats.fee}</p></div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-20">

          {/* Left Column: Description & Gallery */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-earth-800 dark:text-earth-100 mb-6 drop-shadow-sm">The Experience</h2>
              <p className="text-earth-600 dark:text-earth-100/80 leading-relaxed text-xl mb-12 border-l-4 border-brand-500 pl-6 space-y-4">
                {dest.longDescription || dest.description}
              </p>
            </div>

            {/* Gallery Section */}
            {dest.gallery && dest.gallery.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-100 mb-6">Visual Journey</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dest.gallery.map((img, i) => (
                    <div key={i} className={`rounded-xl overflow-hidden aspect-video ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                      <img src={img} alt={`${dest.name} view ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Story / Legend Section */}
            {(dest.story || dest.history) && (
              <div className="bg-gradient-to-br from-earth-200 to-white dark:from-earth-800 dark:to-earth-900 rounded-3xl p-8 md:p-10 shadow-lg border border-earth-300 dark:border-earth-700">
                <div className="flex justify-between items-center mb-6 cursor-pointer" onClick={() => setActiveStory(!activeStory)}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl bg-brand-100 p-3 rounded-full text-brand-900">📖</span>
                    <h3 className="text-2xl font-bold text-earth-800 dark:text-earth-100">
                      {dest.story ? `Legend: ${dest.story.title}` : 'Historical Context'}
                    </h3>
                  </div>
                  <button className="text-earth-500 hover:text-brand-500 transform transition-transform">
                    <svg className={`w-8 h-8 ${activeStory ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                </div>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeStory ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-lg text-earth-700 dark:text-earth-300 italic md:leading-relaxed">
                    "{dest.story ? dest.story.content : dest.history}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Practical Info (Sidebar) */}
          <div className="lg:col-span-1 space-y-8">

            {/* Activities */}
            {dest.activities && (
              <div className="bg-white dark:bg-earth-800 rounded-3xl p-8 shadow-md border border-earth-100 dark:border-earth-700">
                <h3 className="text-xl font-bold text-earth-800 dark:text-earth-100 mb-6 flex items-center gap-3">
                  <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Things To Do
                </h3>
                <ul className="space-y-3">
                  {dest.activities.map((act, i) => (
                    <li key={i} className="flex flex-start gap-3 text-earth-600 dark:text-earth-300">
                      <span className="text-brand-500 mt-1">✦</span> {act}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Travel Information */}
            <div className="bg-earth-800 text-earth-100 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-earth-700 rounded-full opacity-50 blur-2xl pointer-events-none"></div>

              <h3 className="text-xl font-bold mb-6 text-white border-b border-earth-700 pb-4">Essential Info</h3>

              <div className="mb-6 relative z-10">
                <h4 className="text-brand-300 font-semibold mb-2 text-sm uppercase tracking-wider">How to Reach</h4>
                <p className="text-earth-100/80 leading-relaxed text-sm">{dest.howToReach}</p>
              </div>

              <div className="mb-6 relative z-10">
                <h4 className="text-brand-300 font-semibold mb-2 text-sm uppercase tracking-wider">Best Time to Visit</h4>
                <p className="text-earth-100/80 leading-relaxed text-sm flex items-center gap-2">
                  <span className="text-xl">☀️</span> {dest.bestTime}
                </p>
              </div>

              {dest.tips && (
                <div className="relative z-10">
                  <h4 className="text-brand-300 font-semibold mb-3 text-sm uppercase tracking-wider">Travel Tips</h4>
                  <ul className="space-y-2 text-sm">
                    {dest.tips.map((tip, i) => (
                      <li key={i} className="flex gap-2 text-earth-100/80 bg-earth-900/40 p-2 rounded-lg">
                        <span className="text-yellow-500 shrink-0">💡</span> <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-20 border-t border-earth-200 dark:border-earth-700 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/destinations" className="group flex items-center gap-3 text-earth-600 dark:text-earth-300 hover:text-brand-500 transition-colors font-medium hover:bg-earth-200 dark:hover:bg-earth-800 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Back to All Places
          </Link>
          <Link to="/" className="group flex items-center gap-3 text-earth-600 dark:text-earth-300 hover:text-brand-500 transition-colors font-medium hover:bg-earth-200 dark:hover:bg-earth-800 px-6 py-3 rounded-full border border-earth-300 dark:border-earth-600">
            Return Home
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DestinationDetail;
