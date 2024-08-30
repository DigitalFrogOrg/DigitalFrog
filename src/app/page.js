import Header from "./components/Header";
import Footer from "./components/Footer";
import HotspotSection from "./components/HotspotSection";
import FaqsSection from "./components/FaqsSection";
import BudgetSection from "./components/BudgetSection";
import FutureSection from "./components/FutureSection";
import Evolution from "./components/Evolution";
import MidMobileScroll from "./components/MidMobileScroll";
import TestimonialSlider from "./components/TestimonialSlider";
import Trustees from "./components/Trustees";
import TestimonialTabs from "./components/TestimonialTabs";
import MobileExperiences from "./components/MobileExperiences";
import CynergyStudio from "./components/CynergyStudio";
import RecentNews from "./components/RecentNews";

export default function Home() {
  return (
    <>
      <Header />
      <FutureSection />
      <MidMobileScroll />
      <Evolution />
      <CynergyStudio />
      <RecentNews/>
      <TestimonialSlider />
      <MobileExperiences />
      <TestimonialTabs />
      <Trustees />
      <FaqsSection />
      <BudgetSection />
      <HotspotSection />
      <Footer />
    </>
  );
}
