import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from './Nav'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const UpdatePost = props => {
  const [state, setState] = useState({
    title: '',
    content: '',
    slug: '',
    user: ''
  })

  const { title, slug, user } = state

  const [content, setContent] = useState('')

  // rich text editor handle change
  const handleContent = event => {
    console.log(event)
    setContent(event)
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then(response => {
        const { title, content, slug, user } = response.data
        setState({ ...state, title, slug, user });
        setContent(content);
      })
      .catch(error => alert('Error updating post'))
  }, [])

  /* Code from the Create.js client side reuseds */
  /* No change needed for the handleChange function */
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

  const handleSubmit = event => {
    event.preventDefault()
    /*console.table({title, content, user});*/
    axios
      .put(`${process.env.REACT_APP_API}/post/${slug}`, {
        title,
        content,
        user
      })
      .then(response => {
        console.log(response)
        const { title, content, slug, user } = response.data
        //empty state
        setState({ ...state, title, content, user })
        //show success alert
        alert(`Post titled ${title} is updated`)
      })
      .catch(error => {
        console.log(error.response)
        alert(error.response.data.error)
      })
  }

  const showUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label className='text-muted'>Title</label>
        {/*<input value={state.title} type="text" className="form-control" placeholder="Post title" required /> --
        Shorter syntax allowed thanks to state destructuration
        Add event handler to handle any change made on the component */}
        <input
          onChange={handleChange('title')}
          value={title}
          type='text'
          className='form-control'
          placeholder='Post title'
          required
        />
      </div>

      <div className='form-group'>
        <label className='text-muted'>Content</label>
        {/* <input value={state.content} type="text" className="form-control" placeholder="Write something" required /> */}
        <ReactQuill
            onChange={handleContent}
            value={content}
            theme="bubble"
            className='pb-5 mb-3'
            placeholder='Write something..'
            style={{ border: '1px solid #313' }}
          />
      </div>

      <div className='form-group'>
        <label className='text-muted'>User</label>
        {/* <input value={state.user} type="text" className="form-control" placeholder="Your name" required /> */}
        <input
          onChange={handleChange('user')}
          value={user}
          type='text'
          className='form-control'
          placeholder='Post title'
          required
        />
      </div>

      <div>
        <button className='btn btn-primary'>Update</button>
      </div>
    </form>
  )

  return (
    // pb -> Use the padding only at the botto m
    <div className='container pb-5'>
      <Nav />
      <br />
      {/* Test */}
      {/*<h1>{JSON.stringify(post)}</h1>*/}
      <h1>UPDATE POST</h1>
      {showUpdateForm()}
    </div>
  )
}

export default UpdatePost
