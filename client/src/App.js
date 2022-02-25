import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'
// Promise based http client for Node.js
import axios from 'axios'
import renderHTML from 'react-render-html'
import { getUser, getToken } from './helpers'
// Arrow function: Parenthesis will word only with one statement otherwise we need to use brackets.
const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        console.log(response)
        setPosts(response.data)
      })
      .catch(error => alert('Error fetching posts'))
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const deleteConfirm = slug => {
    let answer = window.confirm('Are you sure you want to delete this post?')
    if (answer) {
      deletePost(slug)
    }
  }

  const deletePost = slug => {
    //console.log('delete', slug, ' post');
    axios
      .delete(`${process.env.REACT_APP_API}/post/${slug}`, {
        headers: {
          authorization: `Bearer ${getToken()}`
        }
      })
      .then(response => {
        alert(response.data.message)
        fetchPosts()
      })
      .catch(error => alert('Error deleting post'))
  }

  return (
    // pb -> Use the padding only at the botto m
    <div className='container pb-5'>
      <Nav />
      <br />
      <h1>MERN CRUD</h1>
      <br />
      {posts.map((post, i) => (
        <div
          className='row'
          key={post._id}
          style={{ borderBottom: '1px solid silver' }}
        >
          <div className='col pt-3 pb-2'>
            <div className='row'>
              <div className='col-md-10'>
                <Link to={`/post/${post.slug}`}>
                  <h2>{post.title}</h2>
                </Link>

                <div className='lead pt-3'>
                  {renderHTML(post.content.substring(0, 100))}
                </div>
                <p>
                  Author <span className='badge'>{post.user}</span> Published on
                  {''}
                  <span className='badge'>
                    {new Date(post.createdAt).toLocaleString()}
                  </span>
                </p>
              </div>
              {/* Show the delete and update button only if we are logged in */}
              {getUser() && (
                <div className='col-md-2'>
                  <Link
                    to={`/post/update/${post.slug}`}
                    className='btn btn-sm btn-outline-warning'
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => deleteConfirm(post.slug)}
                    className='btn btn-sm btn-outline-danger ml-1'
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
      <br />
      {/* Test - Show the posts client side by usin JSON format */}
      {/* {JSON.stringify(posts)} */}
    </div>
  )
}

export default App
