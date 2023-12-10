const jwt = require('jsonwebtoken');
require('dotenv').config();

// eslint-disable-next-line no-undef
const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).send('Access denied. No token provided');
        req.payload = jwt.verify(token, JWT_SECRET);
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).send(err.message);
    }
};

const isAdmin = (req, res, next) => {
    try {
        if (req.payload.user.role === 'admin' || req.payload.user.role === 'Doctor')
            next();
        else
            return res.status(401).send('Access denied. You are not admin');
    } catch (err) {
        console.log(err);
        return res.status(401).send(err.message);
    }
};

const isDoctor = (req, res, next) => {
    try {
        if (req.payload.user.role === 'Doctor')
            next();
        else
            return res.status(401).send('Access denied. You are not Doctor');
    } catch (err) {
        console.log(err);
        return res.status(401).send(err.message);
    }
};

module.exports = {
    auth, isAdmin, isDoctor
};