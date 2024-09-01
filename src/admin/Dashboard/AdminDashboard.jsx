import React from 'react';
import { Typography, Container, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom component="h1">
        Admin Dashboard
      </Typography>
      <Typography variant="h4" gutterBottom component="h1">
        Admin Dashboard
      </Typography>
      <Typography variant="h4" gutterBottom component="h1">
        Admin Dashboard
      </Typography>
      <Typography variant="h4" gutterBottom component="h1">
        Admin Dashboard
      </Typography>
      <Typography variant="h4" gutterBottom component="h1">
        Admin Dashboard
      </Typography>
      <Box my={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/admin/products"
              variant="contained"
              color="primary"
              fullWidth
            >
              Manage Products
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/admin/orders"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Manage Orders
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/admin/users"
              variant="contained"
              color="info"
              fullWidth
            >
              Manage Users
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
