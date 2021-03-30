import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from './Nav';

const SinglePost = (props) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
      .then(response => setPost(response.data))
      .catch(error => alert('Error loading single post'));
  }, []);

  return (
    // pb -> Use the padding only at the botto m
    <div className="container pb-5">
      <Nav />
      <br />
      {/* Test */}
      {/*<h1>{JSON.stringify(post)}</h1>*/}
      <h1>{post.title}</h1>
      <p className="lead">{post.content}</p>
      <p>
        Author <span className="badge">{post.user}</span> Published on{''}
        <span className = "badge">{new Date(post.createdAt).toLocaleString()}</span>
      </p>
    </div>
  );
};

export default SinglePost;
