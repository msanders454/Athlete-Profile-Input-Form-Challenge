
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: true

    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    sports: {
        type: String,
        trim: true,
        required: true
    },
    nationality: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: String,
        trim: true,
        required: true
    },
    association: {
        type: String,
        trim: true,
        required: true
    },
    team: {
        type: String,
        trim: true,
        required: true
    },
    about: {
        type: String,
        trim: true,
        required: true
    },
    interests: {
        type: String,
        trim: true,
        required: true
    },

});

const athlete = mongoose.model('athlete', schema);
module.exports = athlete;