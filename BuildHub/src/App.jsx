import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar.jsx is in the same directory
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarePage from './pages/CarePage';
import MindPage from './pages/MindPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Render the navigation bar component here */}
      <Routes>
        <Route path="/care" element={<CarePage />} />
        <Route path="/mind" element={<MindPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;