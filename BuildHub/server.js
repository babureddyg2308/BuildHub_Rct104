
const express = require('express');
const app = express();
const port = 5000; // Change this if needed

app.use(express.json());

// Define API endpoint to fetch data for divs
app.get('/divs-data', (req, res) => {
  // Sample data for demonstration
  const divsData = [
    {
      id: 1,
      title: 'Div 1',
      content: 'Content for div 1',
      backgroundImage: 'image1.jpg' // Replace with your image URL
    },
    {
      id: 2,
      title: 'Div 2',
      content: 'Content for div 2',
      backgroundImage: 'image2.jpg' // Replace with your image URL
    },
    // Add more divs data here
  ];

  res.json(divsData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
