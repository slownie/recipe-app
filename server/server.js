require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
const userRoutes = require('./routes/user')
const recipeRoutes = require('./routes/recipe')

// Only fire routes at a specific path
app.use('/api/user', userRoutes);
app.use('/api/recipe', recipeRoutes);

mongoose.connect(process.env.URI)
    .then(() => {
        // Don't listen for requests until we connect to the database
        app.listen(process.env.PORT, () => console.log('Connected to db & Server running on PORT', process.env.PORT))
    })
    .catch((error) => {
        console.log(error)
    })