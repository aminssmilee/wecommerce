import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './components/top-bar';
import Navbar from './components/navbar';
import HeroSection from './components/hero-section';
import TrustBadges from './components/trust-badges';
import ServiceCategories from './components/service-categories';
import CTABanners from './components/Banners';
import Detail from './components/Detail';
import { Footer } from "./components/Footer";
import QuotePage from './pages/QuotePage';
import MaintenancePage from './pages/MaintenancePage';
import './assets/fonts/fonts.css'
import Categories from "./components/Category";
import Hero from "./components/Hero"


function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white ">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen font-jakarta">
      {/* <TopBar /> */}
      <Navbar />
      <HeroSection />
      <ServiceCategories />
      <Categories />
      <TrustBadges />
      {/* <CTABanners /> */}
      <Hero />
      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 2 detik
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/maintenance" element={<MaintenancePage />} />
      </Routes>
    </Router>
  );
}
