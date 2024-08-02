
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './pages/Home';
import Header from './components/Header';
import ProductsCards from './components/ProductsCards';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Footer from './components/Footer';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ProductListingPage from './components/ProductListingPage';
import ShopByCategories from './components/ShopByCategories';
import Registration  from './components/Registration';
import ProfilePage from './components/ProfilePage';

function AppWrapper() {
  const navigate = useNavigate();

  return (
    <AuthProvider navigate={navigate}>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />  
        <Route
          path="/"  
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsCards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/categories/:categoryId"
          element={
            <ProtectedRoute>
              <ProductListingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default App;
