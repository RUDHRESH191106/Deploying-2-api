// Load the dotenv package to read environment variables
require('dotenv').config();

// Import Express
const express = require('express');
const app = express();

// Define a route that returns different data based on the environment variable
app.get('/', (req, res) => {
  if (process.env.IS_ADMIN === 'true') {
    res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port http://localhost:${PORT}`));
