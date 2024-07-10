// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import FileUpload from './components/FileUpload';
import FileTransfer from './components/FileTransfer';

function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuthToken={setAuthToken} />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/upload" 
          element={authToken ? <FileUpload authToken={authToken} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/transfer" 
          element={authToken ? <FileTransfer authToken={authToken} /> : <Navigate to="/login" />} 
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
