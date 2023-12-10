//import dependencies
const express = require('express');
const cors = require('cors');

//import utils
const { connectToDB } = require('./utils/db');
require('dotenv').config();

// eslint-disable-next-line no-undef
const { PORT } = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//import routes
const userRoutes = require('./routes/user');

//use routes
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Drive Guard APP!');
    console.log(req.body);
});

app.listen(PORT, async() => {
    await connectToDB();
    console.log(`RAS app listening at http://localhost:${PORT}`);
});
