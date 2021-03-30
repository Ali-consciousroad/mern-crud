// Import express
const express = require('express');
// Express can handle routes
const router = express.Router();

// route
// Import the logic from the controller methods
const { create, list, read } = require('../controllers/post');
// app.get() changed by router.get()
// Will be handled by the controller method
// Changed from router.get -> router.post to test the api post request with Postman
router.post('/post', create);
router.get('/posts', list);
router.get('/post/:slug', read);

module.exports = router;
