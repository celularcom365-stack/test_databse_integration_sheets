import express from 'express';
import morgan from 'morgan';
import Prospect from './src/routes/Prospect.route.js';
import Advisor from './src/routes/Advisor.routes.js';
import ClientType from './src/routes/ClientType.route.js';
import Contact from './src/routes/Contact.route.js';
import Interaction from './src/routes/Interaction.routes.js';

const app = express();

// Middleware for logging
app.use(morgan('dev'));

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use("/prospect", Prospect)
app.use("/advisor", Advisor)
app.use("/clientType", ClientType);
app.use("/contact", Contact);
app.use("/interaction", Interaction);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
