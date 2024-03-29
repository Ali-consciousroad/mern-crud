import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import Nav from './Nav'
import {authenticate, getUser} from './helpers'

const Login = (props) => {
  // create a state
  const [state, setState] = useState({
    name: '',
    password: ''
  })

  const { name, password } = state // destructure values from state

  // Prevent access to the login page when we are already logged in and redirect to the home page
  useEffect(() => {
    getUser() && props.history.push('/');
  }, []);

  // First way : Arrow function
  // Create the event handler function
  // We add a function (an anonymous function) inside another function (the handleChange function)
  const handleChange = name => event => {
    // Used to check output inside the console of the browser
    // console.log('name', name, 'event', event);
    setState({ ...state, [name]: event.target.value })
  }

  // Old school function
  /*
  function handleChange(name) {
    return function(event){
      setState({...state, [name]: event.target.value });
    };
  }
  */

  // Use the same event handlers than in the Create.js page
  const handleSubmit = event => {
    event.preventDefault()
    /*console.table({title, content, user});*/
    console.table({ name, password });
    axios
      .post(`${process.env.REACT_APP_API}/login`, { name, password })
      .then(response => {
        console.log(response);
        // response will contain a token and name 
        authenticate(response, () => props.history.push('/create'));
        // redirect to create page
      })
      .catch(error => {
        console.log(error.response);
        alert(error.response.data.error);
      });
  }

  return (
    <div className='container pb-5'>
      <Nav />
      <br />
      <h1>LOGIN</h1>
      <br />
      {/* Form taken from the Create component and adapted to the Login comp. */}
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='text-muted'>Name</label>
          {/*<input value={state.title} type="text" className="form-control" placeholder="Post title" required /> --
          Shorter syntax allowed thanks to state destructuration
          Add event handler to handle any change made on the component */}
          <input
            onChange={handleChange('name')}
            value={name}
            type='text'
            className='form-control'
            placeholder='Your name'
            required
          />
        </div>

        <div className='form-group'>
          <label className='text-muted'>Password</label>
          {/* <input value={state.user} type="text" className="form-control" placeholder="Your name" required /> */}
          <input
            onChange={handleChange('password')}
            value={password}
            type='password'
            className='form-control'
            placeholder='Your password'
            required
          />
        </div>

        <div>
          <button className='btn btn-primary'>Login</button>
        </div>
      </form>
    </div>);
}

export default withRouter(Login); 
