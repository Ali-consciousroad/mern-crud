const Post = require('../models/post');
const slugify = require('slugify')

// Take out the logic (the arrow function) from the routes
exports.create = (req, res) => {

  // Just show us what we'll get inside the console
  //console.log(req.body);

  // From request body, we need title, content and user if sent from the client
  const { title, content, user } = req.body
  // This method will slufigy the content
  const slug = slugify(title) // My Post => my-post


  // validate
  /*
  if(!title || !content){
    return res.status(400).json({
      error: 'Title and content is required'
    });
  }
  */
  // Replace the if else statement by a switch
  switch (true) {
    case !title:
      return res.status(400).json({ error: 'Title is required' });
      break;
    case !content:
      return res.status(400).json({ error: 'Content is required' });
      break;
  }

  // Create post and send it our DB
  Post.create({ title, content, user, slug }, (err, post) => {
    // Error message
    if (err) {
      console.log(err);
      res.status(400).json({ error: 'Duplicate post. Try another title' });
    }
    res.json(post);
  });
};

// List method
exports.list = (req, res) => {
  Post.find({})
    // Limit the number of posts
    .limit(20)
    // Sort the post base on the date of creation (latest post will come first)
    .sort({ createdAt: -1 })
    .exec((err, posts) => {
      if (err) console.log(err);
      res.json(posts);
    });
};

// Read method - single post based on slug
exports.read = (req, res) => {
  // Test
  // console.log(req.params.slug);
  const { slug } = req.params;
  Post.findOne({ slug }).exec((err, post) => {
    if (err) console.log(err);
    res.json(post);
  });
};

// Update method
exports.update = (req, res) => {
  const { slug } = req.params;
  const { title, content, user } = req.body;
  Post.findOneAndUpdate({ slug }, { title, content, user }, { new: true }).exec((err, post) => {
    if (err) console.log(err);
    res.json(post);
  });
};

// Delete method -
exports.remove = (req, res) => {
  // Test
  // console.log(req.params.slug);
  const { slug } = req.params;
  Post.findOneAndRemove({ slug }).exec((err, post) => {
    if (err) console.log(err);
    res.json({
      message: 'Post deleted'
    });
  });
};
