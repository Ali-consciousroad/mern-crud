import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from './App';
import Create from './features/post/CreatePost';
import SinglePost from './features/post/SinglePost';
import UpdatePost from './features/post/UpdatePost';
import Nav from './Nav';


const Routes = () => {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/create" exact component={Create} />
          <Route path="/post/:slug" exact component={SinglePost}/>
          <Route path="/post/update/:slug" exact component={UpdatePost}/>
          </Switch>
      </div>
    </Router>
  );
};

export default Routes;
