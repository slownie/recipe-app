const Recipe = require('../models/recipeModel')
const mongoose = require('mongoose')

// Create a new recipe
const createRecipe = async (req, res) => {
    const {title,desc,steps,ingredients,image,userID,username} = req.body;

    try {
        const recipe = await Recipe.create({title,desc,steps,ingredients,image,userID,username})
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete a recipe
const deleteRecipe = async (req, res) => {
    const {recipeID} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Recipe not found.'})
    }

    const recipe = await Recipe.findOneAndDelete({_id: recipeID});
    if (!recipe) {
        return res.status(400).json({error: 'Recipe not found.'});
    }
    res.status(200).json(recipe);
}

// Update a recipe
const updateRecipe = async (req, res) => {
    const {recipeID} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Recipe not found.'});
    }

    const recipe = await Recipe.findOneAndUpdate({_id: recipeID}, {
        ...req.body
    })

    if (!recipe) {
        return res.status(400).json({error: 'Recipe not found.'});
    }
    res.status(200).json(recipe);
}

// Get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find()

    res.status(200).json(recipes)
}

// Get user created recipes
const getUserRecipes = async(req, res) => {
    const {userID} = req.params;
    const recipes = await Recipe.find({userID}).sort()
    res.status(200).json(recipes)
}

// Get a single recipe
const getRecipe = async (req, res) => {
    const {recipeID} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Recipe does not exist.'})
    }
    
    const recipe = await Recipe.findById(recipeID);
    if (!recipe) {
        return res.status(404).json({error: 'Recipe does not exist.'})
    }
    res.status(200).json(recipe);
}


module.exports = {createRecipe, deleteRecipe, updateRecipe, getRecipes, getUserRecipes, getRecipe}