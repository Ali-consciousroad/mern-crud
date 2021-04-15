import React, { useEffect } from 'react';
import PostList from './PostList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAsync } from '../postSlice';

const PostListWrapper = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllAsync());
  }, [dispatch]);
  
  const postMap = useSelector(state => state.post.postMap)
  

  
  return <PostList postList={Object.values(postMap)}/>
  


}

export default PostListWrapper;