import React from 'react';
import Nav from './Nav';
// Arrow function: Parenthesis will word only with one statement otherwise we need to use brackets.
const App = () => (
  // pb -> Use the padding only at the bottom
  <div className="container pb-5">
    <Nav />
    <h1>MERN CRUD</h1>
    <p>Form</p>
  </div>
);

export default App;
