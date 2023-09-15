const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve all files and folders from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});