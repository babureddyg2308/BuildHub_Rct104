
import React, { useState, useEffect } from 'react';
import './MindPage.css'; 

const MindPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./public/data/mindData.json');
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
        {data.map(item => (
          <div key={item.id} className="mind-item">
            <div className="image">
              <img src={item.image.imageUrl} alt={item.text.title} />
            </div>
            <div className="text">
              <h2>{item.text.title}</h2>
              <p>{item.text.description}</p>
              <p>{item.text.additionalInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindPage;
