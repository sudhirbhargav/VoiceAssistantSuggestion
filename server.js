const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./config/db.js');
const restaurantRouter = require('./routes/restaurant.route.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/restaurants', restaurantRouter);

app.get('/', (req, res)=> {
    res.send("Welcome to Deligo!");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    try {
        await connection;
        console.log('MongoDB Connected');
    } catch (error) {
        console.log(error);
    }
    console.log(`Server running on port ${PORT}`);
})