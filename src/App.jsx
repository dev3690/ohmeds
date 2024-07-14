
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your theme configuration
import Home from './pages/Home';
import Header from './components/Header'; // Import your Header component

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
