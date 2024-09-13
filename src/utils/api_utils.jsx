import axios from "axios";

const localApiUrl = "http://localhost:3000/api";

// Auth routes
const loginApi = `${localApiUrl}/auth/login`;
const registerApi = `${localApiUrl}/auth/register`;

// User routes
const getUserData = `${localApiUrl}/users`;
const updateUserData = (userId) => `${localApiUrl}/users/${userId}`;
const deleteUser = (userId) => `${localApiUrl}/users/${userId}`;

// Product routes
const getProductsData = `${localApiUrl}/products`;
const createProduct = `${localApiUrl}/products`;
const getProductById = (id) => `${localApiUrl}/products/${id}`;
const updateProduct = (id) => `${localApiUrl}/products/${id}`;
const deleteProduct = (id) => `${localApiUrl}/products/${id}`;
const getExpiringProducts = `${localApiUrl}/products/expiring-soon`;
const getProductsByVendor = (vendorId) => `${localApiUrl}/products/vendor/${vendorId}`;
const getProductsByCategory = (categoryId) => `${localApiUrl}/products/category/${categoryId}`;

// Category routes
const getCategoriesData = `${localApiUrl}/categories`;
const createCategory = `${localApiUrl}/categories`;
const getCategoryById = (id) => `${localApiUrl}/categories/${id}`;
const updateCategory = (id) => `${localApiUrl}/categories/${id}`;
const deleteCategory = (id) => `${localApiUrl}/categories/${id}`;

// Vendor routes
const getVendorsData = `${localApiUrl}/vendors`;
const createVendor = `${localApiUrl}/vendors`;
const getVendorById = (id) => `${localApiUrl}/vendors/${id}`;
const updateVendor = (id) => `${localApiUrl}/vendors/${id}`;
const deleteVendor = (id) => `${localApiUrl}/vendors/${id}`;

// Cart routes
const getCartItems = `${localApiUrl}/cart`;
const addToCart = `${localApiUrl}/cart`;
const updateCartItem = `${localApiUrl}/cart`;
const removeFromCart = (productId) => `${localApiUrl}/cart/${productId}`;

// Wishlist routes
const getWishlistItems = `${localApiUrl}/wishlist`;
const addToWishlist = `${localApiUrl}/wishlist`;
const removeFromWishlist = (productId) => `${localApiUrl}/wishlist/${productId}`;

// Order routes
const createOrder = `${localApiUrl}/orders`;
const getUserOrders = `${localApiUrl}/orders`;
const getOrderById = (id) => `${localApiUrl}/orders/${id}`;
const updateOrderStatus = (id) => `${localApiUrl}/orders/${id}/status`;
const updateOrder = (id) => `${localApiUrl}/orders/${id}`;

const headers = {
    'Content-Type': 'application/json'
};

// Common function to make API calls
const callAxiosApi = async (url = "", method = 'get', body = {}, token = null) => {
    const config = {
        method,
        url,
        headers: {
            ...headers,
            ...(token && { Authorization: `Bearer ${token}` })
        },
        ...(method.toLowerCase() !== 'get' && { data: JSON.stringify(body) })
    };

    try {
        const response = await axios.request(config);
        return response;
    } catch (error) {
        return error;
    }
};

// Table names or entity types
const USER = "users";
const PRODUCTS = "products";
const CATEGORIES = "categories";
const VENDORS = "vendors";
const CART = "cart";
const WISHLIST = "wishlist";
const ORDERS = "orders";

export {
    USER,
    PRODUCTS,
    CATEGORIES,
    VENDORS,
    CART,
    WISHLIST,
    ORDERS,
    loginApi,
    registerApi,
    getUserData,
    updateUserData,
    deleteUser,
    getProductsData,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    getExpiringProducts,
    getProductsByVendor,
    getProductsByCategory,
    getCategoriesData,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getVendorsData,
    createVendor,
    getVendorById,
    updateVendor,
    deleteVendor,
    getCartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    getWishlistItems,
    addToWishlist,
    removeFromWishlist,
    createOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    updateOrder,
    callAxiosApi
};