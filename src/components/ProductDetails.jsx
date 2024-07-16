// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Button, IconButton } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
// import '../styles/ProductDetails.css';
// import Product2 from '../assets/product-images/product2.webp';
// import Product1 from '../assets/product-images/product1.jpg';

// const ProductDetails = () => {
//   return (
//     <div className="product-detail-container">
//       <div className="product-detail-carousel">
//         <Carousel showThumbs={false}>
//           <div>
//             <img src={Product1} alt="Product Image 1" />
//           </div>
//           <div>
//             <img src={Product2} alt="Product Image 2" />
//           </div>
//           <div>
//             <img src={Product1} alt="Product Image 3" />
//           </div>
//         </Carousel>
//       </div>
//       <div className="product-detail-info">
//         <div className="product-detail-header">
//           <div className="product-sale-tag">Sale Off</div>
//           <h1>Seeds of Change Organic Quinoa, Brown</h1>
//           <div className="product-reviews">(32 reviews)</div>
//         </div>
//         <div className="product-pricing">
//           <div className="product-price-sale">$38</div>
//           <div className="product-price-original">$52</div>
//           <div className="product-price-discount">26% Off</div>
//         </div>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
//         <div className="product-weight-options">
//           <Button variant="outlined">50g</Button>
//           <Button variant="outlined">60g</Button>
//           <Button variant="outlined">80g</Button>
//           <Button variant="outlined">100g</Button>
//           <Button variant="outlined">150g</Button>
//         </div>
//         <div className="product-actions">
//           <Button variant="contained" color="primary">
//             <ShoppingCartIcon /> Add to cart
//           </Button>
//           <Button variant="contained" color="secondary">
//             Buy Now
//           </Button>
//           <IconButton>
//             <FavoriteBorderIcon />
//           </IconButton>
//         </div>
//         <div className="product-tags">
//           <LocalOfferIcon /> Organic, Brown, Snack
//         </div>
//         <div className="product-details">
//           <p>Type: Organic</p>
//           <p>SKU: FWM15VKT</p>
//           <p>MFG: Jun 4, 2022</p>
//           <p>LIFE: 70 days</p>
//           <p>Stock: 8 Items In Stock</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;




// src/components/ProductDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import products from '../components/ProductsData';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    console.log(id)
    const product = products.find((prod) => prod.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail-container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/">Products</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
                </ol>
            </nav>
        {/* </div>
      <div> */}
            <div className="product-detail-carousel">
                <Carousel showThumbs={false}>
                    <div>
                        <img src={product.image} alt="Product Image 1" />
                    </div>
                    <div>
                        <img src={product.image} alt="Product Image 2" />
                    </div>
                    <div>
                        <img src={product.image} alt="Product Image 3" />
                    </div>
                </Carousel>
            </div>
            <div className="product-detail-info">
                <div className="product-detail-header">
                    <div className="product-sale-tag">Sale Off</div>
                    <h1>{product.name}</h1>
                    <div className="product-reviews">(32 reviews)</div>
                </div>
                <div className="product-pricing">
                    <div className="product-price-sale">${product.price}</div>
                    <div className="product-price-original">${product.originalPrice}</div>
                    <div className="product-price-discount">{((product.originalPrice - product.price) / product.originalPrice * 100).toFixed(0)}% Off</div>
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
                    <LocalOfferIcon /> Organic, Brown, Snack
                </div>
                <div className="product-details">
                    <p>Type: Organic</p>
                    <p>SKU: FWM15VKT</p>
                    <p>MFG: Jun 4, 2022</p>
                    <p>LIFE: 70 days</p>
                    <p>Stock: 8 Items In Stock</p>
                </div>
            </div>
        </div >
    );
};

export default ProductDetails;


