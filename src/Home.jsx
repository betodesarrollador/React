import React from 'react';
import Hero from './components/Hero';
import NewArrivals from './components/NewArrivals';
import Banner from './components/Banner';
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    {/* Hero */}
      <Hero />
     {/* NewArrivals */}
      <NewArrivals />
       {/* Banner */}
      <Banner />
       {/* PopularProducts */}
      <PopularProducts />
      {/* Footer */}
      <Footer />
    </>
  );
}
