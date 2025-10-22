import React, { useState } from "react";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MapDemo from './components/MapDemo';
import WeatherCard from './components/WeatherCard';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';

function App() {
  const [city, setCity] = useState("New Delhi, India");

  const handleCitySearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
      <Navbar />
      <div id="home">
        <HeroSection onSearch={handleCitySearch} />
      </div>
      <div className='flex flex-col lg:flex-row w-full gap-4 p-4 lg:p-8 lg:gap-8 lg:px-20 bg-[rgb(247,249,250)]'>
        {/* Left side - Map */}
        <div id="map" className='w-full lg:w-2/3 scroll-mt-19'>
          <MapDemo city={city} />
        </div>

        {/* Right side - Weather + City Info stacked */}
        <div id="weather" className='w-full lg:w-1/3 flex flex-col gap-4 scroll-mt-19'>
          <WeatherCard city={city} />
        </div>
      </div>
      <div id="features" className="scroll-mt-19">
        <FeaturesSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
