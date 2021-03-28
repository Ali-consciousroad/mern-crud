import React, {useState} from 'react';
import axios from 'axios';
import Nav from './Nav';


// Arrow function: Parenthesis will word only with one statement otherwise we need to use brackets.
const Create = () => {

  // This will allow react to control all the HTML components
  // state
  const [state, setState] = useState({
      title: '',
      content: '',
      user: ''
  });

  // destructure values from state
  const {title, content, user} = state;

  // First way : Arrow function
  // Create the event handler function
  // We add a function (an anonymous function) inside another function (the handleChange function)
  const handleChange = (name) => (event) => {
    // Used to check output inside the console of the browser
    // console.log('name', name, 'event', event);
    setState({...state, [name]: event.target.value});
  };

  // Old school function
  /*
  function handleChange(name) {
    return function(event){
      setState({...state, [name]: event.target.value });
    };
  }
  */

  const handleSubmit = event => {
    event.preventDefault();
    /*console.table({title, content, user});*/
    axios
      .post(`${process.env.REACT_APP_API}/post`, { title, content, user})
      .then(response => {
        console.log(response);
        //empty state
        setState({...state, title: '', content: '', user: ''});
        //show success alert
        alert(`Post titled ${response.data.title} is created`);
      })
      .catch(error => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  };


  return (
    <div className="container pb-5">
      {/* Add the navigation bar */}
      <Nav />
      <br/>
      <h1>CREATE POST</h1>
      {/* Second way to show state: Display state information directly inside our /create page */}
      {/* {JSON.stringify(state)} */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="text-muted">Title</label>
          {/*<input value={state.title} type="text" className="form-control" placeholder="Post title" required /> --
          Shorter syntax allowed thanks to state destructuration
          Add event handler to handle any change made on the component */}
          <input
            onChange={handleChange('title')}
            value={title}
            type="text"
            className="form-control"
            placeholder="Post title"
            required />
        </div>

        <div className="form-group">
          <label className="text-muted">Content</label>
          {/* <input value={state.content} type="text" className="form-control" placeholder="Write something" required /> */}
          <textarea onChange={handleChange('content')} value={content} type="text" className="form-control" placeholder="Post title" required />

        </div>

        <div className="form-group">
          <label className="text-muted">User</label>
          {/* <input value={state.user} type="text" className="form-control" placeholder="Your name" required /> */}
          <input onChange={handleChange('user')} value={user} type="text" className="form-control" placeholder="Post title" required />

        </div>

        <div>
          <button className="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  )
}

export default Create;
