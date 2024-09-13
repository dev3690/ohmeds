import React from 'react';
import { BrowserRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider, useAuth } from './components/AuthContext';
import AppRoutes from './routes/AppRoutes';

function AppWrapper() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const showHeader = isAuthenticated && location.pathname !== '/login' && location.pathname !== '/register' && !location.pathname.startsWith('/admin');
  const showFooter = !location.pathname.startsWith('/admin');

  return (
    <>
      {showHeader && <Header />}
      <AppRoutes />
      {showFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <AppWrapper />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
