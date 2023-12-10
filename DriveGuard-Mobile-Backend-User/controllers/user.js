const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { sign } = require('jsonwebtoken');
const { canUpdateUser, canDeleteUser } = require('../utils/user');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const AddUser = async(req, res) => {
    try {
        const newUser = new UserModel(req.body);

        const existedUser = await UserModel.findOne({ email: newUser.email });
        if (existedUser)
            return res.status(400).json({ error: 'Email is already existed' });

        await newUser.save();
        res.send('User added successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const UpdateUser = async(req, res) => {
    try {
        const { id } = req.params;

        if (!id || !mongoose.default.isValidObjectId(id))
            return res.status(400).send('ID Not Valid');

        if (!canUpdateUser(req, id))
            return res.status(401).send('Access denied. You are not allowed to update another user');

        const existedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!existedUser)
            res.status(400).send('User not found');

        res.send('User updated successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const DeleteUser = async(req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.default.isValidObjectId(id)) return res.status(400).send('ID Not Valid');

        if (!canDeleteUser(req, id))
            return res.status(401).send('Access denied. You are not allowed to delete another user');

        const deleteUser = await UserModel.findByIdAndDelete(id);
        if (!deleteUser) return res.status(400).send('User not found');

        res.send('User deleted successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const GetUsers = async(req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const GetUser = async(req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.default.isValidObjectId(id))
            return res.status(400).send('User not found');

        const user = await UserModel.findById(id);
        if (!user)
            return res.status(400).send('User not found');

        res.json({ user });
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const Login = async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });
        if (!user) return res.status(400).send('Email is incorrect');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Password is incorrect');

        const token = await sign({ user }, JWT_SECRET);
        res.json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

const BanUser = async(req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.default.isValidObjectId(id)) return res.status(400).send('ID Not Valid');

        const user = await UserModel.findById(id);
        if (!user) return res.status(400).send('User not found');

        user.isBanned = true;
        await user.save();
        res.send('User banned successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};

module.exports = {
    AddUser,
    UpdateUser,
    DeleteUser,
    GetUsers,
    GetUser,
    Login,
    BanUser
};