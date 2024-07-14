import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <h1>Discover the Best Products</h1>
        <p>Shop the latest products from top brands</p>
        <HeroButton>Shop Now</HeroButton>
      </HeroText>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  background: url('/path/to/your/hero-image.jpg') no-repeat center center/cover;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.div`
  text-align: center;
  color: #fff;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 24px;
    margin-top: 10px;
  }
`;

const HeroButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default HeroSection;
