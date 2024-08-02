
// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ShopByCategories.css';
// import products from './ProductsData';

// const EcommerceComponent = () => {
//   const categories = [...new Set(products.map(product => product.category))];
//   const [activeCategory, setActiveCategory] = useState(categories[0]);

//   // Filter products based on active category
//   const filteredProducts = products.filter(product => product.category === activeCategory);

//   return (
//     <Container style={{ backgroundColor: '#e5f7fe', padding: '20px', borderRadius: '10px' }}>
//       <h3>Top Categories</h3>
//       <Row>
//         <Col md={3}>
//           <Nav variant="pills" className="flex-column">
//             {categories.map((category, index) => (
//               <Nav.Item key={index}>
//                 <Nav.Link
//                   onMouseEnter={() => setActiveCategory(category)}
//                   active={activeCategory === category}
//                   style={{ cursor: 'pointer', margin: '10px 0' }}
//                 >
//                   {category}
//                 </Nav.Link>
//               </Nav.Item>
//             ))}
//           </Nav>
//         </Col>
//         <Col md={9}>
//           <Row>
//             {filteredProducts.map((product) => (
//               <Col md={4} key={product.id} style={{ marginBottom: '20px' }}>
//                 <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//                   <Card.Img variant="top" src={product.images[0]} style={{ height: '150px', objectFit: 'contain' }} />
//                   <Card.Body>
//                     <Card.Title>{product.name}</Card.Title>
//                     <Card.Text>
//                       {product.description.longDescription} {/* Adjust this line to render the correct property */}
//                     </Card.Text>
//                     <Button variant="primary">Buy Now</Button>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default EcommerceComponent;



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



//  atyre ama setting padyu jema navigate krti vakhte static value as 2 id pass kriye che pn apde actually category name pass krvanau che ane productlistingpage pr je category name hoi ae category na products dekhadvana che