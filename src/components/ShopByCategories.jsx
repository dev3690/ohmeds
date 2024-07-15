import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ShopByCategories.css';
import Product2 from '../assets/product-images/product2.webp';
import Product1 from '../assets/product-images/product1.jpg';

const categories = [
  { id: 1, name: 'Personal care' },
  { id: 2, name: 'Healthcare device' },
  { id: 3, name: 'Vitamins & supplement' },
  { id: 4, name: 'Diabetes' },
];

const products = {
  1: [
    { id: 1, name: 'Product 1', image: Product2, description: 'Description 1' },
    { id: 2, name: 'Product 2', image: Product1, description: 'Description 2' },
  ],
  2: [
    { id: 3, name: 'BP Monitors', image: Product2, description: 'Description 3' },
    { id: 4, name: 'Sterilizers', image: Product1, description: 'Description 4' },
    { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5' },
  ],
  3: [
    { id: 6, name: 'Product 3', image: Product1, description: 'Description 6' },
    { id: 7, name: 'Product 4', image: Product2, description: 'Description 7' },
  ],
  4: [
    { id: 8, name: 'Product 5', image: Product2, description: 'Description 8' },
    { id: 9, name: 'Product 6', image: Product1, description: 'Description 9' },
  ],
};

const EcommerceComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <Container style={{ backgroundColor: '#e5f7fe', padding: '20px', borderRadius: '10px' }}>
        <h3>Top Categories</h3>
      <Row>
        <Col md={3}>
          <ListGroup>
            {categories.map(category => (
              <ListGroup.Item
                key={category.id}
                action
                onClick={() => setSelectedCategory(category.id)}
                active={selectedCategory === category.id}
                style={{ cursor: 'pointer', margin: '10px 0' }}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={9}>
          <Row>
            {products[selectedCategory].map(product => (
              <Col md={4} key={product.id} style={{ marginBottom: '20px' }}>
                <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                  <Card.Img variant="top" src={product.image} style={{ height: '150px', objectFit: 'cover' }} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Button variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EcommerceComponent;
