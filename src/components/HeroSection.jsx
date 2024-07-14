import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const HeroSection = () => {
  const [placeholder, setPlaceholder] = useState('Search for Medicine');
  const phrases = ['Search for Medicine', 'Search for Machines', 'Search for vegetables', 'Search for Fruits'];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setPlaceholder(phrases[index]);
      index = (index + 1) % phrases.length;
    }, 1000);

    return () => clearInterval(intervalId);
  }, [phrases]);

  return (
    <HeroContainer>
      <HeroText>
        <h1>What are you Looking for?</h1>
        <SearchBar>
          <SearchIcon sx={{ fontSize: 48, marginRight: 1, color: '#ccc' }} />
          <SearchInput
            type="search"
            placeholder={placeholder}
            aria-label="Search"
          />
          <SearchButton>Search</SearchButton>
        </SearchBar>
      </HeroText>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  background-color: #e9f5ff;
  height: 60vh; /* Make it full height */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const HeroText = styled.div`
  text-align: center;
  color: #212529;
  h1 {
    font-size: 36px;
    font-weight: bold;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  margin-top: 20px;
  width: 500px; /* Make it responsive */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  background-color: #0d6efd;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
`;

export default HeroSection; 