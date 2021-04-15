import React from 'react';
import { useDispatch } from 'react-redux';
import { createAsync } from './postSlice';

import PostForm from './components/PostForm';
import PostListWrapper from './components/PostListWrapper';


const CreatePost = (props) => {
  const dispatch = useDispatch();

  const createPost = (newPost) => {
    dispatch(createAsync(newPost))
  }

  return (
    <div className="pt-5">
      <h1>Create POST</h1>
      <div className="row">
        <div className="col-6">
          <PostListWrapper />
        </div>
        <div className="col-6">
          <PostForm submitLabel="Create" onSubmit={createPost} />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
