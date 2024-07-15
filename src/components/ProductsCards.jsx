

import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Badge } from 'react-bootstrap';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product2 from '../assets/product-images/product2.webp';
import Product1 from '../assets/product-images/product1.jpg';
import '../styles/ProductsCards.css'; // Import custom CSS for additional styles

const products = [
  {
    id: 1,
    name: 'All Natural Italian-Style Chicken Meatballs',
    category: 'Hodo Foods',
    brand: 'NestFood',
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.0,
    image: Product1,
    badge: 'Save 35%',
  },
  {
    id: 2,
    name: 'Angie’s Boomchickapop Sweet and womnies',
    category: 'Hodo Foods',
    brand: 'Stouffer',
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.0,
    image: Product2,
    badge: 'Sale',
  },
  {
    id: 3,
    name: 'Foster Farms Takeout Crispy Classic',
    category: 'Hodo Foods',
    brand: 'NestFood',
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.0,
    image: Product1,
    badge: 'Best sale',
  },
  {
    id: 4,
    name: 'Blue Diamond Almonds Lightly Salted',
    category: 'Hodo Foods',
    brand: 'NestFood',
    price: 238.85,
    originalPrice: 245.8,
    rating: 4.0,
    image: Product2,
    badge: 'Save 15%',
  },
];

const ProductsCards = () => {
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [slider]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  return (
    <Container>
      <h2 className="my-4">Popular Bought Items / Limited Special Products</h2>
      <Slider ref={setSlider} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card-container">
            <Card className="product-card h-100">
              <div className="badge-container">
                {product.badge && (
                  <Badge bg="success" className="product-badge">
                    {product.badge}
                  </Badge>
                )}
              </div>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <Card.Body>
                <Card.Text className="text-muted">{product.category}</Card.Text>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="text-muted">{`By ${product.brand}`}</Card.Text>
                <Card.Text>
                  <span className="price">${product.price.toFixed(2)}</span>{' '}
                  <span className="original-price">${product.originalPrice.toFixed(1)}</span>
                </Card.Text>
                <Card.Text>
                  <span className="rating">{`${product.rating} ⭐`}</span>
                </Card.Text>
                <Button variant="success" className="w-100">
                  Add To Cart
                </Button>
                <Card.Text className="sold-info">Sold: 90/120</Card.Text>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '75%' }}></div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ProductsCards;
