

import React from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import man from '../assets/Reviews/man.png';
import woman from '../assets/Reviews/woman.png';
import '../styles/TestimonialCarousel.css'; // Import the CSS file

const testimonials = [
  {
    name: "Nathan Hartman",
    image: man,
    rating: 4,
    feedback: "They have everything related to health, like medicines, lab tests, and other healthcare essentials, at GREAT prices. Their service is amazing and quick, and the app is also easy to use."
  },
  {
    name: "Rajeev Kapoor",
    image: man,
    rating: 5,
    feedback: "I'm already a fan. They have a vast selection of products at affordable prices, which is a huge relief for my wallet. Their delivery is always prompt, and their customer service is top-notch. Thank you."
  },
  {
    name: "Shreya Sharma",
    image: woman,
    rating: 5,
    feedback: "It's the perfect one-stop shop for my whole family's healthcare needs. The offers you can get here are beyond what other platforms offer. Customer service, including returns, is also very convenient."
  },
  {
    name: "John Doe",
    image: woman,
    rating: 4,
    feedback: "Great selection and prices. Fast delivery and good customer service. Great selection and prices. Fast delivery and good customer service. Customer service, including returns, is also very convenient."
  },
  {
    name: "Jane Smith",
    image: man,
    rating: 5,
    feedback: "Amazing app! Very easy to use and the customer support is fantastic. Great selection and prices. Fast delivery and good customer service. Customer service, including returns, is also very convenient."
  }
];

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mt-5 testimonial-carousel-container">
      <h2>What Our Customers Say!</h2>
      <Slider className="slickcontainer" {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="rounded-circle" />
            <h3>{testimonial.name}</h3>
            <div className="stars">
              {"★".repeat(testimonial.rating)}
            </div>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
