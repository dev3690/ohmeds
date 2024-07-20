
import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Badge } from 'react-bootstrap';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from '../components/ProductsData';
import '../styles/ProductsCards.css'; // Import custom CSS for additional styles

const ProductsCards = () => {
  const [slider, setSlider] = useState(null);
  const navigate = useNavigate();

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

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <Container>
      <h2 className="my-4">Popular Bought Items / Limited Special Products</h2>
      <Slider ref={setSlider} {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card-container" onClick={() => handleCardClick(product.id)}>
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
                src={product.images[0]} // Display the first image
                alt={product.name}
                className="product-image"
              />
              <Card.Body className="card-body">
                <div>
                  <div className="category-review">
                    <Card.Text className="text-muted">{product.category}</Card.Text>
                    <span className="rating">{product.rating} ⭐</span>
                  </div>
                  <Card.Title className="product-name">{product.name}</Card.Title>
                  <Card.Text className="text-muted">By {product.brand}</Card.Text>
                </div>
                <div>
                  <Card.Text>
                    <span className="price">${product.price.toFixed(2)}</span>{' '}
                    <span className="original-price">${product.originalPrice.toFixed(1)}</span>
                  </Card.Text>
                  <div className="card-footer">
                    <Button variant="success" className="add-to-cart-button">
                      Add To Cart
                    </Button>
                  </div>
                  {/* <Card.Text className="sold-info">Sold: 90/120</Card.Text>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '75%' }}></div>
                  </div> */}
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
