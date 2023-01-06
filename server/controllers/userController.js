const UserModel = require('../models/userModel');
const mongoose = require('mongoose');

// Signup User
const signupUser = async (req,res) => {
    const {username, email, password} = req.body;

    try {
        const user = await UserModel.signup(username, email, password);  
        const id = user._id;
        res.status(200).json({user, id});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Login User
const loginUser = async(req,res) => {
    const {email, password} = req.body;

    try {
        const user = await UserModel.login(email, password);
        const id = user._id;
        res.status(200).json({user, id});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {signupUser, loginUser}