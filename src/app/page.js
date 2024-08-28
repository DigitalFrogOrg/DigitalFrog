import Header from './components/Header'
import Footer from './components/Footer'
import HotspotSection from './components/HotspotSection';
import CtaSection from './components/CtaSection';
import FaqsSection from './components/FaqsSection';
import BudgetSection from './components/BudgetSection';

export default function Home() {
  return (
    <>
      <Header />
      <FaqsSection />
      <BudgetSection />
      <CtaSection />
      <HotspotSection />
      <Footer />
    </>
  );
}
