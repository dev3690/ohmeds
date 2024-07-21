// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Button, TextField, Rating, IconButton } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import '../styles/CustomerReviews.css'
// import man from '../assets/Reviews/man.png'
// import woman from '../assets/Reviews/woman.png'
// import product1 from '../assets/product-images/product1.jpg'
// import product2 from '../assets/product-images/product2.webp'

// const reviews = [
//   {
//     id: 1,
//     name: 'Murali Naik',
//     date: 'October 4, 2020',
//     rating: 5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//       product1,
//       product2,
//       product1,
//     ],
//   },
//   {
//     id: 2,
//     name: 'Bandhu Bhaijan',
//     date: 'October 4, 2020',
//     rating: 5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//       product1,
//       product2,
//       product1,
//     ],
//   },
//   {
//     id: 3,
//     name: 'Rishi Sunak',
//     date: 'October 4, 2020',
//     rating: 4.5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//       product1,
//       product2,
//       product1,
//     ],
//   },
//   // Add more reviews as needed
// ];

// const CustomerReviews = () => {
//   const [newReview, setNewReview] = useState({ name: '', rating: 0, text: '' });
  
//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle review submission
//   };

//   return (
//     <div className="customer-reviews">
//       <h2>Customer Reviews</h2>
//       <div className="rating-summary">
//         <Rating value={4.4} readOnly />
//         <span>4.4 out of 5</span>
//         <div>4,040 global ratings</div>
//       </div>
      
//       <div className="review-cards">
//         {reviews.map((review) => (
//           <div key={review.id} className="review-card">
//             <div className="review-header">
//               <img src={man} alt={`${review.name}'s avatar`} className="avatar" />
//               <div>
//                 <h3>{review.name}</h3>
//                 <Rating value={review.rating} readOnly />
//                 <span>{review.date}</span>
//               </div>
//             </div>
//             <p>{review.text}</p>
//             <Carousel showThumbs={false}>
//               {review.photos.map((photo, index) => (
//                 <div key={index}>
//                   <img src={photo} alt={`Review ${review.id} photo ${index + 1}`} />
//                 </div>
//               ))}
//             </Carousel>
//             <IconButton>
//               <FavoriteBorderIcon />
//             </IconButton>
//           </div>
//         ))}
//       </div>
      
//       <div className="review-form">
//         <h3>Write a Review</h3>
//         <form onSubmit={handleReviewSubmit}>
//           <TextField
//             label="Name"
//             variant="outlined"
//             value={newReview.name}
//             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//             required
//           />
//           <Rating
//             value={newReview.rating}
//             onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue })}
//             required
//           />
//           <TextField
//             label="Review"
//             variant="outlined"
//             multiline
//             rows={4}
//             value={newReview.text}
//             onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
//             required
//           />
//           <Button variant="contained" color="primary" type="submit">
//             <SendIcon /> Submit
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;

// ------------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Button, TextField, Rating, IconButton } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import '../styles/CustomerReviews.css';
// import man from '../assets/Reviews/man.png';
// import woman from '../assets/Reviews/woman.png';
// import product1 from '../assets/product-images/product1.jpg';
// import product2 from '../assets/product-images/product2.webp';

// const reviews = [
//   {
//     id: 1,
//     name: 'Murali Naik',
//     date: 'October 4, 2020',
//     rating: 5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//       product1,
//       product2,
//       product1,
//     ],
//   },
//   {
//     id: 2,
//     name: 'Bandhu Bhaijan',
//     date: 'October 4, 2020',
//     rating: 5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//       product1,
//       product2,
//       product1,
//     ],
//   },
//   {
//     id: 3,
//     name: 'Rishi Sunak',
//     date: 'October 4, 2020',
//     rating: 4.5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//       product1,
//       product2,
//       product1,
//     ],
//   },
//   // Add more reviews as needed
// ];

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 1024 },
//     items: 2,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 2,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const CustomerReviews = () => {
//   const [newReview, setNewReview] = useState({ name: '', rating: 0, text: '' });

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle review submission
//   };

//   return (
//     <div className="customer-reviews">
//       <h2>Customer Reviews</h2>
//       <div className="rating-summary">
//         <Rating value={4.4} readOnly />
//         <span>4.4 out of 5</span>
//         <div>4,040 global ratings</div>
//       </div>

//       <Carousel 
//         responsive={responsive} 
//         infinite={true} 
//         autoPlay={false}
//         className="review-carousel"
//       >
//         {reviews.map((review) => (
//           <div key={review.id} className="review-card">
//             <div className="review-header">
//               <img src={man} alt={`${review.name}'s avatar`} className="avatar" />
//               <div>
//                 <h3>{review.name}</h3>
//                 <Rating value={review.rating} readOnly />
//                 <span>{review.date}</span>
//               </div>
//             </div>
//             <p>{review.text}</p>
//             <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
//               {review.photos.map((photo, index) => (
//                 <div key={index}>
//                   <img src={photo} alt={`Review ${review.id} photo ${index + 1}`} className="review-photo"/>
//                 </div>
//               ))}
//             </Carousel>
//             <IconButton>
//               <FavoriteBorderIcon />
//             </IconButton>
//           </div>
//         ))}
//       </Carousel>

//       <div className="review-form">
//         <h3>Write a Review</h3>
//         <form onSubmit={handleReviewSubmit}>
//           <TextField
//             label="Name"
//             variant="outlined"
//             value={newReview.name}
//             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//             required
//           />
//           <Rating
//             value={newReview.rating}
//             onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue })}
//             required
//           />
//           <TextField
//             label="Review"
//             variant="outlined"
//             multiline
//             rows={4}
//             value={newReview.text}
//             onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
//             required
//           />
//           <Button variant="contained" color="primary" type="submit">
//             <SendIcon /> Submit
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;



// ----------------------------------------------------------------------------------------------------



// import React, { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { Button, TextField, Rating, IconButton } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import '../styles/CustomerReviews.css';
// import man from '../assets/Reviews/man.png';
// import woman from '../assets/Reviews/woman.png';
// import product1 from '../assets/product-images/product1.jpg';
// import product2 from '../assets/product-images/product2.webp';

// const reviews = [
// {
//     id: 1,
//     name: 'Murali Naik',
//     date: 'October 4, 2020',
//     rating: 5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//     product1,
//     product2,
//     product1,
//     ],
// },
// {
//     id: 2,
//     name: 'Bandhu Bhaijan',
//     date: 'October 4, 2020',
//     rating: 5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//     product1,
//     product2,
//     product1,
//     ],
// },
// {
//     id: 3,
//     name: 'Rishi Sunak',
//     date: 'October 4, 2020',
//     rating: 4.5,
//     text: 'Very useful, worth buying. Good for health, no side effects.',
//     photos: [
//     product1,
//     product2,
//     product1,
//     ],
// },
// // Add more reviews as needed
// ];

// const responsive = {
// superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 2,
// },
// desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 2,
// },
// tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 1,
// },
// mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
// },
// };

// const photoCarouselResponsive = {
// mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
// },
// };

// const CustomerReviews = () => {
// const [newReview, setNewReview] = useState({ name: '', rating: 0, text: '' });

// const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle review submission
// };

// return (
//     <div className="customer-reviews">
//     <h2>Customer Reviews</h2>
//     <div className="rating-summary">
//         <Rating value={4.4} readOnly />
//         <span>4.4 out of 5</span>
//         <div>4,040 global ratings</div>
//     </div>

//     <Carousel 
//         responsive={responsive} 
//         infinite={true} 
//         autoPlay={false}
//         className="review-carousel"
//     >
//         {reviews.map((review) => (
//         <div key={review.id} className="review-card">
//             <div className="review-header">
//             <img src={man} alt={`${review.name}'s avatar`} className="avatar" />
//             <div>
//                 <h3>{review.name}</h3>
//                 <Rating value={review.rating} readOnly />
//                 <span>{review.date}</span>
//             </div>
//             </div>
//             <p>{review.text}</p>
//             <Carousel 
//             responsive={photoCarouselResponsive} 
//             showThumbs={false} 
//             showStatus={false} 
//             showIndicators={false}
//             className="photo-carousel"
//             >
//             {review.photos.map((photo, index) => (
//                 <div key={index}>
//                 <img src={photo} alt={`Review ${review.id} photo ${index + 1}`} className="review-photo"/>
//                 </div>
//             ))}
//             </Carousel>
//             <IconButton>
//             <FavoriteBorderIcon />
//             </IconButton>
//         </div>
//         ))}
//     </Carousel>

//     <div className="review-form">
//         <h3>Write a Review</h3>
//         <form onSubmit={handleReviewSubmit}>
//         <TextField
//             label="Name"
//             variant="outlined"
//             value={newReview.name}
//             onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//             required
//         />
//         <Rating
//             value={newReview.rating}
//             onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue })}
//             required
//         />
//         <TextField
//             label="Review"
//             variant="outlined"
//             multiline
//             rows={4}
//             value={newReview.text}
//             onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
//             required
//         />
//         <Button variant="contained" color="primary" type="submit">
//             <SendIcon /> Submit
//         </Button>
//         </form>
//     </div>
//     </div>
// );
// };

// export default CustomerReviews;

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, TextField, Rating, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import '../styles/CustomerReviews.css';
import man from '../assets/Reviews/man.png';
import product1 from '../assets/product-images/product1.jpg';
import product2 from '../assets/product-images/product2.webp';

const reviews = [
  {
    id: 1,
    name: 'Murali Naik',
    date: 'October 4, 2020',
    rating: 5,
    text: 'Very useful, worth buying. Good for health, no side effects.',
    photos: [
      product1,
      product2,
      product1,
    ],
  },
  {
    id: 2,
    name: 'Bandhu Bhaijan',
    date: 'October 4, 2020',
    rating: 5,
    text: 'Very useful, worth buying. Good for health, no side effects.',
    photos: [
      product1,
      product2,
      product1,
    ],
  },
  {
    id: 3,
    name: 'Rishi Sunak',
    date: 'October 4, 2020',
    rating: 4.5,
    text: 'Very useful, worth buying. Good for health, no side effects.',
    photos: [
      product1,
      product2,
      product1,
    ],
  },
  // Add more reviews as needed
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const photoCarouselResponsive = {
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomerReviews = () => {
  const [newReview, setNewReview] = useState({ name: '', rating: 0, text: '', photos: [] });
  const [photoFiles, setPhotoFiles] = useState([]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle review submission
    // For example, upload photos to a server or save them locally
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotoFiles(files);
  };

  return (
    <div className="customer-reviews">
      <h2>Customer Reviews</h2>
      <div className="rating-summary">
        <Rating value={4.4} readOnly />
        <span>4.4 out of 5</span>
        <div>4,040 global ratings</div>
      </div>

      <Carousel 
        responsive={responsive} 
        infinite={true} 
        autoPlay={false}
        className="review-carousel"
      >
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <img src={man} alt={`${review.name}'s avatar`} className="avatar" />
              <div>
                <h3>{review.name}</h3>
                <Rating value={review.rating} readOnly />
                <span>{review.date}</span>
              </div>
            </div>
            <p>{review.text}</p>
            <Carousel 
              responsive={photoCarouselResponsive} 
              showThumbs={false} 
              showStatus={false} 
              showIndicators={false}
              className="photo-carousel"
            >
              {review.photos.map((photo, index) => (
                <div key={index}>
                  <img src={photo} alt={`Review ${review.id} photo ${index + 1}`} className="review-photo"/>
                </div>
              ))}
            </Carousel>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </div>
        ))}
      </Carousel>

      <div className="review-form">
        <h3>Write a Review</h3>
        <form onSubmit={handleReviewSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required
          />
          <Rating
            value={newReview.rating}
            onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue })}
            required
          />
          <TextField
            label="Review"
            variant="outlined"
            multiline
            rows={4}
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            required
          />
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            accept="image/*"
            className="file-input"
          />
          <Button variant="contained" color="primary" type="submit">
            <SendIcon /> Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CustomerReviews;
