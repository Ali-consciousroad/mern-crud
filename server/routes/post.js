// Import express
const express = require('express');
// Express can handle routes
const router = express.Router();

// route
// Import the logic from the controller methods
const { create } = require('../controllers/post');
// app.get() changed by router.get()
router.get('/post', create);

//
module.exports = router;
