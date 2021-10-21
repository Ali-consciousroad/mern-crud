// Copy past the code from post.js and adapt it to auth.js

// Import express
const express = require('express');
// Express can handle routes
const router = express.Router();

// route
// Import the logic from the controller methods
const { login } = require('../controllers/auth');
// post login endpoint controlled by login controller method
router.post('/login', login);

module.exports = router;
