import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Offer1 from '../assets/offers-image/offer1.jpg';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{
              maxWidth: '85vw', // Set max width to 85% of the viewport width
              margin: '0 auto', // Center the carousel horizontally
              backgroundColor: 'black'
            }}
          >
            <Carousel.Item style={{ width: '100%', height: '60vh'}}>
              <img
                style={{
                  width: '100%', // Set width to 100% of the image
                  height: '60vh', // Set height to 100% of the viewport height
                  objectFit: 'fill' // Ensure the image covers the entire carousel item
                }}
                className="d-block w-100"
                src={Offer1}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>BUY 1 Get 1 FREE</h3> */}
                <p>
                  {/* Himalaya Ashvagandha General Wellness Tablets | Stress Relief
                  | Rejuvenates Mind & Body - 60 Tablets */}
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: '100%', height: '60vh'}}>
              <img
                style={{
                  width: '100%', // Set width to 100% of the image
                  height: '60vh', // Set height to 100% of the viewport height
                  objectFit: 'fill' // Ensure the image covers the entire carousel item
                }}
                className="d-block w-100"
                src={Offer1}
                alt="Second slide"
              />

              <Carousel.Caption>
                {/* <h3>BUY 1 Get 1 FREE</h3> */}
                <p>
                  {/* Himalaya Ashvagandha General Wellness Tablets | Stress Relief
                  | Rejuvenates Mind & Body - 60 Tablets */}
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ width: '100%', height: '60vh'}}>
              <img
                style={{
                  width: '100%', // Set width to 100% of the image
                  height: '60vh', // Set height to 100% of the viewport height
                  objectFit: 'fill' // Ensure the image covers the entire carousel item
                }}
                className="d-block w-100"
                src={Offer1}
                alt="Third slide"
              />

              <Carousel.Caption>
                {/* <h3>BUY 1 Get 1 FREE</h3> */}
                <p>
                  {/* Himalaya Ashvagandha General Wellness Tablets | Stress Relief
                  | Rejuvenates Mind & Body - 60 Tablets */}
                </p>
                <button className="btn btn-primary">Buy Now</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselComponent;