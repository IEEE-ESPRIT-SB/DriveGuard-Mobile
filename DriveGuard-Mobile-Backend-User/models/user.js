const { Schema, model } = require('mongoose');
const { hash } = require('bcrypt');
require('dotenv').config();

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type:String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type:String,
        required: true,
        trim: true,
        minlength: 6
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'Doctor'],
        default: 'user'
    }
});

userSchema.pre('save', async function(next) {
    const user = this;
    const SALT = Number(process.env.SALT);
    if (!user.isModified('password'))
        return next();

    user.password = await hash(user.password, SALT);
    next();
});

userSchema.pre('findOneAndUpdate', async function (next) {
    const update = this.getUpdate();
    const passwordField = update.password;

    if (passwordField) {
        const SALT = Number(process.env.SALT);
        update.password = await hash(passwordField, SALT);
    }

    next();
});

module.exports = model('User', userSchema);