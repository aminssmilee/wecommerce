import TopBar from './components/top-bar'
import Navbar from './components/navbar'
import HeroSection from './components/hero-section'
import TrustBadges from './components/trust-badges'
import ServiceCategories from './components/service-categories'
// import FeaturedServices from './components/featured-services'
import CTABanners from './components/Banners'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <ServiceCategories />
      {/* <FeaturedServices /> */}
      <CTABanners />
    </div>
  )
}
