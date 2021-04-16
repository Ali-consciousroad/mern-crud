import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAsync } from './postSlice';

import PostForm from './components/PostForm';
import PostListWrapper from './components/PostListWrapper';


const UpdatePost = (props) => {
  const dispatch = useDispatch();
  const postMap = useSelector(state => state.post.postMap)
  
  const postSlug = props.match.params.slug;
  const post = postMap[postSlug];
  
  const updatePost = (update) => {
  dispatch(updateAsync({ postSlug, update }))
  }

  return (
    <div className="pt-5">
      <h1>UPDATE POST</h1>
      <div className="row">
        <div className="col-6">
          <PostListWrapper />
        </div>
        <div className="col-6">
          <PostForm initial={{ ...post }} submitLabel="Update" onSubmit={updatePost} />
        </div>
      </div>

    </div>
  );
};

export default UpdatePost;
