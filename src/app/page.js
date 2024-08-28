import Header from './components/Header'
import Footer from './components/Footer'
import HotspotSection from './components/HotspotSection';
import CtaSection from './components/CtaSection';
import FaqsSection from './components/FaqsSection';
import BudgetSection from './components/BudgetSection';
import FutureSection from './components/FutureSection';

export default function Home() {
  return (
    <>
      <Header />
      <FutureSection/>
      <FaqsSection />
      <BudgetSection />
      <CtaSection />
      <HotspotSection />
      <Footer />
    </>
  );
}
