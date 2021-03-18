// Take out the logic (the arrow function) from the routes
exports.create = (req, res) => {
  res.json({
    data: 'Hello from the controller'
  });
};
