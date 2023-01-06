const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdRecipes: {
        type: Array,
        default: [],
    },
    savedRecipes: {
        type: Array,
        default: []
    }
});

// Signup
userSchema.statics.signup = async function(username, email, password) {
    // Validation
    if (!username || !email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

    const exists = await this.findOne({username});
    if (exists) {
        throw Error('Username already in use.');
    }

    const exists1 = await this.findOne({email});
    if (exists1) {
        throw Error('Email already in use.');
    }

    // Encryption
    const myID = mongoose.Types.ObjectId().toHexString();
    const salt = await bcrypt.genSalt(3);
    const hashword = await bcrypt.hash(password,salt);

    // User Creation
    const user = await this.create({_id: myID, username, email, password: hashword});
    return user;
}

userSchema.statics.login = async function(email, password) {
    // Validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    // Look for user/email
    const user = await this.findOne({email});
    if (!user) {
        throw Error('Incorrect email');
    }

    // Check if password correct
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password')
    }
    return user;
}


module.exports = mongoose.model('User', userSchema);