import HeroSlider from '../components/home/HeroSlider'
import FeaturesBar from '../components/home/FeaturesBar'
import ProductsSection from '../components/home/ProductsSection'
import GallerySection from '../components/home/GallerySection'
import LinesSection from '../components/home/LinesSection'
import MapSection from '../components/home/MapSection'
import CTABanner from '../components/home/CTABanner'

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <FeaturesBar />
      <ProductsSection />
      <GallerySection />
      <LinesSection />
      <MapSection />
      <CTABanner />
    </main>
  )
}
