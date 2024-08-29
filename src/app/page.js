import Header from './components/Header'
import Footer from './components/Footer'
import HotspotSection from './components/HotspotSection';
import CtaSection from './components/CtaSection';
import FaqsSection from './components/FaqsSection';
import BudgetSection from './components/BudgetSection';
import FutureSection from './components/FutureSection';
import Evolution from './components/Evolution';

export default function Home() {
  return (
    <>
      <Header />
      <FutureSection/>
      <Evolution/>
      <FaqsSection />
      <BudgetSection />
      <CtaSection />
      <HotspotSection />
      <Footer />
    </>
  );
}
