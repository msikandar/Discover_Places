const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/stores');
const connectDB = require('./config/db');

//load env variables
dotenv.config({path: './config/config.env'});
const app = express();
//Connect to database
connectDB();
//Body Parser
app.use(express.json());
//use cors
app.use(cors());
//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/stores', routes);

//Serve
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});