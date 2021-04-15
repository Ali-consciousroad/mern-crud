import React from 'react';
import Post from './Post';
import PostControlButtons from './PostControlButtons';

const PostList = ({ postList, onDelete, onUpdate }) => {

  return (<>
    { postList.map(post => (
      <div className="row" key={post._id} style={{ borderBottom: '1px solid silver' }}>
        <div className="col-sm-6 col-md-8 col-lg-10">
          <Post key={post._id} {...post} />
        </div>
        <div className="col-sm-6 col-md-4 col-lg-2">
          <PostControlButtons {...post} />
        </div>
      </div>
    ))
  }
  </>)
};

export default PostList;
