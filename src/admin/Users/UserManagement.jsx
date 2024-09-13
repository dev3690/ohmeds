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
  Checkbox,
  Avatar,
  TablePagination,
  TableSortLabel,
  Modal,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getUserData, USER, callAxiosApi } from '../../utils/api_utils';

const UserManagement = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    gender: '',
    mobile: '',
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await callAxiosApi(getUserData);
        console.log('API response:', response); // Log the entire response

        let userData;
        if (response && typeof response === 'object') {
          // Try to find an array in the response
          const possibleUserArrays = Object.values(response).filter(Array.isArray);
          if (possibleUserArrays.length > 0) {
            userData = possibleUserArrays[0];
          } else if (Array.isArray(response)) {
            userData = response;
          } else {
            userData = [response]; // Treat single object as an array with one item
          }
        } else {
          userData = [];
        }

        console.log('Extracted user data:', userData);

        if (Array.isArray(userData) && userData.length > 0) {
          setUsers(userData);
          setError(null);
        } else {
          console.error('No valid user data found in the response');
          setError('No user data available. Please try again later.');
          setUsers([]);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users. Please try again later.');
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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

  const filteredUsers = users.filter((user) =>
    user && user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    if (!a || !b || !a[orderBy] || !b[orderBy]) return 0;
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  const slicedUsers = sortedUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCreateUser = async () => {
    try {
      const response = await callAxiosApi(`${getUserData}`, 'post', newUser);
      setUsers([...users, response.data]);
      handleCloseModal();
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {loading ? (
        <Typography>Loading users...</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : users.length === 0 ? (
        <Typography>No users found.</Typography>
      ) : (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Users
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpenModal}>
              + New user
            </Button>
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search user..."
            value={searchTerm}
            onChange={handleSearch}
            sx={{ mb: 2 }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="user table">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <TableSortLabel
                      active={orderBy === 'name'}
                      direction={orderBy === 'name' ? order : 'asc'}
                      onClick={handleSort('name')}
                    >
                      Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Created At</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {slicedUsers.map((user) => (
                  <TableRow key={user?.id || Math.random()}>
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ mr: 2 }}>{user?.name?.[0] || ''}</Avatar>
                        {user?.name || 'N/A'}
                      </Box>
                    </TableCell>
                    <TableCell>{user?.email || 'N/A'}</TableCell>
                    <TableCell>{user?.gender || 'N/A'}</TableCell>
                    <TableCell>{user?.created_at ? new Date(user.created_at).toLocaleString() : 'N/A'}</TableCell>
                    <TableCell>
                      <IconButton>
                        <MoreVertIcon />
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
                Create New User
              </Typography>
              <TextField
                fullWidth
                margin="normal"
                name="name"
                label="Name"
                value={newUser.name}
                onChange={handleInputChange}
              />
              <TextField
                fullWidth
                margin="normal"
                name="email"
                label="Email"
                value={newUser.email}
                onChange={handleInputChange}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={newUser.gender}
                  onChange={handleInputChange}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                margin="normal"
                name="mobile"
                label="Mobile"
                value={newUser.mobile}
                onChange={handleInputChange}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateUser}
                sx={{ mt: 2 }}
              >
                Create User
              </Button>
            </Box>
          </Modal>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </Box>
  );
};

export default UserManagement;
