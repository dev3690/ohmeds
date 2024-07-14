import React from 'react';
import product1 from '../assets/product-images/product1.jpg';
import styled from 'styled-components';

const FeaturedProducts = () => {
  return (
    <FeaturedContainer>
      <h2>Featured Products</h2>
      <Products>
        <Product>
          <img src={product1} alt="Product" />
          <ProductName>Product 1</ProductName>
          <ProductPrice>$100</ProductPrice>
        </Product>
        <Product>
          <img src={product1} alt="Product" />
          <ProductName>Product 2</ProductName>
          <ProductPrice>$200</ProductPrice>
        </Product>
        {/* Add more products as needed */}
      </Products>
    </FeaturedContainer>
  );
};

const FeaturedContainer = styled.section`
  padding: 40px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 28px;
  }
`;

const Products = styled.div`
  display: flex;
  gap: 20px;
`;

const Product = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 50%;
    height: auto;
  }
`;

const ProductName = styled.h4`
  margin-top: 10px;
  font-size: 18px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #007bff;
`;

export default FeaturedProducts;
