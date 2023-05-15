const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true

    }


})

const userModels = mongoose.model('userModels', User);
module.exports = userModels;