const mongoose = require('mongoose');
require('dotenv').config();

// eslint-disable-next-line no-undef
const MONGO_URI = process.env.MONGO_URI;

const connectToDB = async() => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.log(err);
    }
};

module.exports = { connectToDB };