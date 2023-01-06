const express = require('express');
const router = express.Router();
const {createRecipe, getRecipes, deleteRecipe, updateRecipe, getUserRecipes, getRecipe} = require('../controllers/recipeController');

// Create a recipe
router.post('/create', createRecipe);

// Delete a recipe
router.delete('/delete/:id', deleteRecipe);

// Update a recipe
router.patch('/update/:id', updateRecipe);

// Get all recipes
router.get('/getAll', getRecipes);

// Get a single recipe
router.get('/get/:id', getRecipe);

// Get all user recipes
router.get('/getAllUser/:id', getUserRecipes);


module.exports = router;