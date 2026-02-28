import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import DestinationsPage from './pages/DestinationsPage'
import CulturePage from './pages/CulturePage'
import ExperiencesPage from './pages/ExperiencesPage'
import VisitPage from './pages/VisitPage'

// Simple wrapper for page entrance animations
const PageWrapper = ({ children }) => {
  return (
    <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
      {children}
    </div>
  );
};

// Layout for the nested Place routes
const PlaceLayout = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-earth-100 overflow-x-hidden flex flex-col">
        <Routes>
          {/* Global Root without Place Navbar */}
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/visit" element={
            <>
              <Navbar />
              <main className="flex-grow">
                <PageWrapper><VisitPage /></PageWrapper>
              </main>
              <Footer />
            </>
          } />

          {/* Place-specific Routes */}
          <Route path="/:placeId" element={<PlaceLayout />}>
            <Route index element={<PageWrapper><Home isPlaceRoute={true} /></PageWrapper>} />
            <Route path="destinations" element={<PageWrapper><DestinationsPage /></PageWrapper>} />
            <Route path="culture" element={<PageWrapper><CulturePage /></PageWrapper>} />
            <Route path="experiences" element={<PageWrapper><ExperiencesPage /></PageWrapper>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
