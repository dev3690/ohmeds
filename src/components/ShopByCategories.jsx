
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ShopByCategories.css';
import products from './ProductsData';

const EcommerceComponent = () => {
  const navigate = useNavigate();
  const categories = [...new Set(products.map(product => product.category))];
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  // Filter products based on active category
  const filteredProducts = products.filter(product => product.category === activeCategory);

  const handleViewMore = () => {
    navigate(`/categories/2`);
    // navigate(`/categories/${activeCategory}`);
  };

  return (
    <Container style={{ backgroundColor: '#e5f7fe', padding: '20px', borderRadius: '10px' }}>
      <Row>
      <h3>Top Categories</h3>

      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
            <Button variant="secondary" onClick={handleViewMore}>
              View More
            </Button>
          </div>
        <Col md={3}>
          <Nav variant="pills" className="flex-column">
            {categories.map((category, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  onClick={() => setActiveCategory(category)}
                  active={activeCategory === category}
                  style={{ cursor: 'pointer', margin: '10px 0' }}
                >
                  {category}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col md={9}>
          <Row>
            {filteredProducts.map((product) => (
              <Col md={4} key={product.id} style={{ marginBottom: '20px' }}>
                <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                  <Card.Img variant="top" src={product.images[0]} style={{ height: '150px', objectFit: 'contain' }} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.brand}</Card.Text>
                    {/* <Card.Text>{product.description.longDescription}</Card.Text> */}
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/* <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <Button variant="secondary" onClick={handleViewMore}>
              View More
            </Button>
          </div> */}
          
        </Col>
      </Row>
    </Container>
  );
};

export default EcommerceComponent;




// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ShopByCategories.css';
// import products from './ProductsData';

// const EcommerceComponent = () => {
//   const navigate = useNavigate();
//   const categories = [...new Set(products.map(product => product.category))];
//   const [activeCategory, setActiveCategory] = useState(categories[0]);

//   // Filter products based on active category
//   const filteredProducts = products.filter(product => product.category === activeCategory);

//   const handleViewMore = () => {
//     navigate(`/categories/${activeCategory}`);
//   };

//   const categoryColors = {
//     "Personal Care": "#e0f7fa",
//     "Health Conditions": "#e1bee7",
//     "Vitamins & Supplements": "#fff9c4",
//     "Diabetes Care": "#c8e6c9",
//     "Healthcare Devices": "#ffe0b2"
//   };

//   return (
//     <Container style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px' }}>
//       <Row>
//         <Col md={3}>
//           <h5>Shop by categories</h5>
//           <Nav variant="pills" className="flex-column">
//             {categories.map((category, index) => (
//               <Nav.Item key={index}>
//                 <Nav.Link
//                   onClick={() => setActiveCategory(category)}
//                   active={activeCategory === category}
//                   style={{
//                     cursor: 'pointer',
//                     margin: '10px 0',
//                     backgroundColor: activeCategory === category ? categoryColors[category] : '#f8f9fa',
//                     borderRadius: '10px',
//                     padding: '10px',
//                     display: 'flex',
//                     alignItems: 'center'
//                   }}
//                 >
//                   <img src={`/path/to/${category}-icon.png`} alt={category} style={{ width: '40px', marginRight: '10px' }} />
//                   {category}
//                 </Nav.Link>
//               </Nav.Item>
//             ))}
//           </Nav>
//         </Col>
//         <Col md={9} style={{ backgroundColor: categoryColors[activeCategory], borderRadius: '10px', padding: '20px' }}>
//           <Row>
//             {filteredProducts.map((product) => (
//               <Col md={4} key={product.id} style={{ marginBottom: '20px' }}>
//                 <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff' }}>
//                   <Card.Img variant="top" src={product.images[0]} style={{ height: '150px', objectFit: 'contain' }} />
//                   <Card.Body>
//                     <Card.Title>{product.name}</Card.Title>
//                     <Card.Text>{product.brand}</Card.Text>
//                     <Button variant="primary">Buy Now</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//           <div style={{ textAlign: 'right', marginTop: '20px' }}>
//             <Button variant="link" onClick={handleViewMore} style={{ color: '#007bff' }}>
//               View all {activeCategory} products &#x2192;
//             </Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default EcommerceComponent;
