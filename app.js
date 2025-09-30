import express from 'express';
import morgan from 'morgan';
import Prospect from './src/routes/Prospect.route.js';
import ClientType from './src/routes/ClientType.route.js';
import ClientAddress from './src/routes/ClientAddress.route.js';


const app = express();

// Middleware for logging
app.use(morgan('dev'));

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use("/prospect", Prospect)
app.use("/clienttype", ClientType)
app.use("/clientcontact", ClientType)
app.use("/clientaddress", ClientAddress)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
