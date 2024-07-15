import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaYoutube, FaGoogle } from 'react-icons/fa';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content container">
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li><a href="/about-us">About US</a></li>
            <li><a href="/why-choose-us">Why Choose US</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact US</h4>
          <p>📞 +9135875684</p>
          <p>401, Parshwa Tower, Near Pakwan II, SG Highway, Bodakdev, Ahmedabad, Gujarat</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/order-medicine">Order Medicine</a></li>
            <li><a href="/search-by-category">Search by Category</a></li>
            <li><a href="/medicine-substitute">Medicine Substitute</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
