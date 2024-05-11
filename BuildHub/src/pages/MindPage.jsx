
import React, { useState, useEffect } from 'react';
import './MindPage.css';

const MindPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('API_ENDPOINT_HERE');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mind-page">
      <h1>Mind</h1>
      <div className="mind-container">
        {data.map((item, index) => (
          <div key={index} className="mind-item">
            <div className="image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{item.additionalInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindPage;
