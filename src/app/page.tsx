import Image from "next/image";
import Navbar from "./components/home/header/Navbar";
import Hero from "./components/home/hero/Hero";
import AccordionComponent from "./components/home/accordion/Accordion";
import Stats from "./components/home/stat/Stat";
import WelcomeSection from "./components/home/wellcome/Greetings";
import Customer from "./components/home/customer/Customer";
import Ads from "./components/home/ads/Ad";
import SaleCarousel from "./components/home/sale/Sale";
import Testimonial from "./components/home/testimonials/Testimonial";
import AppDownloadSection from "./components/home/ads/AppDownloadSection";
// import Testimonial from "./components/home/testimonials/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <WelcomeSection />
      <div className="bg-gray-100 py-6">
      <Customer />
      </div>
      <Ads />
      <div>
      <h1 className="md:text-left text-center py-3 md:text-5xl text-2xl mx-0 md:mx-85 ">
          Frequently Asked Question
        </h1>
      <AccordionComponent />
      </div>
      <SaleCarousel />
      <Testimonial />
      <AppDownloadSection />
    </div>
  );
}
