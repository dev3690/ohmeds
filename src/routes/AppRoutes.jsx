import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductsCards from '../components/ProductsCards';
import ProductDetails from '../components/ProductDetails';
import Login from '../components/Login';
import Registration from '../components/Registration';
import ProfilePage from '../components/ProfilePage';
import AddToCart from '../components/AddToCart';
import AdminDashboard from '../admin/Dashboard/AdminDashboard';
import UserManagement from '../admin/Users/UserManagement';
import NotFound from '../pages/NotFound';
import AdminLogin from '../admin/Admin Login/AdminLogin';
import ProtectedRoute from '../components/ProtectedRoute';
import ProductListingPage from '../components/ProductListingPage';
import AdminLayout from '../admin/Dashboard/AdminLayout';
import ProductManagement from '../admin/Products/ProductManagement';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/admin/login" element={<AdminLogin />} />
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
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <AddToCart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="users" element={<UserManagement />} />
        <Route path="products" element={<ProductManagement />} />
        {/* Add other admin routes here */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
