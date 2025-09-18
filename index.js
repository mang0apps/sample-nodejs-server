// Import express
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!');
});

// Example GET with params
app.get('/hello/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// Example POST
app.post('/echo', (req, res) => {
  res.json({
    received: req.body,
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
