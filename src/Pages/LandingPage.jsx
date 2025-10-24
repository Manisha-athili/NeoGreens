
import HeaderHero from '../Components/ProductHeader'
import ProductBadgeCarousel from '../Components/ProductBadgeCarousel'
import BannerCardsSection from '../Components/LandingPageComponents/BannerCardsSection'
import NatureCards from '../Components/LandingPageComponents/NatureCardsSection'
import BenefitSection from '../Components/LandingPageComponents/BenefitSection'
import NutrientsSection from '../Components/LandingPageComponents/NutrientsSection'
import SimpleSection from '../Components/LandingPageComponents/SimpleSection'
import Testimonials from '../Components/LandingPageComponents/Testimonials'
import ReadySection from '../Components/LandingPageComponents/ReadySection'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import HeroSection from '../Components/LandingPageComponents/HeroSection'

function LandingPage() {
  return (
   <>
    <Navbar/>
    <HeroSection />
    <BannerCardsSection />
    <NatureCards />
    <BenefitSection />
    <NutrientsSection />
    <SimpleSection />
    <Testimonials />
    <ReadySection/>
    <Footer />
    {/* <HeaderHero/>
    <ProductBadgeCarousel/> */}

  </>
  )
}

export default LandingPage
