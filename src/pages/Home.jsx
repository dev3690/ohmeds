import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <HomeContainer>
      {/* <Header /> */}
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <Footer />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  // Add your styles here
  background-color: skyblue;

`;

export default Home;
