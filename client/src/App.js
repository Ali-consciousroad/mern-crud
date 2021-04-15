import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PostListWrapper from './features/post/components/PostListWrapper';


// Arrow function: Parenthesis will word only with one statement otherwise we need to use brackets.
const App = () => {
  return (
    <div className="pt-5">
      <h1>MERN CRUD</h1>
      <PostListWrapper/>
    </div>
  );
};

export default App;
