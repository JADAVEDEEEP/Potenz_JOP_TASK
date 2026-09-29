const express = require('express');
const connectDB = require('./config/db');
const userrouter = require('./routes/authtroute');
const jobrouter = require('./routes/jobroute');
const resumerouter = require('./routes/resumeroutes');
const applicationrouter = require('./routes/applicationroute');

// const cors = require('cors');

require('dotenv').config();



const app = express();



app.use(express.json());
connectDB()

app.use('/api',userrouter)
app.use('/job',jobrouter)
app.use('/resume',resumerouter)
app.use('/app',applicationrouter)

app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
