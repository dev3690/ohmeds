
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductListingPage.css';
import Breadcrumbs from '../components/Breadcrumbs';
import products from './ProductsData';

const ProductListingPage = () => {
    const { categoryId } = useParams();
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [inStock, setInStock] = useState(false);
    const [onSale, setOnSale] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [sortOption, setSortOption] = useState('relevant');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);
    const [showFilterModal, setShowFilterModal] = useState(false);

    const categories = [...new Set(products.map(product => product.category))];
    const brands = [...new Set(products.map(product => product.brand))];

    console.log('Current categoryId:', categoryId);
    console.log('Available categories:', categories);

    useEffect(() => {
        setCurrentPage(1);
    }, [priceRange, inStock, onSale, selectedBrands, sortOption]);

    const handlePriceChange = (e) => {
        setPriceRange([0, parseInt(e.target.value)]);
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

    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const getFilteredAndSortedProducts = () => {
        let filteredProducts = products;

        console.log('Total products before filtering:', filteredProducts.length);

        if (categoryId && categories.includes(categoryId)) {
            filteredProducts = filteredProducts.filter(product => product.category === categoryId);
        }

        console.log('Products after category filtering:', filteredProducts.length);

        filteredProducts = filteredProducts.filter(product => {
            let matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
            let matchesStock = !inStock || product.inStock;
            let matchesSale = !onSale || product.onSale;
            let matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
            return matchesPrice && matchesStock && matchesSale && matchesBrand;
        });

        console.log('Products after all filtering:', filteredProducts.length);

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
    const openFilterModal = () => setShowFilterModal(true);
    const closeFilterModal = () => setShowFilterModal(false);
    const applyFilters = () => setShowFilterModal(false);

    return (
        <Container fluid style={{marginTop: '160px'}}>
            <Breadcrumbs />
            <Row className="mb-3">
                <Col>
                    <h1>{categoryId ? `${categoryId} Products` : 'All Products'}</h1>
                    <h5>
                        Showing {currentProducts.length} of {filteredProducts.length} products
                    </h5>
                </Col>
                <Col className="text-end">
                    <Form.Group style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <p className="mb-0 me-2">Sort by:</p>
                        <DropdownButton id="sort-dropdown" title={sortOption} style={{ marginLeft: '5px' }}>
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
                <Col md={2} className="d-none d-md-block">
                    <ListGroup>
                        <ListGroup.Item>
                            <h5>Filter by Price</h5>
                            <Form.Group>
                                <Form.Label>Price: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
                                <Form.Control
                                    type="range"
                                    value={priceRange[1]}
                                    onChange={handlePriceChange}
                                    min={0}
                                    max={1000}
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
                            {brands.map((brand) => (
                                <Form.Check
                                    type="checkbox"
                                    label={brand}
                                    key={brand}
                                    onChange={() => handleBrandChange(brand)}
                                    checked={selectedBrands.includes(brand)}
                                />
                            ))}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={9}>
                    {filteredProducts.length > 0 ? (
                        <>
                            <Row>
                                {currentProducts.map(product => (
                                    <Col xs={12} sm={6} md={4} lg={3} key={product.id} style={{ marginBottom: '20px', marginTop: '20px' }}>
                                        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                                                <Card.Img variant="top" src={product.images[0]} style={{ height: '200px', objectFit: 'contain' }} />
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                    <Card.Text>{product.description.shortDescription}</Card.Text>
                                                    <div>
                                                        <strong style={{ textDecoration: 'line-through', color: 'red' }}>${product.originalPrice}</strong>
                                                    </div>
                                                    <div>
                                                        <strong style={{ color: 'green', fontSize: '18px' }}>Our Price: ${product.price}</strong>
                                                    </div>
                                                    <div>
                                                        <strong>Rating: {product.rating} ⭐</strong>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                    <ul className="pagination">
                                        {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map(number => (
                                            <li key={number} className={`page-item ${currentPage === number + 1 ? 'active' : ''}`}>
                                                <a onClick={() => paginate(number + 1)} href="#" className="page-link">
                                                    {number + 1}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <p>No products found. {categoryId && !categories.includes(categoryId) ? `Category "${categoryId}" does not exist.` : 'Try adjusting your filters.'}</p>
                    )}
                </Col>
            </Row>

            <Button
                variant="primary"
                className="d-md-none floating-filter-btn"
                onClick={openFilterModal}
            >
                <FaFilter />
            </Button>

            <Modal show={showFilterModal} onHide={closeFilterModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add filter options here, similar to the sidebar */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeFilterModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={applyFilters}>
                        Apply Filters
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default ProductListingPage;
