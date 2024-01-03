// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Sample menu categories data
const menuCategories = [
  {
    id: 1,
    title: 'Burgers',
    description: 'Classic cheeseburgers, gourmet creations, and veggie options',
    image: 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90',
    exploreLink: '/burgers',
  },
  {
    id: 2,
    title: 'Salads',
    description: 'Fresh and healthy salad options for every taste',
    image: 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90',
    exploreLink: '/salads',
  },
  {
    id: 3,
    title: 'Salads',
    description: 'Fresh and healthy salad options for every tasteFresh and healthy salad options for every taste',
    image: 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90',
    exploreLink: '/salads',
  },
  {
    id: 4,
    title: 'Salads',
    description: 'Fresh and healthy salad options for every taste',
    image: 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90',
    exploreLink: '/salads',
  }
  // Add more menu categories as needed
];

// Endpoint to get menu categories
app.get('/api/menuCategories', (req, res) => {
  res.json(menuCategories);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
