import React from 'react';
// Arrow function: Parenthesis will word only with one statement otherwise we need to use brackets.
const Create = () => (
  <div className="container p-5">
    <h1>CREATE POST</h1>

    <form>

      <div className="form-group">
        <label className="text-muted">Title</label>
        <input type="text" className="form-control" placeholder="Post title" required />
      </div>

      <div className="form-group">
        <label className="text-muted">Content</label>
        <input type="text" className="form-control" placeholder="Write something" required />
      </div>

      <div className="form-group">
        <label className="text-muted">User</label>
        <input type="text" className="form-control" placeholder="Your name" required />
      </div>

      <div>
        <button className="btn btn-primary">Create</button>
      </div>

    </form>
  </div>
);

export default Create;
