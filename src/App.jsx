import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from './components/top-bar';
import Navbar from './components/navbar';
import HeroSection from './components/hero-section';
import TrustBadges from './components/trust-badges';
import ServiceCategories from './components/service-categories';
// import FeaturedServices from './components/featured-services';
import CTABanners from './components/Banners';
import Detail from './components/Detail';

function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-jakarta">
      <TopBar />
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <ServiceCategories />
      {/* <FeaturedServices /> */}
      <CTABanners />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman utama */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Halaman detail statis */}
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}
