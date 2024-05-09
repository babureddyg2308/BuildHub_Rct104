
import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling
import DivComponent from './DivComponent'; // Import your DivComponent

const App = () => {
  const [divsData, setDivsData] = useState([]);

  useEffect(() => {
    const fetchDivsData = async () => {
      try {
        const response = await fetch('http://localhost:5000/divs-data'); // Change URL if needed
        const data = await response.json();
        setDivsData(data);
      } catch (error) {
        console.error('Error fetching divs data:', error);
      }
    };

    fetchDivsData();
  }, []);

  return (
    <div className="app">
      {divsData.map(div => (
        <DivComponent key={div.id} divData={div} />
      ))}
    </div>
  );
};

export default App;
