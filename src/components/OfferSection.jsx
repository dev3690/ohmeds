import React, { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Offer1 from '../assets/offers-image/offer1.jpg';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container
      style={{
        maxWidth: '85vw', // Set max width to 85% of the viewport width
        margin: '40px auto', // Add margin top and bottom
        borderRadius: '10px', // Add border radius
        padding: '20px', // Add padding
        backgroundColor: 'white', // Set background color to white
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' // Add box shadow
      }}
    >
      <Row>
        <Col md={12}>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{
              borderRadius: '10px', // Add border radius to carousel
              overflow: 'hidden' // Add overflow hidden to prevent carousel controls from overflowing
            }}
          >
            <Carousel.Item style={{ width: '100%', height: '60vh'}}>
              <img
                style={{
                  width: '100%', // Set width to 100% of the image
                  height: '60vh', // Set height to 100% of the viewport height
                  objectFit: 'contain' // Ensure the image covers the entire carousel item
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
                  objectFit: 'contain' // Ensure the image covers the entire carousel item
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
                  objectFit: 'contain' // Ensure the image covers the entire carousel item
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
          <style>
            {`
            .carousel-control-prev,.carousel-control-next {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background-color: lightblue;
                border: none;
                top: 50%;
                transform: translateY(-50%);
                z-index: 1;
              }

            .carousel-control-prev {
                left: 20px;
              }

            .carousel-control-next {
                right: 20px;
              }

            .carousel-control-prev-icon,.carousel-control-next-icon {
                width: 20px;
                height: 20px;
                background-size: 20px 20px;
              }

              @media (max-width: 768px) {
              .carousel-control-prev,.carousel-control-next {
                  width: 30px;
                  height: 30px;
                }

.carousel-control-prev-icon,.carousel-control-next-icon {
                  width: 15px;
                  height: 15px;
                }
              }
            `}
          </style>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselComponent;   




// import React, { useState } from "react";
// import { Carousel, Container, Row, Col } from "react-bootstrap";
// import Offer1 from '../assets/offers-image/offer1.jpg';
// import '../styles/OfferSlider.css'; // Import the CSS file

// const CarouselComponent = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Container className="carousel-container">
//       <Row>
//         <Col md={12}>
//           <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
//             <Carousel.Item className="carousel-item">
//               <img
//                 className="d-block w-100 carousel-image"
//                 src={Offer1}
//                 alt="First slide"
//               />
//               <Carousel.Caption>
//                 <button className="btn btn-primary">Buy Now</button>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item className="carousel-item">
//               <img
//                 className="d-block w-100 carousel-image"
//                 src={Offer1}
//                 alt="Second slide"
//               />
//               <Carousel.Caption>
//                 <button className="btn btn-primary">Buy Now</button>
//               </Carousel.Caption>
//             </Carousel.Item>
//             <Carousel.Item className="carousel-item">
//               <img
//                 className="d-block w-100 carousel-image"
//                 src={Offer1}
//                 alt="Third slide"
//               />
//               <Carousel.Caption>
//                 <button className="btn btn-primary">Buy Now</button>
//               </Carousel.Caption>
//             </Carousel.Item>
//           </Carousel>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CarouselComponent;
