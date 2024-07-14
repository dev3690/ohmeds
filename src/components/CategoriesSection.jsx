import React from 'react';
import styled from 'styled-components';
import product1 from '../assets/product-images/product1.jpg';


const CategoriesSection = () => {
  return (
    <CategoriesContainer>
      <Category>
        <img src={product1} alt="Category" />
        <CategoryName>Category 1</CategoryName>
      </Category>
      <Category>
        <img src={product1} alt="Category" />
        <CategoryName>Category 2</CategoryName>
      </Category>
      {/* Add more categories as needed */}
    </CategoriesContainer>
  );
};

const CategoriesContainer = styled.section`
  display: flex;
  gap: 20px;
  padding: 40px;
`;

const Category = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 30%;
    height: auto;
  }
`;

const CategoryName = styled.h3`
  margin-top: 10px;
  font-size: 20px;
`;

export default CategoriesSection;
