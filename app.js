import express from 'express';
import morgan from 'morgan';

const app = express();

// Middleware for logging
app.use(morgan('dev'));

// Middleware for parsing JSON bodies
app.use(express.json());

// Sample route
app.post('/', (req, res) => {
    console.log('Received body:', req.body);
    res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
