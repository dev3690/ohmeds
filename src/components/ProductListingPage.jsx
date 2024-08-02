
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ProductListingPage.css';
import Product2 from '../assets/product-images/product2.webp';
import Breadcrumbs from '../components/Breadcrumbs';
import Product1 from '../assets/product-images/product1.jpg';

const products = {
    1: [
        { id: 1, name: 'Product 1', image: Product2, description: 'Description 1', price: 10, originalPrice: 12, rating: 4.5 },
        { id: 2, name: 'Product 2', image: Product1, description: 'Description 2', price: 15, originalPrice: 18, rating: 4.0 },
    ],
    2: [
        { id: 13, name: 'BP Monitors', image: Product2, description: 'Description 3', price: 50, originalPrice: 60, rating: 3.5 },
        { id: 14, name: 'BP Monitors', image: Product2, description: 'Description 3', price: 50, originalPrice: 60, rating: 3.5 },
        { id: 15, name: 'Sterilizers', image: Product1, description: 'Description 4', price: 60, originalPrice: 70, rating: 4.0 },
        { id: 16, name: 'Sterilizers', image: Product1, description: 'Description 4', price: 60, originalPrice: 70, rating: 4.0 },
        { id: 17, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, originalPrice: 85, rating: 4.5 },
        { id: 18, name: 'EKG Machine', image: Product2, description: 'Description 6', price: 80, originalPrice: 95, rating: 5.0 },
        { id: 19, name: 'EKG Machine', image: Product2, description: 'Description 5', price: 70, originalPrice: 85, rating: 4.5 },
        { id: 21, name: 'Product 4', image: Product2, description: 'Description 7', price: 30, originalPrice: 35, rating: 4.8 },
        { id: 22, name: 'Product 4', image: Product2, description: 'Description 7', price: 30, originalPrice: 35, rating: 4.8 },
        { id: 20, name: 'EKG Machine', image: Product2, description: 'Description 6', price: 80, originalPrice: 95, rating: 5.0 },
    ],
    3: [
        { id: 6, name: 'Product 3', image: Product1, description: 'Description 6', price: 20, originalPrice: 25, rating: 4.2 },
        { id: 7, name: 'Product 4', image: Product2, description: 'Description 7', price: 30, originalPrice: 35, rating: 4.8 },
    ],
    4: [
        { id: 8, name: 'Product 5', image: Product2, description: 'Description 8', price: 25, originalPrice: 30, rating: 4.6 },
        { id: 9, name: 'Product 6', image: Product1, description: 'Description 9', price: 35, originalPrice: 40, rating: 3.8 },
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
    const [showFilterModal, setShowFilterModal] = useState(false);

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

    const openFilterModal = () => setShowFilterModal(true);
    const closeFilterModal = () => setShowFilterModal(false);
    const applyFilters = () => {
        setShowFilterModal(false);
        // Additional logic to apply filters if needed
    };

    return (
        <Container fluid style={{marginTop: '160px'}}>
            <Breadcrumbs />
            <Row className="mb-3">
                <Col>
                    <h1>Category Section</h1>
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
                            <Col xs={12} sm={6} md={4} lg={3} key={product.id} style={{ marginBottom: '20px', marginTop: '20px' }}>
                                <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                                    <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <div>
                                            <strong style={{ textDecoration: 'line-through', color: 'red' }}>${product.originalPrice}</strong>
                                        </div>
                                        <div>
                                            <strong style={{ color: 'green', fontSize: '18px' }}>Our Price: ${product.price}</strong>
                                        </div>
                                        <div>
                                            <strong>Rating: {product.rating} ⭐</strong>
                                        </div>
                                        <Button variant="primary">Add to Cart</Button>
                                    </Card.Body>
                                </Card>
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
                </Col>
            </Row>

            {/* Filter Button for Mobile/Tablet */}
            <Button
                variant="primary"
                className="d-md-none floating-filter-btn"
                onClick={openFilterModal}
            >
                <FaFilter />
            </Button>

            {/* Filter Modal */}
            <Modal show={showFilterModal} onHide={closeFilterModal} style={{marginTop: '130px'}}  >
                <Modal.Header closeButton>
                    <Modal.Title>Filter Products</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, ListGroup, Form, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { FaFilter } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ProductListingPage.css';
// import Product2 from '../assets/product-images/product2.webp';
// import Breadcrumbs from '../components/Breadcrumbs';
// import Product1 from '../assets/product-images/product1.jpg';

// const products = {
//     1: [
//         { id: 1, name: 'Product 1', image: Product2, description: 'Description 1', price: 10, originalPrice: 12, rating: 4.5 },
//         { id: 2, name: 'Product 2', image: Product1, description: 'Description 2', price: 15, originalPrice: 18, rating: 4.0 },
//     ],
//     2: [
//         { id: 13, name: 'BP Monitors', image: Product2, description: 'Description 3', price: 50, originalPrice: 60, rating: 3.5 },
//         // Additional products...
//     ],
//     3: [
//         { id: 6, name: 'Product 3', image: Product1, description: 'Description 6', price: 20, originalPrice: 25, rating: 4.2 },
//         // Additional products...
//     ],
//     4: [
//         { id: 8, name: 'Product 5', image: Product2, description: 'Description 8', price: 25, originalPrice: 30, rating: 4.6 },
//         // Additional products...
//     ],
// };

// const ProductListingPage = () => {
//     const { categoryId } = useParams();
//     const [priceRange, setPriceRange] = useState([0, 100]);
//     const [inStock, setInStock] = useState(false);
//     const [onSale, setOnSale] = useState(false);
//     const [selectedBrands, setSelectedBrands] = useState([]);
//     const [sortOption, setSortOption] = useState('relevant');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [productsPerPage] = useState(6);
//     const [showFilterModal, setShowFilterModal] = useState(false);

//     useEffect(() => {
//         setCurrentPage(1); // Reset to first page on filter/sort change
//     }, [priceRange, inStock, onSale, selectedBrands, sortOption]);

// const handlePriceChange = (e) => {
//     setPriceRange([0, e.target.value]);
// };

// const handleInStockChange = () => {
//     setInStock(!inStock);
// };

// const handleOnSaleChange = () => {
//     setOnSale(!onSale);
// };

// const handleBrandChange = (brand) => {
//     setSelectedBrands(prev =>
//         prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
//     );
// };

// const handleSortChange = (sortOption) => {
//     setSortOption(sortOption);
// };

//     const getFilteredAndSortedProducts = () => {
//         const categoryProducts = products[categoryId];

//         // Ensure categoryProducts exists before filtering and sorting
//         if (!categoryProducts) {
//             return [];
//         }

//         let filteredProducts = categoryProducts.filter(product => {
//             let matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
//             let matchesStock = !inStock || product.inStock;
//             let matchesSale = !onSale || product.onSale;
//             let matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
//             return matchesPrice && matchesStock && matchesSale && matchesBrand;
//         });

//         // Sort the filtered products
//         switch (sortOption) {
//             case 'high-rating':
//                 filteredProducts.sort((a, b) => b.rating - a.rating);
//                 break;
//             case 'low-rating':
//                 filteredProducts.sort((a, b) => a.rating - b.rating);
//                 break;
//             case 'low-to-high':
//                 filteredProducts.sort((a, b) => a.price - b.price);
//                 break;
//             case 'high-to-low':
//                 filteredProducts.sort((a, b) => b.price - a.price);
//                 break;
//             default:
//                 break;
//         }

//         return filteredProducts;
//     };

//     const filteredProducts = getFilteredAndSortedProducts();

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const openFilterModal = () => setShowFilterModal(true);
//     const closeFilterModal = () => setShowFilterModal(false);
//     const applyFilters = () => {
//         setShowFilterModal(false);
//     };

//     return (
//         <Container fluid style={{marginTop: '160px'}}>
//             <Breadcrumbs />
//             <Row className="mb-3">
//                 <Col>
//                     <h1>Category Section</h1>
//                     <h5>
//                         Showing {currentProducts.length} of {filteredProducts.length} products
//                     </h5>
//                 </Col>
//                 <Col className="text-end">
//                     <Form.Group style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
//                         <p className="mb-0 me-2">Sort by:</p>
//                         <DropdownButton id="sort-dropdown" title={sortOption} style={{ marginLeft: '5px' }}>
//                             <Dropdown.Item onClick={() => handleSortChange('relevant')}>Relevant</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('high-rating')}>High Rating</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('low-rating')}>Low Rating</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('low-to-high')}>Price: Low to High</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('high-to-low')}>Price: High to Low</Dropdown.Item>
//                         </DropdownButton>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col md={2} className="d-none d-md-block">
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
//                                     value={priceRange[1]}
//                                     onChange={handlePriceChange}
//                                     min={0}
//                                     max={100}
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
//                     {filteredProducts.length > 0 ? (
//                         <>
//                             <Row>
//                                 {currentProducts.map(product => (
//                                     <Col xs={12} sm={6} md={4} lg={3} key={product.id} style={{ marginBottom: '20px', marginTop: '20px' }}>
//                                         <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
//                                             <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
//                                             <Card.Body>
//                                                 <Card.Title style={{ fontWeight: 'bold', fontSize: '18px' }}>{product.name}</Card.Title>
//                                                 <Card.Text style={{ color: '#777' }}>{product.description}</Card.Text>
//                                                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                                     <Button variant="primary" style={{ borderRadius: '5px', padding: '10px 20px' }}>View Details</Button>
//                                                     <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>${product.price}</p>
//                                                 </div>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                             {/* Pagination logic here */}
//                         </>
//                     ) : (
//                         <p>No products found for this category.</p>
//                     )}
//                 </Col>
//             </Row>
//             {/* Filter modal implementation */}
//         </Container>
//     );
// };

// export default ProductListingPage;



// ------------------------------------------------------------------------------------


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, ListGroup, Form, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ProductListingPage.css';
// import products from './ProductsData'; // Importing product data from ProductsData component
// import Breadcrumbs from '../components/Breadcrumbs';

// const ProductListingPage = () => {
//     const { categoryId } = useParams();
//     const [priceRange, setPriceRange] = useState([0, 100]);
//     const [inStock, setInStock] = useState(false);
//     const [onSale, setOnSale] = useState(false);
//     const [selectedBrands, setSelectedBrands] = useState([]);
//     const [sortOption, setSortOption] = useState('relevant');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [productsPerPage] = useState(6);
//     const [showFilterModal, setShowFilterModal] = useState(false);

//     const categories = [...new Set(products.map(product => product.category))];
//     const brands = [...new Set(products.map(product => product.brand))];

//     const handlePriceChange = (e) => {
//         setPriceRange([0, e.target.value]);
//     };

//     const handleInStockChange = () => {
//         setInStock(!inStock);
//         console.log(categoryId)
//     };

//     const handleOnSaleChange = () => {
//         setOnSale(!onSale);
//     };

//     const handleBrandChange = (brand) => {
//         setSelectedBrands(prev =>
//             prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
//         );
//     };

//     const handleSortChange = (sortOption) => {
//         setSortOption(sortOption);
//     };



//     // Filter and sort products based on selected filters and sorting options
//     const getFilteredAndSortedProducts = () => {
//         const categoryProducts = products.filter(product => product.category === categoryId);

//         if (!categoryProducts.length) return [];

//         let filteredProducts = categoryProducts.filter(product => {
//             let matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
//             let matchesStock = !inStock || product.inStock;
//             let matchesSale = !onSale || product.onSale;
//             let matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
//             return matchesPrice && matchesStock && matchesSale && matchesBrand;
//         });

//         // Sort the filtered products
//         switch (sortOption) {
//             case 'high-rating':
//                 filteredProducts.sort((a, b) => b.rating - a.rating);
//                 break;
//             case 'low-rating':
//                 filteredProducts.sort((a, b) => a.rating - b.rating);
//                 break;
//             case 'low-to-high':
//                 filteredProducts.sort((a, b) => a.price - b.price);
//                 break;
//             case 'high-to-low':
//                 filteredProducts.sort((a, b) => b.price - a.price);
//                 break;
//             default:
//                 break;
//         }

//         return filteredProducts;
//     };

//     const filteredProducts = getFilteredAndSortedProducts();
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const openFilterModal = () => setShowFilterModal(true);
//     const closeFilterModal = () => setShowFilterModal(false);
//     const applyFilters = () => setShowFilterModal(false);

//     return (
//         <Container fluid style={{ marginTop: '160px' }}>
//             <Breadcrumbs />
//             <Row className="mb-3">
//                 <Col>
//                     <h1>{categoryId} Products</h1>
//                     <h5>
//                         Showing {currentProducts.length} of {filteredProducts.length} products
//                     </h5>
//                 </Col>
//                 <Col className="text-end">
//                     <Form.Group style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
//                         <p className="mb-0 me-2">Sort by:</p>
//                         <DropdownButton id="sort-dropdown" title={sortOption} style={{ marginLeft: '5px' }}>
//                             <Dropdown.Item onClick={() => handleSortChange('relevant')}>Relevant</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('high-rating')}>High Rating</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('low-rating')}>Low Rating</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('low-to-high')}>Price: Low to High</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('high-to-low')}>Price: High to Low</Dropdown.Item>
//                         </DropdownButton>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col md={2} className="d-none d-md-block">
//                     <ListGroup>
//                         <ListGroup.Item>
//                             <h5>Product Categories</h5>
//                             {/* Add dynamic checkboxes for categories */}
//                             {categories.map((category) => (
//                                 <Form.Check
//                                     type="checkbox"
//                                     label={category}
//                                     key={category}
//                                     onChange={() => handleCategoryChange(category)}
//                                 />
//                             ))}
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <h5>Filter by Price</h5>
//                             <Form.Group>
//                                 <Form.Label>Price: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
//                                 <Form.Control
//                                     type="range"
//                                     value={priceRange[1]}
//                                     onChange={handlePriceChange}
//                                     min={0}
//                                     max={100}
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
//                             {/* Add dynamic checkboxes for brands */}
//                             {brands.map((brand) => (
//                                 <Form.Check
//                                     type="checkbox"
//                                     label={brand}
//                                     key={brand}
//                                     onChange={() => handleBrandChange(brand)}
//                                 />
//                             ))}
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </Col>
//                 <Col md={9}>
//                     {filteredProducts.length > 0 ? (
//                         <>
//                             <Row>
//                                 {currentProducts.map(product => (
//                                     <Col xs={12} sm={6} md={4} lg={3} key={product.id} style={{ marginBottom: '20px', marginTop: '20px' }}>
//                                         <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
//                                             <Card.Img variant="top" src={product.images[0]} style={{ height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
//                                             <Card.Body>
//                                                 <Card.Title style={{ fontWeight: 'bold', fontSize: '18px' }}>{product.name}</Card.Title>
//                                                 <Card.Text style={{ color: '#777' }}>{product.description.longDescription}</Card.Text>
//                                                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                                     <Button variant="primary" style={{ borderRadius: '5px', padding: '10px 20px' }}>View Details</Button>
//                                                     <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>${product.price}</p>
//                                                 </div>
//                                             </Card.Body>
                                            
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </>
//                     ) : (
//                         <p>No products found for this category. </p>
//                     )}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ProductListingPage;


// -------------------------------------------------------------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card, Button, ListGroup, Form, DropdownButton, Dropdown, Modal } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/ProductListingPage.css';
// import products from './ProductsData'; // Importing product data from ProductsData component
// import Breadcrumbs from '../components/Breadcrumbs';

// const ProductListingPage = () => {
//     const { categoryId } = useParams();
//     const [priceRange, setPriceRange] = useState([0, 100]);
//     const [inStock, setInStock] = useState(false);
//     const [onSale, setOnSale] = useState(false);
//     const [selectedBrands, setSelectedBrands] = useState([]);
//     const [sortOption, setSortOption] = useState('relevant');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [productsPerPage] = useState(6);
//     const [showFilterModal, setShowFilterModal] = useState(false);

//     const categories = [...new Set(products.map(product => product.category))];
//     const brands = [...new Set(products.map(product => product.brand))];

//     const handlePriceChange = (e) => {
//         setPriceRange([0, e.target.value]);
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

//     const handleSortChange = (sortOption) => {
//         setSortOption(sortOption);
//     };

//     // Filter and sort products based on selected filters and sorting options
//     const getFilteredAndSortedProducts = () => {
//         const categoryProducts = products.filter(product => product.category === categoryId);

//         if (!categoryProducts.length) return [];

//         let filteredProducts = categoryProducts.filter(product => {
//             let matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
//             let matchesStock = !inStock || product.inStock;
//             let matchesSale = !onSale || product.onSale;
//             let matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
//             return matchesPrice && matchesStock && matchesSale && matchesBrand;
//         });

//         // Sort the filtered products
//         switch (sortOption) {
//             case 'high-rating':
//                 filteredProducts.sort((a, b) => b.rating - a.rating);
//                 break;
//             case 'low-rating':
//                 filteredProducts.sort((a, b) => a.rating - b.rating);
//                 break;
//             case 'low-to-high':
//                 filteredProducts.sort((a, b) => a.price - b.price);
//                 break;
//             case 'high-to-low':
//                 filteredProducts.sort((a, b) => b.price - a.price);
//                 break;
//             default:
//                 break;
//         }

//         return filteredProducts;
//     };

//     const filteredProducts = getFilteredAndSortedProducts();
//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const openFilterModal = () => setShowFilterModal(true);
//     const closeFilterModal = () => setShowFilterModal(false);
//     const applyFilters = () => setShowFilterModal(false);

//     // Check if there are any products in the selected category
//     const hasProductsInCategory = products.some(product => product.category === categoryId);

//     return (
//         <Container fluid style={{ marginTop: '160px' }}>
//             <Breadcrumbs />
//             <Row className="mb-3">
//                 <Col>
//                     <h1>{categoryId} Products</h1>
//                     <h5>
//                         Showing {currentProducts.length} of {filteredProducts.length} products
//                     </h5>
//                 </Col>
//                 <Col className="text-end">
//                     <Form.Group style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
//                         <p className="mb-0 me-2">Sort by:</p>
//                         <DropdownButton id="sort-dropdown" title={sortOption} style={{ marginLeft: '5px' }}>
//                             <Dropdown.Item onClick={() => handleSortChange('relevant')}>Relevant</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('high-rating')}>High Rating</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('low-rating')}>Low Rating</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('low-to-high')}>Price: Low to High</Dropdown.Item>
//                             <Dropdown.Item onClick={() => handleSortChange('high-to-low')}>Price: High to Low</Dropdown.Item>
//                         </DropdownButton>
//                     </Form.Group>
//                 </Col>
//             </Row>

//             <Row>
//                 <Col md={2} className="d-none d-md-block">
//                     <ListGroup>
//                         <ListGroup.Item>
//                             <h5>Product Categories</h5>
//                             {/* Add dynamic checkboxes for categories */}
//                             {categories.map((category) => (
//                                 <Form.Check
//                                     type="checkbox"
//                                     label={category}
//                                     key={category}
//                                     onChange={() => handleCategoryChange(category)}
//                                 />
//                             ))}
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <h5>Filter by Price</h5>
//                             <Form.Group>
//                                 <Form.Label>Price: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
//                                 <Form.Control
//                                     type="range"
//                                     value={priceRange[1]}
//                                     onChange={handlePriceChange}
//                                     min={0}
//                                     max={100}
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
//                             {/* Add dynamic checkboxes for brands */}
//                             {brands.map((brand) => (
//                                 <Form.Check
//                                     type="checkbox"
//                                     label={brand}
//                                     key={brand}
//                                     onChange={() => handleBrandChange(brand)}
//                                 />
//                             ))}
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </Col>
//                 <Col md={9}>
//                     {hasProductsInCategory ? (
//                         <>
//                             <Row>
//                                 {currentProducts.map(product => (
//                                     <Col xs={12} sm={6} md={4} lg={3} key={product.id} style={{ marginBottom: '20px', marginTop: '20px' }}>
//                                         <Card style={{ width: '100%', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
//                                             <Card.Img variant="top" src={product.images[0]} style={{ height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
//                                             <Card.Body>
//                                                 <Card.Title style={{ fontWeight: 'bold', fontSize: '18px' }}>{product.name}</Card.Title>
//                                                 <Card.Text style={{ color: '#777' }}>{product.description.longDescription}</Card.Text>
//                                                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                                                     <Button variant="primary" style={{ borderRadius: '5px', padding: '10px 20px' }}>View Details</Button>
//                                                     <p style={{ margin: '0', fontSize: '18px', fontWeight: 'bold' }}>${product.price}</p>
//                                                 </div>
//                                             </Card.Body>
//                                         </Card>
//                                     </Col>
//                                 ))}
//                             </Row>
//                         </>
//                     ) : (
//                         <p>No products found for this category. </p>
//                     )}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default ProductListingPage;
