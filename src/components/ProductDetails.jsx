import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import ReactImageMagnify from 'react-image-magnify';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import products from '../components/ProductsData';
import Breadcrumbs from '../components/Breadcrumbs';
import '../styles/ProductDetails.css';
import ProductsCards from './ProductsCards';
import CustomerReviews from './CustomerReviews';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const [selectedSection, setSelectedSection] = useState('description');
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(product?.images[0]);

    useEffect(() => {
        if (product && product.images) {
            const interval = setInterval(() => {
                setSelectedImageIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % product.images.length;
                    setSelectedImage(product.images[newIndex]);
                    return newIndex;
                });
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [product]);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleImageClick = (index) => {
        setSelectedImage(product.images[index]);
        setSelectedImageIndex(index);
    };

    return (
        <>
            <Breadcrumbs />
            <div className="product-detail-container">
                <div className="product-detail-carousel">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: product.name,
                                isFluidWidth: true,
                                src: selectedImage,
                            },
                            largeImage: {
                                src: selectedImage,
                                width: 1200,
                                height: 1800,
                            },
                            enlargedImageContainerStyle: { zIndex: 9 },
                            isHintEnabled: true,
                        }}
                    />
                    <div className="product-preview-images">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Preview ${index}`}
                                className={`preview-image ${selectedImageIndex === index ? 'active' : ''}`}
                                onClick={() => handleImageClick(index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="product-detail-info">
                    <div className="product-detail-header">
                        {product.badge && (
                            <div className="product-sale-tag">
                                <LocalOfferIcon fontSize="small" /> {product.badge}
                            </div>
                        )}
                        <h1>{product.name}</h1>
                        <div className="product-reviews">({product.rating} ⭐)</div>
                    </div>
                    <div className="product-pricing">
                        <div className="product-price-sale">${product.price}</div>
                        <div className="product-price-original">${product.originalPrice}</div>
                        <div className="product-price-discount">{`${((1 - product.price / product.originalPrice) * 100).toFixed(0)}% Off`}</div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                    <div className="product-weight-options">
                        <Button variant="outlined">50g</Button>
                        <Button variant="outlined">60g</Button>
                        <Button variant="outlined">80g</Button>
                        <Button variant="outlined">100g</Button>
                    </div>
                    <div className="product-actions">
                        <Button variant="contained" color="primary">
                            <ShoppingCartIcon /> Add to cart
                        </Button>
                        <Button variant="contained" color="secondary">
                            Buy Now
                        </Button>
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>
                    </div>
                    <div className="product-tags">
                        <LocalOfferIcon /> {product.category}, {product.brand}
                    </div>
                    <div className="product-details">
                        <p>Type: Organic</p>
                        <p>SKU: FWM15VKT</p>
                        <p>MFG: Jun 4, 2022</p>
                        <p>LIFE: 70 days</p>
                        <p>Stock: 8 Items In Stock</p>
                    </div>
                </div>
            <div className="product-description-container">
                <div className="product-description-tabs">
                    <Button onClick={() => setSelectedSection('description')}>Description</Button>
                    <Button onClick={() => setSelectedSection('keyBenefits')}>Key Benefits</Button>
                    <Button onClick={() => setSelectedSection('ingredients')}>Ingredients</Button>
                    <Button onClick={() => setSelectedSection('sideEffects')}>Side Effects</Button>
                    <Button onClick={() => setSelectedSection('howToUse')}>How to Use</Button>
                </div>
                <div className="product-description-content">
                    {selectedSection === 'description' && (
                        <>
                            <h2>Description</h2>
                            <p>{product.description.longDescription}</p>
                            <h3>Facts</h3>
                            <ul>
                                {product.description.facts.map((fact, index) => (
                                    <li key={index}>{fact}</li>
                                ))}
                            </ul>
                            <h3>Table of Contents</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nutrient</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(product.description.tableContent).map(([nutrient, amount], index) => (
                                        <tr key={index}>
                                            <td>{nutrient}</td>
                                            <td>{amount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )}
                    {selectedSection === 'keyBenefits' && (
                        <>
                            <h2>Key Benefits</h2>
                            <p>{product.keyBenefits}</p>
                        </>
                    )}
                    {selectedSection === 'ingredients' && (
                        <>
                            <h2>Ingredients</h2>
                            <p>{product.ingredients}</p>
                        </>
                    )}
                    {selectedSection === 'sideEffects' && (
                        <>
                            <h2>Side Effects</h2>
                            <p>{product.sideEffects}</p>
                        </>
                    )}
                    {selectedSection === 'howToUse' && (
                        <>
                            <h2>How to Use</h2>
                            <p>{product.howToUse}</p>
                        </>
                    )}
                </div>
            </div>
            </div>
                <ProductsCards heading="Similar Products"/>
                <CustomerReviews />


        </>
    );
};

export default ProductDetail;




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import ReactImageMagnify from 'react-image-magnify';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Button, IconButton, TextField } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import products from '../components/ProductsData';
// import Breadcrumbs from '../components/Breadcrumbs';
// import '../styles/ProductDetails.css';
// import ProductsCards from './ProductsCards';
// import product1 from '../assets/product-images/product1.jpg'
// import product2 from '../assets/product-images/product2.webp'

// const ProductDetail = () => {
//     const { id } = useParams();
//     const product = products.find((p) => p.id === parseInt(id));
//     const [selectedSection, setSelectedSection] = useState('description');
//     const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//     const [selectedImage, setSelectedImage] = useState(product?.images[0]);
//     const [reviews, setReviews] = useState([
//         {
//             name: 'Murali Naik',
//             date: 'October 4, 2020',
//             rating: 5,
//             review: 'Very useful, worth the buy. Good for health, no side effects.',
//             images: [
//                 '/images/product1.jpg',
//                 '/images/product2.jpg',
//                 '/images/product3.jpg',
//             ],
//         },
//         {
//             name: 'Birju',
//             date: 'October 4, 2020',
//             rating: 5,
//             review: 'Very useful, worth the buy. Good for health, no side effects.',
//             images: [
//                 product1,
//                 product2,
//                 product1,
//             ],
//         },
//         {
//             name: 'Sanju',
//             date: 'October 4, 2020',
//             rating: 5,
//             review: 'Very useful, worth the buy. Good for health, no side effects.',
//             images: [
//                 '/images/product1.jpg',
//                 '/images/product2.jpg',
//                 '/images/product3.jpg',
//             ],
//         },
//         // Add more reviews here
//     ]);

//     useEffect(() => {
//         if (product && product.images) {
//             const interval = setInterval(() => {
//                 setSelectedImageIndex((prevIndex) => {
//                     const newIndex = (prevIndex + 1) % product.images.length;
//                     setSelectedImage(product.images[newIndex]);
//                     return newIndex;
//                 });
//             }, 3000);
//             return () => clearInterval(interval);
//         }
//     }, [product]);

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     const handleImageClick = (index) => {
//         setSelectedImage(product.images[index]);
//         setSelectedImageIndex(index);
//     };

//     return (
//         <>
//             <Breadcrumbs />
//             <div className="product-detail-container">
//                 <div className="product-detail-carousel">
//                     <ReactImageMagnify
//                         {...{
//                             smallImage: {
//                                 alt: product.name,
//                                 isFluidWidth: true,
//                                 src: selectedImage,
//                             },
//                             largeImage: {
//                                 src: selectedImage,
//                                 width: 1200,
//                                 height: 1800,
//                             },
//                             enlargedImageContainerStyle: { zIndex: 9 },
//                             isHintEnabled: true,
//                         }}
//                     />
//                     <div className="product-preview-images">
//                         {product.images.map((img, index) => (
//                             <img
//                                 key={index}
//                                 src={img}
//                                 alt={`Preview ${index}`}
//                                 className={`preview-image ${selectedImageIndex === index ? 'active' : ''}`}
//                                 onClick={() => handleImageClick(index)}
//                             />
//                         ))}
//                     </div>
//                 </div>
//                 <div className="product-detail-info">
//                     <div className="product-detail-header">
//                         {product.badge && (
//                             <div className="product-sale-tag">
//                                 <LocalOfferIcon fontSize="small" /> {product.badge}
//                             </div>
//                         )}
//                         <h1>{product.name}</h1>
//                         <div className="product-reviews">({product.rating} ⭐)</div>
//                     </div>
//                     <div className="product-pricing">
//                         <div className="product-price-sale">${product.price}</div>
//                         <div className="product-price-original">${product.originalPrice}</div>
//                         <div className="product-price-discount">{`${((1 - product.price / product.originalPrice) * 100).toFixed(0)}% Off`}</div>
//                     </div>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//                     <div className="product-weight-options">
//                         <Button variant="outlined">50g</Button>
//                         <Button variant="outlined">60g</Button>
//                         <Button variant="outlined">80g</Button>
//                         <Button variant="outlined">100g</Button>
//                     </div>
//                     <div className="product-actions">
//                         <Button variant="contained" color="primary">
//                             <ShoppingCartIcon /> Add to cart
//                         </Button>
//                         <Button variant="contained" color="secondary">
//                             Buy Now
//                         </Button>
//                         <IconButton>
//                             <FavoriteBorderIcon />
//                         </IconButton>
//                     </div>
//                     <div className="product-tags">
//                         <LocalOfferIcon /> {product.category}, {product.brand}
//                     </div>
//                     <div className="product-details">
//                         <p>Type: Organic</p>
//                         <p>SKU: FWM15VKT</p>
//                         <p>MFG: Jun 4, 2022</p>
//                         <p>LIFE: 70 days</p>
//                         <p>Stock: 8 Items In Stock</p>
//                     </div>
//                 </div>
//                 <div className="product-description-container">
//                     <div className="product-description-tabs">
//                         <Button onClick={() => setSelectedSection('description')}>Description</Button>
//                         <Button onClick={() => setSelectedSection('keyBenefits')}>Key Benefits</Button>
//                         <Button onClick={() => setSelectedSection('ingredients')}>Ingredients</Button>
//                         <Button onClick={() => setSelectedSection('sideEffects')}>Side Effects</Button>
//                         <Button onClick={() => setSelectedSection('howToUse')}>How to Use</Button>
//                     </div>
//                     <div className="product-description-content">
//                         {selectedSection === 'description' && (
//                             <>
//                                 <h2>Description</h2>
//                                 <p>{product.description.longDescription}</p>
//                                 <h3>Facts</h3>
//                                 <ul>
//                                     {product.description.facts.map((fact, index) => (
//                                         <li key={index}>{fact}</li>
//                                     ))}
//                                 </ul>
//                                 <h3>Table of Contents</h3>
//                                 <table>
//                                     <thead>
//                                         <tr>
//                                             <th>Nutrient</th>
//                                             <th>Amount</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {Object.entries(product.description.tableContent).map(([nutrient, amount], index) => (
//                                             <tr key={index}>
//                                                 <td>{nutrient}</td>
//                                                 <td>{amount}</td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </>
//                         )}
//                         {selectedSection === 'keyBenefits' && (
//                             <>
//                                 <h2>Key Benefits</h2>
//                                 <p>{product.keyBenefits}</p>
//                             </>
//                         )}
//                         {selectedSection === 'ingredients' && (
//                             <>
//                                 <h2>Ingredients</h2>
//                                 <p>{product.ingredients}</p>
//                             </>
//                         )}
//                         {selectedSection === 'sideEffects' && (
//                             <>
//                                 <h2>Side Effects</h2>
//                                 <p>{product.sideEffects}</p>
//                             </>
//                         )}
//                         {selectedSection === 'howToUse' && (
//                             <>
//                                 <h2>How to Use</h2>
//                                 <p>{product.howToUse}</p>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Customer Reviews Section */}
//             <div className="customer-reviews-section">
//                 <h2>Customer Reviews</h2>
//                 <div className="review-stats">
//                     <div className="average-rating">
//                         <span className="rating">{product.rating}</span>
//                         <span> out of 5 stars</span>
//                     </div>
//                     <div className="review-bars">
//                         <div className="review-bar">
//                             <span>5 stars</span>
//                             <div className="bar">
//                                 <div className="bar-fill" style={{ width: '54%' }}></div>
//                             </div>
//                             <span>54%</span>
//                         </div>
//                         <div className="review-bar">
//                             <span>4 stars</span>
//                             <div className="bar">
//                                 <div className="bar-fill" style={{ width: '46%' }}></div>
//                             </div>
//                             <span>46%</span>
//                         </div>
//                         <div className="review-bar">
//                             <span>3 stars</span>
//                             <div className="bar">
//                                 <div className="bar-fill" style={{ width: '0%' }}></div>
//                             </div>
//                             <span>0%</span>
//                         </div>
//                         <div className="review-bar">
//                             <span>2 stars</span>
//                             <div className="bar">
//                                 <div className="bar-fill" style={{ width: '0%' }}></div>
//                             </div>
//                             <span>0%</span>
//                         </div>
//                         <div className="review-bar">
//                             <span>1 star</span>
//                             <div className="bar">
//                                 <div className="bar-fill" style={{ width: '0%' }}></div>
//                             </div>
//                             <span>0%</span>
//                         </div>
//                     </div>
//                 </div>
//                 <Carousel>
//                     {reviews.map((review, index) => (
//                         <div key={index} className="review-card">
//                             <h3>{review.name}</h3>
//                             <p>{review.date}</p>
//                             <p>{'⭐'.repeat(review.rating)}</p>
//                             <p>{review.review}</p>
//                             <div className="review-images">
//                                 {review.images.map((img, idx) => (
//                                     <img key={idx} src={img} alt={`Review ${idx}`} />
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </Carousel>
//                 <div className="review-form">
//                     <h3>Submit Your Review</h3>
//                     <TextField label="Name" variant="outlined" fullWidth margin="normal" />
//                     <TextField label="Review" variant="outlined" multiline rows={4} fullWidth margin="normal" />
//                     <TextField label="Rating (1-5)" variant="outlined" fullWidth margin="normal" />
//                     <Button variant="contained" color="primary">Submit</Button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default ProductDetail;
