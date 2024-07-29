// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Button, ListGroup, Form } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ProductListingPage.css';
// import Product2 from '../assets/product-images/product2.webp';
// import Breadcrumbs from '../components/Breadcrumbs';
// import Product1 from '../assets/product-images/product1.jpg';

// const products = {
//     1: [
//         { id: 1, name: 'Product 1', image: Product2, description: 'Description 1' },
//         { id: 2, name: 'Product 2', image: Product1, description: 'Description 2' },
//     ],
//     2: [
//         { id: 3, name: 'BP Monitors', image: Product2, description: 'Description 3' },
//         { id: 4, name: 'Sterilizers', image: Product1, description: 'Description 4' },
//         { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5' },
//         { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5' },
//         { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5' },
//         { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5' },
//         { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5' },
//         { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5' },
//         { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5' },
//     ],
//     3: [
//         { id: 6, name: 'Product 3', image: Product1, description: 'Description 6' },
//         { id: 7, name: 'Product 4', image: Product2, description: 'Description 7' },
//     ],
//     4: [
//         { id: 8, name: 'Product 5', image: Product2, description: 'Description 8' },
//         { id: 9, name: 'Product 6', image: Product1, description: 'Description 9' },
//     ],
// };

// const ProductListingPage = () => {
//     const { categoryId } = useParams();
//     const [priceRange, setPriceRange] = useState([0, 20]);
//     const [inStock, setInStock] = useState(false);
//     const [onSale, setOnSale] = useState(false);
//     const [selectedBrands, setSelectedBrands] = useState([]);

//     const handlePriceChange = (e) => {
//         setPriceRange([e.target.value[0], e.target.value[1]]);
//     };

//     const handleInStockChange = () => {
//         setInStock(!inStock);
//     };

//     const handleOnSaleChange = () => {
//         setOnSale(!onSale);
//     };

//     const handleBrandChange = (brand) => {
//         setSelectedBrands(prev =>
//             prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
//         );
//     };

//     const filteredProducts = products[categoryId].filter(product => {
//         // Add filter logic based on price, inStock, onSale, and selectedBrands
//         return true; // Update this to filter products based on criteria
//     });

//     return (
//         <Container fluid>
//             <Breadcrumbs />

//             <h1>Category Section</h1>
//             <Row>
//                 <Col md={2}>
//                     <ListGroup>
//                         <ListGroup.Item>
//                             <h5>Product Categories</h5>
//                             <Form.Check type="checkbox" label="Herbs & Seasonings" />
//                             <Form.Check type="checkbox" label="Packaged Produce" />
//                             <Form.Check type="checkbox" label="Party Trays" />
//                             <Form.Check type="checkbox" label="Cuts & Sprouts" />
//                             <Form.Check type="checkbox" label="Exotic Fruits & Veggies" />
//                             <Form.Check type="checkbox" label="Fresh Fruits" />
//                             <Form.Check type="checkbox" label="Fresh Vegetables" />
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <h5>Filter by Price</h5>
//                             <Form.Group>
//                                 <Form.Label>Price: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
//                                 <Form.Control
//                                     type="range"
//                                     value={priceRange}
//                                     onChange={handlePriceChange}
//                                     min={0}
//                                     max={20}
//                                 />
//                             </Form.Group>
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <h5>Product Status</h5>
//                             <Form.Check type="checkbox" label="In Stock" checked={inStock} onChange={handleInStockChange} />
//                             <Form.Check type="checkbox" label="On Sale" checked={onSale} onChange={handleOnSaleChange} />
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <h5>Brands</h5>
//                             <Form.Check type="checkbox" label="Oreo" onChange={() => handleBrandChange('Oreo')} />
//                             <Form.Check type="checkbox" label="Quaker" onChange={() => handleBrandChange('Quaker')} />
//                             <Form.Check type="checkbox" label="Welch's" onChange={() => handleBrandChange('Welch\'s')} />
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </Col>
//                 <Col md={9}>
//                     <Row>
//                         {filteredProducts.map(product => (
//                             <Col md={3} key={product.id} style={{ marginBottom: '20px' }}>
//                                 <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
//                                     <Card.Img variant="top" src={product.image} style={{ height: '150px', objectFit: 'cover' }} />
//                                     <Card.Body>
//                                         <Card.Title>{product.name}</Card.Title>
//                                         <Card.Text>{product.description}</Card.Text>
//                                         <Button variant="primary">Buy Now</Button>
//                                     </Card.Body>
//                                 </Card>
//                             </Col>
//                         ))}
//                     </Row>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ProductListingPage;




import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductListingPage.css';
import Product2 from '../assets/product-images/product2.webp';
import Breadcrumbs from '../components/Breadcrumbs';
import Product1 from '../assets/product-images/product1.jpg';

const products = {
    1: [
        { id: 1, name: 'Product 1', image: Product2, description: 'Description 1', price: 10, rating: 4.5 },
        { id: 2, name: 'Product 2', image: Product1, description: 'Description 2', price: 15, rating: 4.0 },
    ],
    2: [
        { id: 3, name: 'BP Monitors', image: Product2, description: 'Description 3', price: 50, rating: 3.5 },
        { id: 3, name: 'BP Monitors', image: Product2, description: 'Description 3', price: 50, rating: 3.5 },
        { id: 4, name: 'Sterilizers', image: Product1, description: 'Description 4', price: 60, rating: 4.0 },
        { id: 4, name: 'Sterilizers', image: Product1, description: 'Description 4', price: 60, rating: 4.0 },
        { id: 4, name: 'Sterilizers', image: Product1, description: 'Description 4', price: 60, rating: 4.0 },
        { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, rating: 4.5 },
        { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, rating: 4.5 },
        { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, rating: 4.5 },
        { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, rating: 4.5 },
        { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, rating: 4.5 },
        { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, rating: 4.5 },
        { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, rating: 4.5 },
        { id: 5, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, rating: 4.5 },
        { id: 6, name: 'EKG Machine', image: Product2, description: 'Description 6', price: 80, rating: 5.0 },
        { id: 6, name: 'EKG Machine', image: Product2, description: 'Description 6', price: 80, rating: 5.0 },
        { id: 6, name: 'EKG Machine', image: Product2, description: 'Description 6', price: 80, rating: 5.0 },
    ],
    3: [
        { id: 6, name: 'Product 3', image: Product1, description: 'Description 6', price: 20, rating: 4.2 },
        { id: 7, name: 'Product 4', image: Product2, description: 'Description 7', price: 30, rating: 4.8 },
    ],
    4: [
        { id: 8, name: 'Product 5', image: Product2, description: 'Description 8', price: 25, rating: 4.6 },
        { id: 9, name: 'Product 6', image: Product1, description: 'Description 9', price: 35, rating: 3.8 },
    ],
};

const ProductListingPage = () => {
    const { categoryId } = useParams();
    const [priceRange, setPriceRange] = useState([0, 100]);
    const [inStock, setInStock] = useState(false);
    const [onSale, setOnSale] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [sortOption, setSortOption] = useState('relevant');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);

    useEffect(() => {
        setCurrentPage(1); // Reset to first page on filter/sort change
    }, [priceRange, inStock, onSale, selectedBrands, sortOption]);

    const handlePriceChange = (e) => {
        setPriceRange([0, e.target.value]);
    };

    const handleInStockChange = () => {
        setInStock(!inStock);
    };

    const handleOnSaleChange = () => {
        setOnSale(!onSale);
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const handleSortChange = (sortOption) => {
        setSortOption(sortOption);
    };

    const getFilteredAndSortedProducts = () => {
        let filteredProducts = products[categoryId].filter(product => {
            // Add filter logic based on price, inStock, onSale, and selectedBrands
            let matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            let matchesStock = !inStock || product.inStock;
            let matchesSale = !onSale || product.onSale;
            let matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            return matchesPrice && matchesStock && matchesSale && matchesBrand;
        });

        // Sort the filtered products
        switch (sortOption) {
            case 'high-rating':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
            case 'low-rating':
                filteredProducts.sort((a, b) => a.rating - b.rating);
                break;
            case 'low-to-high':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-to-low':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        return filteredProducts;
    };

    const filteredProducts = getFilteredAndSortedProducts();

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container fluid>
            <Breadcrumbs />


            <Row className="mb-3">
                <Col>
                    <h1>Category Section</h1>
                {/* </Col> */}
                {/* <Col> */}
                    <h5>
                        Showing {currentProducts.length} of {filteredProducts.length} products
                    </h5>
                </Col>
                <Col></Col>
                {/* <Col></Col>
                <Col></Col> */}

                <Col>
                    <Form.Group >
                        {/* <Form.Label>Sort by:</Form.Label> */}
                        Sort by:
                        <DropdownButton id="sort-dropdown" title={sortOption} style={{align: 'right'}}>
                            <Dropdown.Item onClick={() => handleSortChange('relevant')}>Relevant</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortChange('high-rating')}>High Rating</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortChange('low-rating')}>Low Rating</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortChange('low-to-high')}>Price: Low to High</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortChange('high-to-low')}>Price: High to Low</Dropdown.Item>
                        </DropdownButton>
                    </Form.Group>
                </Col>

            </Row>
            <Row>
                <Col md={2}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h5>Product Categories</h5>
                            <Form.Check type="checkbox" label="Herbs & Seasonings" />
                            <Form.Check type="checkbox" label="Packaged Produce" />
                            <Form.Check type="checkbox" label="Party Trays" />
                            <Form.Check type="checkbox" label="Cuts & Sprouts" />
                            <Form.Check type="checkbox" label="Exotic Fruits & Veggies" />
                            <Form.Check type="checkbox" label="Fresh Fruits" />
                            <Form.Check type="checkbox" label="Fresh Vegetables" />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Filter by Price</h5>
                            <Form.Group>
                                <Form.Label>Price: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
                                <Form.Control
                                    type="range"
                                    value={priceRange[1]}
                                    onChange={handlePriceChange}
                                    min={0}
                                    max={100}
                                />
                            </Form.Group>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Product Status</h5>
                            <Form.Check type="checkbox" label="In Stock" checked={inStock} onChange={handleInStockChange} />
                            <Form.Check type="checkbox" label="On Sale" checked={onSale} onChange={handleOnSaleChange} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Brands</h5>
                            <Form.Check type="checkbox" label="Oreo" onChange={() => handleBrandChange('Oreo')} />
                            <Form.Check type="checkbox" label="Quaker" onChange={() => handleBrandChange('Quaker')} />
                            <Form.Check type="checkbox" label="Welch's" onChange={() => handleBrandChange('Welch\'s')} />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <Row>
                        {currentProducts.map(product => (
                            <Col md={3} key={product.id} style={{ marginBottom: '20px' }}>
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
                    <Pagination
                        productsPerPage={productsPerPage}
                        totalProducts={filteredProducts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </Col>
            </Row>
        </Container>
    );
};

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} href="#!" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default ProductListingPage;
