import React from 'react';
import { Grid, Box, Typography, Button, Card, CardContent, CardMedia, Divider } from '@mui/material';
import Product1 from '../assets/product-images/product1.jpg';
import Product2 from '../assets/product-images/product2.webp';

const CartItem = ({ item }) => (
  <Card sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
    <CardMedia
      component="img"
      sx={{ width: 100 }}
      image={item.image}
      alt={item.name}
    />
    <CardContent sx={{ flexGrow: 1 }} style={{padding: '3 3'}}>
      <Typography variant="h6">{item.name}</Typography>
      <Typography variant="body2">{item.brand}</Typography>
      <Typography variant="body2">{item.description}</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        {`₹${item.price}`} <span style={{ textDecoration: 'line-through', color: 'grey' }}>{`₹${item.originalPrice}`}</span> <span style={{ color: 'green' }}>{`${item.discount}% OFF`}</span>
      </Typography>
    </CardContent>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button variant="outlined" color="primary">{item.quantity}</Button>
      <Button variant="outlined" color="secondary" sx={{ ml: 5, mr: 3 }}>Remove</Button>
    </Box>
  </Card>
);

const CartSummary = () => (
  <Box sx={{ padding: 3, backgroundColor: 'white', borderRadius: 2 }}>
    <Typography variant="h6" sx={{ mb: 2 }}>Bill Details</Typography>
    <Grid container>
      <Grid item xs={6}>
        <Typography>MRP</Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <Typography>₹2351.20</Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6}>
        <Typography>Discount</Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <Typography>-₹219.52</Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6}>
        <Typography>Taxes And Charges</Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <Typography>₹11.00</Typography>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={6}>
        <Typography>Delivery charge</Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <Typography sx={{ textDecoration: 'line-through' }}>₹149.00</Typography><Typography>FREE</Typography>
      </Grid>
    </Grid>
    <Divider sx={{ my: 2 }} />
    <Grid container>
      <Grid item xs={6}>
        <Typography>Estimated Payable</Typography>
      </Grid>
      <Grid item xs={6} sx={{ textAlign: 'right' }}>
        <Typography>₹2142.68</Typography>
      </Grid>
    </Grid>
    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
      Proceed to Checkout
    </Button>
  </Box>
);

const AddToCart = () => {
  const cartItems = [
    {
      name: 'Ethiglo Facewash 200gm',
      brand: 'Ethinext Pharma Pvt.ltd',
      description: 'Tube of 200 GM',
      price: '1419.60',
      originalPrice: '1560.00',
      discount: '9',
      image: Product2,
      quantity: 3,
    },
    {
      name: 'Skinshine Spf 30 Sunscreen Lotion 100ml',
      brand: 'Cadila Pharmaceuticals Ltd',
      description: 'Tube of 100 ML',
      price: '712.08',
      originalPrice: '791.20',
      discount: '10',
      image: Product1,
      quantity: 4,
    }
  ];

  return (
    <Box sx={{ padding: 3, marginTop: '200px' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" sx={{ mb: 3 }}>2 Items in your cart</Typography>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
          <Button variant="outlined" color="primary" sx={{ mt: 3 }}>
            + Add More Medicines
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            <Button variant="outlined" color="primary" sx={{ mb: 3 }} fullWidth>
              Apply Coupon
            </Button>
            <CartSummary />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddToCart;
