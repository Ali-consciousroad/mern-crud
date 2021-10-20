import React, { useState } from "react";
// Arrow function: Parenthesis will word only with one statement otherwise we need to use brackets.
const Create = () => {
  // State
  const [state, setState] = useState({
    title: "",
    content: "",
    user: "",
  });

  // We'll grab the state content like this
  /**
   state.title
   state.content
   */

  // destructure values from state
  // So we don't need to write state.title anymore
  // We can just write the destructured value
  const { title, content, user } = state;

  // onchange event handler (give the event parameter as default)
  // console.log the state 
  // Use the spread operator to spread the value of the states
  // Update what need to be updated, here we update the name 
  const handleChange = (name) => (event) => {
    console.log('name', name, 'event', event.target.value);
    setState({ ...state, [name]: event.target.value });
  };

  // Same code - Old school JS 
  // Function that return another function 

  // function handleChange(name) {
  //   return function(event){
  //     console.log('name', name, 'event', event.target.value);
  //     setState({ ...state, [name]: event.target.value});
  //   };
  // }


  return (
    <div className="container p-5">
      <h1>CREATE POST</h1>
      {/* Display the state directly on the screen */}
      {JSON.stringify(state)}
      <form>
        <div className="form-group">
          <label className="text-muted">Title</label>
          <input
            onChange={handleChange("title")}
            value={title}
            type="text"
            className="form-control"
            placeholder="Post title"
            required
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Content</label>
          <input
            onChange={handleChange("content")}
            value={content}
            type="text"
            className="form-control"
            placeholder="Write something"
            required
          />
        </div>

        <div className="form-group">
          <label className="text-muted">User</label>
          <input
            onChange={handleChange("user")}
            value={user}
            type="text"
            className="form-control"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
