import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProfilePage.css';
import man from '../assets/Reviews/man.png'
import { getUserData, USER, callAxiosApi } from '../utils/api_utils';
import { useEffect } from 'react';

const ProfilePage = () => {
    const [selectedSection, setSelectedSection] = useState('accountInfo');
    const [users, setUsers] = useState([]);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await callAxiosApi(getUserData);
                setUsers(response.data[1]);
                // console.log("users", users)
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);


    const renderSection = (users) => {
        switch (selectedSection) {
            case 'accountInfo':
                return <AccountInfo users={users} />;
            case 'myOrders':
                return <MyOrders />;
            case 'myWishlist':
                return <MyWishlist />;
            case 'offers':
                return <Offers />;
            default:
                return <AccountInfo users={users} />;
        }
    };




    return (
        <Container className="profile-page" style={{ marginTop: '200px' }}>
            <Row>
                <Col md={3}>
                    <Card className="user-card">
                        <Card.Body className="text-center">
                            <Card.Img variant="top" src={man} className="rounded-circle mb-1" />
                            <Card.Title>{users.name}</Card.Title>
                            <Card.Text>{users.email}</Card.Text>
                            <Card.Text>{users.gender}</Card.Text>
                        </Card.Body>
                    </Card>
                    <ListGroup className="mt-3">
                        <ListGroup.Item action onClick={(users) => setSelectedSection('accountInfo')}>Account Information</ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedSection('myOrders')}>My Orders</ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedSection('myWishlist')}>My WishList</ListGroup.Item>
                        <ListGroup.Item action onClick={() => setSelectedSection('offers')}>Offers</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <Card.Body className="text-left">
                        {renderSection(users)}
                        {/* {renderSection()} */}
                    </Card.Body>

                </Col>
            </Row>
        </Container>
    );
};

const AccountInfo = (users) => (
    <Card className="info-card" style={{ paddingBottom: '15%' }}>
        <Card.Header>Account Information</Card.Header>
        <Card.Body>
            <Card.Title>Login Information</Card.Title>
            <Card.Text>Name: {users.users.name} </Card.Text>
            <Card.Text>Email: {users.users.email}</Card.Text>
            <Card.Text>Mobile Number: {users.users.mobile}</Card.Text>
            <Card.Text>Gender: {users.users.gender}</Card.Text>
            <Button variant="primary">Edit Profile</Button>
        </Card.Body>
    </Card>
);

const MyOrders = () => (
    <Card className="info-card" style={{ paddingBottom: '20%' }}>
        <Card.Header>My Orders</Card.Header>
        <Card.Body>
            <Card.Title>Past Orders</Card.Title>
            <Card.Text>No Orders available to view.</Card.Text>
        </Card.Body>
    </Card>
);

const MyWishlist = () => (
    <Card className="info-card" style={{ paddingBottom: '20%' }}>
        <Card.Header>My Wishlist</Card.Header>
        <Card.Body>
            <Card.Title>Wishlist Items</Card.Title>
            <Card.Text>You have 3 items in your wishlist.</Card.Text>
        </Card.Body>
    </Card>
);

const Offers = () => (
    <Card className="info-card" style={{ paddingBottom: '20%' }}>
        <Card.Header>Offers</Card.Header>
        <Card.Body>
            <Card.Title>Available Offers</Card.Title>
            <Card.Text>Check out the latest offers.</Card.Text>
        </Card.Body>
    </Card>
);

export default ProfilePage;
