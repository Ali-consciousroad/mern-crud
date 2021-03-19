const Post = require('../models/post');

// Take out the logic (the arrow function) from the routes
exports.create = (req, res) => {
  /*
  res.json({
    data: 'Hello from the controller'
  });
  */
    // Just show us what we'll get inside the console
    console.log(req.body);

};
