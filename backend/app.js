const express=require('express')
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors=require('cors')

require('dotenv').config(); // Ensure dotenv is configured correctly

const PORT = process.env.PORT || 3000; // Provide a fallback if PORT is not defined

app.use(morgan('dev')); // Logger middleware
app.use(cors())
// Connect to MongoDB
require('./db/connection');

// Middleware to parse JSON bodies
app.use(express.json());

// Import and use course routes
const employeeeRoutes = require('./routes/employeeeRoutes');
const userRoutes=require('./routes/user')
app.use('/employee', employeeeRoutes);

app.use('/user',userRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
