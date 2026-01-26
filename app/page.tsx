import Navbar from '@/components/Navbar';
import HeroSectionVideo from '@/components/HeroSectionVideo';
import CloseupGalleryVideo from '@/components/CloseupGalleryVideo';
import PricingTiers from '@/components/PricingTiers';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <HeroSectionVideo />
      <CloseupGalleryVideo />
      <PricingTiers />
      <Footer />
    </main>
  );
}
