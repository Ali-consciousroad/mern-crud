// Import express
const express = require('express');
// Express can handle routes
const router = express.Router();

// route
// Import the logic from the controller methods
const { create, list, read, update, remove } = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');
// app.get() changed by router.get()
// Will be handled by the controller method
// Changed from router.get -> router.post to test the api post request with Postman
router.post('/post', requireSignin, create);
router.get('/posts', list);
router.get('/post/:slug', read);
router.put('/post/:slug', requireSignin, update);
router.delete('/post/:slug', requireSignin, remove);

/*router.get('/secret', requireSignin, (req, res) => {
    res.json({
        data: req.user.name // Can't get the req.user.name value on Postman!
    });
});
*/

module.exports = router;