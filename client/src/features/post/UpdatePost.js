import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAsync } from './postSlice';

import PostForm from './components/PostForm';


const UpdatePost = (props) => {
  const dispatch = useDispatch();
  const postMap = useSelector(state => state.post.postMap)
  
  const postSlug = props.match.params.slug;
  const post = postMap[postSlug];
  
  const updatePost = (update) => {
    dispatch(updateAsync({ postSlug, update }))
  }

  return (
    <div className="container pt-5">
      <h1>UPDATE POST</h1>
      <PostForm initial={{ ...post }} submitLabel="Updat" onSubmit={updatePost} />
    </div>
  );
};

export default UpdatePost;
