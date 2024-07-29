import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedProducts from '../components/FeaturedProducts';
import OfferSection from '../components/OfferSection';
import Offer1 from '../assets/offers-image/offer1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopByCategories from '../components/ShopByCategories';
import ProductsCards from '../components/ProductsCards';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FaqAccordion from '../components/FaqAccordion'

import ProductDetails from '../components/ProductDetails'

const Home = () => {

  const offers = [
    {
      image: { Offer1 },
      title: 'Offer 1 Title',
      description: 'Offer 1 Description',
      buttonText: 'Buy Now',
    },
    {
      image: 'path/to/offer2.jpg',
      title: 'Offer 2 Title',
      description: 'Offer 2 Description',
      buttonText: 'Learn More',
    },
  ];

  return (
    <HomeContainer>
      {/* <Header /> */}
      <HeroSection />
      <OfferSection offers={offers} />
      <ShopByCategories />
      <ProductsCards heading="Our Hero Products" />
      {/* <CategoriesSection /> */}
      <TestimonialCarousel />
      <FaqAccordion />
      {/* <FeaturedProducts /> */}
      
      {/* <ProductDetails /> */}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  // Add your styles here
  background-color: #e0f7fz;
  margin-bottom: 50px;


`;

export default Home;
