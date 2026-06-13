const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple in-memory data for our app
const promoFlags = {
  blackFridaySale: false,
  freeShipping: true
};

// Health Check (Crucial for DevOps)
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date() });
});

// Get promotional flags
app.get('/flags', (req, res) => {
  res.json(promoFlags);
});

app.listen(PORT, () => {
  console.log(`DevOps API running on port ${PORT}`);
});
