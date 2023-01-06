const mongoose = require('mongoose')
const Schema = mongoose.Schema
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    steps: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);