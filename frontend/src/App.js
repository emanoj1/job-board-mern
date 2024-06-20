// Main Application Component

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import { jwtDecode } from 'jwt-decode';


function App() {
  const token = localStorage.getItem('token');
  const isAdmin = token && jwtDecode(token).role === 'admin';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {isAdmin && <Route path="/admin" element={<AdminPanel />} />}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;






