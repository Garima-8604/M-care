import React from 'react';
import HorizontalScrollSection from '../components/HomePage/HorizontalScrollSection/HorizontalScrollSection'
import VisionAndMission from '../components/HomePage/VisionAndMission/VisionAndMission';
import NavBar from '../components/HomePage/NavBar/NavBar';
import HeroSection from '../components/HomePage/HeroSection/HeroSection';
import Footer from '../components/HomePage/Footer/Footer';
import Blogs from '../components/HomePage/Blogs/Blogs';

const HomePage = () => {


  return (
    <div>
    <header>
      <NavBar/>
    </header>
    <div>
      <HeroSection />
      <HorizontalScrollSection />
      <VisionAndMission />
      <Blogs />
    </div>
    <footer>
      <Footer />
    </footer>
    </div>
  );
};

export default HomePage;
