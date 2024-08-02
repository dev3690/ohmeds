import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProfilePage.css';
import man from '../assets/Reviews/man.png'

const ProfilePage = () => {
    const [selectedSection, setSelectedSection] = useState('accountInfo');

    const renderSection = () => {
        switch (selectedSection) {
            case 'accountInfo':
                return <AccountInfo />;
            case 'myOrders':
                return <MyOrders />;
            case 'myWishlist':
                return <MyWishlist />;
            case 'offers':
                return <Offers />;
            default:
                return <AccountInfo />;
        }
    };

    return (
        <Container  className="profile-page" style={{ marginTop: '200px' }}>
            <Row>
                <Col md={3}>
                    <Card className="user-card">
                        <Card.Body className="text-center">
                            <Card.Img variant="top" src={man} className="rounded-circle mb-1" />
                            <Card.Title>Dev Panchal</Card.Title>
                            <Card.Text>demo@mail.com.com</Card.Text>
                            <Card.Text>+91-1234568790</Card.Text>
                        </Card.Body>
                    </Card>
                    <ListGroup className="mt-3">
                        <ListGroup.Item action onClick={() => setSelectedSection('accountInfo')}>Account Information</ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedSection('myOrders')}>My Orders</ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedSection('myWishlist')}>My WishList</ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedSection('offers')}>Offers</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                <Card.Body className="text-left">

                    {renderSection()}
                    </Card.Body>

                </Col>
            </Row>
        </Container>
    );
};

const AccountInfo = () => (
    <Card className="info-card" style={{paddingBottom : '15%'}}>
        <Card.Header>Account Information</Card.Header>
        <Card.Body>
            <Card.Title>Login Information</Card.Title>
            <Card.Text>Name: Dev Panchal </Card.Text>
            <Card.Text>Email: demo@mail.com.com</Card.Text>
            <Card.Text>Mobile Number: +91-1234567890</Card.Text>
            <Card.Text>Gender: Male</Card.Text>
            <Button variant="primary">Edit Profile</Button>
        </Card.Body>
    </Card>
);

const MyOrders = () => (
    <Card className="info-card" style={{paddingBottom : '20%'}}>
        <Card.Header>My Orders</Card.Header>
        <Card.Body>
            <Card.Title>Past Orders</Card.Title>
            <Card.Text>No Orders available to view.</Card.Text>
        </Card.Body>
    </Card>
);

const MyWishlist = () => (
    <Card className="info-card" style={{paddingBottom : '20%'}}>
        <Card.Header>My Wishlist</Card.Header>
        <Card.Body>
            <Card.Title>Wishlist Items</Card.Title>
            <Card.Text>You have 3 items in your wishlist.</Card.Text>
        </Card.Body>
    </Card>
);

const Offers = () => (
    <Card className="info-card" style={{paddingBottom : '20%'}}>
        <Card.Header>Offers</Card.Header>
        <Card.Body>
            <Card.Title>Available Offers</Card.Title>
            <Card.Text>Check out the latest offers.</Card.Text>
        </Card.Body>
    </Card>
);

export default ProfilePage;
