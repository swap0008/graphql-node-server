const mongoose = require('mongoose');
const Joi = require('joi');

const Student = mongoose.model('Student', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
}));

function validateStudent(student) {
    const schema = {
        name: Joi.string(),
        age: Joi.number(),
        id: Joi.number()
    };

    return Joi.validate(student, schema);
}

module.exports = {
    Student,
    validateStudent
}