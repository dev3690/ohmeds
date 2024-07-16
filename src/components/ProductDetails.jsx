
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Button, IconButton, Link } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import products from '../components/ProductsData'; // Move your products array to a separate file named productsData.js
// import '../styles/ProductDetails.css';
// import Breadcrumbs from '../components/Breadcrumbs';

// const ProductDetail = () => {
//     const { id } = useParams();
//     const product = products.find((p) => p.id === parseInt(id));

//     if (!product) {
//         return <div>Product not found</div>;
//     }

//     return (
//         <>
//         <nav aria-label="breadcrumb">
//                     <ol className="breadcrumb">
//                         <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                         <li className="breadcrumb-item"><Link to="/">Products</Link></li>
//                         <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
//                     </ol>
//                 </nav>
//             <div className="product-detail-container">
//                 <div className="product-detail-carousel">
//                     <Carousel showThumbs={false}>
//                         <div>
//                             <img src={product.image} alt={product.name} />
//                         </div>
//                         <div>
//                             <img src={product.image} alt={product.name} />
//                         </div>
//                         <div>
//                             <img src={product.image} alt={product.name} />
//                         </div>
//                     </Carousel>
//                 </div>
//                 <div className="product-detail-info">
//                     <div className="product-detail-header">
//                         {product.badge && <div className="product-sale-tag">{product.badge}</div>}
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
//                         <Button variant="outlined">150g</Button>
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
//             </div>
//         </>
//     );
// };

// export default ProductDetail;



import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import products from '../components/ProductsData';
import Breadcrumbs from '../components/Breadcrumbs';
import '../styles/ProductDetails.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <Breadcrumbs />
            <div className="product-detail-container">
                <div className="product-detail-carousel">
                    <Carousel showThumbs={false}>
                        <div>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div>
                            <img src={product.image} alt={product.name} />
                        </div>
                    </Carousel>
                </div>
                <div className="product-detail-info">
                    <div className="product-detail-header">
                        {product.badge && <div className="product-sale-tag">{product.badge}</div>}
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
                        <Button variant="outlined">150g</Button>
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
            </div>
        </>
    );
};

export default ProductDetail;
