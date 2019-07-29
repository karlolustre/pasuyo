const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: "seeker"
        //roles available: admin, seeker, tasker
    },
} , {
    timestamps: true, 
})

module.exports = mongoose.model('user', UserSchema)