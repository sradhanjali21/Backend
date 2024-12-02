// Import express
const express = require('express');

// Initialize the app
const app = express();

app.use(express.json());
// Define a GET route
app.get('/', (req, res) => {
  res.send('Welcome to the basic Express GET API!');
});

// Another GET route with a parameter
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`Hello, ${userName}!`);
});
app.get('/queryparam', (req, res) => {
    const{userName}  = req.query;
    res.send(`Hello, ${userName}!`);
  });


// Basic POST API
app.post('/postdata', (req, res) => {
    console.log(req.body),'aaaaaaaaa';
    const { name, age } = req.body;
// console.log(req.body.name);


    // Validate the request body
    if (!name || !age) {
        return res.status(400).json({ message: 'Name and age are required' });
    }

    // Example response
    res.status(200).json({
        message: 'Data received successfully',
        data: {
            name,
            age
        }
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});