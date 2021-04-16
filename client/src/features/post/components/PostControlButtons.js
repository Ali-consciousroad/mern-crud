import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAsync } from '../postSlice';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

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
      <Button variant='outline-warning'>
        <Link
          className="text-dark"
          to={`/post/update/${slug}`} >
          Update
        </Link>
      </Button>

      <Button variant='outline-danger' onClick={deleteConfirm}>
        Delete
      </Button>

          
            
    </div>
  )
}

export default PostControlButtons;