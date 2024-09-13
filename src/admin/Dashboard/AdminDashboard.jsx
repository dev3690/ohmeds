import React from 'react';
import { Typography, Container, Box, Grid, Paper } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom component="h1">
        Hi, Welcome back 👋
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Weekly sales</Typography>
            <Typography variant="h4">714k</Typography>
            <Typography variant="subtitle1" color="textSecondary">+2.6%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">New users</Typography>
            <Typography variant="h4">1.35m</Typography>
            <Typography variant="subtitle1" color="textSecondary">-0.1%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Purchase orders</Typography>
            <Typography variant="h4">1.72m</Typography>
            <Typography variant="subtitle1" color="textSecondary">+2.8%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6">Messages</Typography>
            <Typography variant="h4">234</Typography>
            <Typography variant="subtitle1" color="textSecondary">+3.6%</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Typography variant="h6">Current visits</Typography>
        {/* Add your chart component here */}
      </Box>
      <Box mt={4}>
        <Typography variant="h6">Website visits</Typography>
        {/* Add your chart component here */}
      </Box>
    </Container>
  );
};

export default AdminDashboard;
