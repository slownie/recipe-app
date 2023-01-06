const express = require('express');
const router = express.Router();
const {signupUser, loginUser} = require('../controllers/userController');

// Signup Route '/api/users/signup'
router.post('/signup', signupUser);

// Login Route '/api/users/login'
router.post('/login', loginUser)

module.exports = router;