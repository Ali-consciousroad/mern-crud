import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAsync } from '../postSlice';
import { Link } from 'react-router-dom';

const PostControlButtons = ({ slug }) => {
  
  const dispatch = useDispatch();
  
  const deleteConfirm = () => {
    let answer = window.confirm('Are you sure you want to delete this post?');
    if (answer) {
      dispatch(deleteAsync(slug));
    }
  };
  
  
  return (
    <div className="">
      <Link className="btn btn-sm btn-outline-warning"
        to={`/post/update/${slug}`} >
          Update
      </Link>
      <button
        className="btn btn-sm btn-outline-danger ml-1"
        onClick={deleteConfirm}
          >
          Delete
                </button>
    </div>
  )
}

export default PostControlButtons;