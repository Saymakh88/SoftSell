import React from "react";
import HeroSection  from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";


const page = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default page;
