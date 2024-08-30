import Header from "./components/Header";
import Footer from "./components/Footer";
import HotspotSection from "./components/HotspotSection";
import CtaSection from "./components/CtaSection";
import FaqsSection from "./components/FaqsSection";
import BudgetSection from "./components/BudgetSection";
import FutureSection from "./components/FutureSection";
import Evolution from "./components/Evolution";
import MidMobileScroll from "./components/MidMobileScroll";
import TestimonialSlider from "./components/TestimonialSlider";
import Trustees from "./components/Trustees";

export default function Home() {
  return (
    <>
      <Header />
      <FutureSection />
      <MidMobileScroll />
      <Evolution />
      <TestimonialSlider />
      <Trustees />
      <FaqsSection />
      <BudgetSection />
      {/* <CtaSection /> */}
      <HotspotSection />
      <Footer />
    </>
  );
}
