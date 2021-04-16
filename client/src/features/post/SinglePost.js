import React from 'react';
import { useSelector } from 'react-redux';
import Post from './components/Post';

const SinglePost = (props) => {
  const slug = props.match.params.slug;
  const post = useSelector(state => state.post.postMap[slug])
  

  return (
    <div className="container pt-5">
      {post ?
        <Post {...post} />
        :
        <div className="text-center">This post could not be found</div>
      }
    </div>
  )
};

export default SinglePost;