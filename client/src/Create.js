import React, {useState} from 'react';
// Arrow function: Parenthesis will word only with one statement otherwise we need to use brackets.
const Create = () => {

  // State
  const [state, setState] = useState({
    title: '',
    content: '', 
    user: ''
  })

    // We'll grab the state content like this 
  /**
   state.title
   state.content
   */

  // destructure values from state
  // So we don't need to write state.title anymore
  // We can just write the destructured value  
  const {title, content, user} = state

  return (
  <div className="container p-5">
    <h1>CREATE POST</h1>
    <form>

      <div className="form-group">
        <label className="text-muted">Title</label>
        <input value={title } type="text" className="form-control" placeholder="Post title" required />
      </div>

      <div className="form-group">
        <label className="text-muted">Content</label>
        <input value={content} type="text" className="form-control" placeholder="Write something" required />
      </div>

      <div className="form-group">
        <label className="text-muted">User</label>
        <input value={user} type="text" className="form-control" placeholder="Your name" required />
      </div>

      <div>
        <button className="btn btn-primary">Create</button>
      </div>

    </form>
  </div>
);}

export default Create;
