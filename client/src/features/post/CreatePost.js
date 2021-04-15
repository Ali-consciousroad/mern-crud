import React from 'react';
import { useDispatch } from 'react-redux';
import { createAsync } from './postSlice';

import PostForm from './components/PostForm';


const CreatePost = (props) => {
  const dispatch = useDispatch();

  const createPost = (newPost) => {
    dispatch(createAsync(newPost))
  }

  return (
    <div className="container pt-5">
      <h1>Create POST</h1>
      <PostForm  submitLabel="Create" onSubmit={createPost} />
    </div>
  );
};

export default CreatePost;
