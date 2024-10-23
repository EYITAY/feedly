import PricingSection from './pricing-section';
import Hero from './hero';
import FeaturesSection from './features-section';
import React from 'react';
import Footer from './footer';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <PricingSection />
      <Footer/>
    </div>
  );
}

export default LandingPage;
