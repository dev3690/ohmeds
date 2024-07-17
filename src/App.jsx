
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your theme configuration
import Home from './pages/Home';
import Header from './components/Header'; // Import your Header component
import ProductsCards from './components/ProductsCards';
import ProductDetails from './components/ProductDetails';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        {/* <Switch> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
          <Route path="/" exact element={<ProductsCards />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        {/* </Switch> */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
