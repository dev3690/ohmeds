import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© 2024 MyEcommerce. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const FooterContent = styled.div`
  p {
    margin: 0;
  }
`;

export default Footer;
