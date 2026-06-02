import Navbar from '@/components/Navbar';
import HeroSectionVideo from '@/components/HeroSectionVideo';
import CloseupGalleryVideo from '@/components/CloseupGalleryVideo';
import ResultsSection from '@/components/landing/ResultsSection';
import PackagesSection from '@/components/landing/PackagesSection';
// import PricingTiers from '@/components/PricingTiers';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSectionVideo />
      <CloseupGalleryVideo />
      <ResultsSection />
      <PackagesSection />
      {/* <PricingTiers /> */}
      {/* <Footer /> */}
    </main>
  );
}
