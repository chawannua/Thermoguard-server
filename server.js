const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the "Thermoguard-server" directory
app.use(express.static(path.join(__dirname, 'Thermoguard-server')));

// Define a route handler for the root URL ("/")
app.get('/', (req, res) => {
  // Send the contents of the "index.html" file as the response
  res.sendFile(path.join(__dirname, 'Thermoguard-server', '้html test.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
