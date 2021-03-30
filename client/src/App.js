import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom';
// Promise based http client for Node.js
import axios from 'axios';
// Arrow function: Parenthesis will word only with one statement otherwise we need to use brackets.
const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get(`${process.env.REACT_APP_API}/posts`)
      .then(response => {
        console.log(response)
        setPosts(response.data)
      })
      .catch(error => alert('Error fetching posts'));
  };

  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    // pb -> Use the padding only at the botto m
    <div className="container pb-5">
      <Nav />
      <br />
      <h1>MERN CRUD</h1>
      <br />
      {posts.map((post, i) => (
        <div className="row" key={post._id} style={{borderBottom: '1px solid silver'}} >
          <div className="col pt-3 pb-2">
            <Link to={`/post/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p className="lead">{post.content.substring(0, 100)}</p>
            <p>
              Author <span className="badge">{post.user}</span> Published on{''}
              <span className = "badge">{new Date(post.createdAt).toLocaleString()}</span>
            </p>
          </div>
        </div>
      ))}
      <br />
      {/* Test - Show the posts client side by usin JSON format */}
      {/* {JSON.stringify(posts)} */}
    </div>
  );
};

export default App;
