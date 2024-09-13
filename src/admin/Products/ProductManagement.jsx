import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  IconButton,
  Typography,
  Box,
  Modal,
  TablePagination,
  TableSortLabel,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { callAxiosApi, getProductsData, createProduct, updateProduct, deleteProduct } from '../../utils/api_utils';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: '',
    images: [],
    badge: '',
    rating: 0,
    price: 0,
    original_price: 0,
    discount: 0,
    category_id: '',
    vendor_id: '',
    brand: '',
    medicine_type: '',
    mfg_date: '',
    exp_date: '',
    life_span: '',
    stock_quantity: 0,
    short_description: '',
    long_description: '',
    key_benefits: '',
    ingredients: '',
    side_effects: '',
    how_to_use: '',
    facts: '',
    prescription_needed: false,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await callAxiosApi(getProductsData);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setNewProduct({
        ...product,
        mfg_date: product.mfg_date ? new Date(product.mfg_date).toISOString().split('T')[0] : '',
        exp_date: product.exp_date ? new Date(product.exp_date).toISOString().split('T')[0] : '',
        facts: Array.isArray(product.facts) ? product.facts.join(', ') : product.facts,
      });
    } else {
      setEditingProduct(null);
      setNewProduct({
        name: '',
        images: [],
        badge: '',
        rating: 0,
        price: 0,
        original_price: 0,
        discount: 0,
        category_id: '',
        vendor_id: '',
        brand: '',
        medicine_type: '',
        mfg_date: '',
        exp_date: '',
        life_span: '',
        stock_quantity: 0,
        short_description: '',
        long_description: '',
        key_benefits: '',
        ingredients: '',
        side_effects: '',
        how_to_use: '',
        facts: '',
        prescription_needed: false,
      });
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingProduct(null);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (event) => {
    setNewProduct({ ...newProduct, images: [...event.target.files] });
  };

  const handleCreateProduct = async () => {
    try {
      const productToCreate = {
        ...newProduct,
        facts: newProduct.facts.split(',').map(fact => fact.trim()),
      };
      const response = await callAxiosApi(createProduct, 'post', productToCreate);
      setProducts([...products, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const { id, created_at, updated_at, ...productToUpdate } = newProduct;
      productToUpdate.facts = productToUpdate.facts.split(',').map(fact => fact.trim());
      const response = await callAxiosApi(updateProduct(id), 'put', productToUpdate);
      setProducts(products.map(p => p.id === id ? response.data : p));
      handleCloseModal();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await callAxiosApi(deleteProduct(id), 'delete');
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleSort = (property) => () => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0); // Reset to the first page when changing rows per page
};

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (!a || !b || !a[orderBy] || !b[orderBy]) return 0;
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const slicedProducts = sortedProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Product Management
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search product..."
          value={searchTerm}
          onChange={handleSearch}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={() => handleOpenModal()}>
          Add New Product
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="product table">
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.category_id}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>{product.stock_quantity}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenModal(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteProduct(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h6" component="h2" gutterBottom>
            {editingProduct ? 'Edit Product' : 'Create New Product'}
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            name="name"
            label="Name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="price"
            label="Price"
            value={newProduct.price}
            onChange={handleInputChange}
            type="number"
          />
          <TextField
            fullWidth
            margin="normal"
            name="category_id"
            label="Category ID"
            value={newProduct.category_id}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="brand"
            label="Brand"
            value={newProduct.brand}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            margin="normal"
            name="stock_quantity"
            label="Stock Quantity"
            value={newProduct.stock_quantity}
            onChange={handleInputChange}
            type="number"
          />
          <TextField
            fullWidth
            margin="normal"
            name="mfg_date"
            label="Manufacturing Date"
            type="date"
            value={newProduct.mfg_date}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            fullWidth
            margin="normal"
            name="exp_date"
            label="Expiration Date"
            type="date"
            value={newProduct.exp_date}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
          />
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            style={{ margin: '10px 0' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={editingProduct ? handleUpdateProduct : handleCreateProduct}
            sx={{ mt: 2 }}
          >
            {editingProduct ? 'Update Product' : 'Create Product'}
          </Button>
        </Box>
      </Modal>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredProducts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default ProductManagement;