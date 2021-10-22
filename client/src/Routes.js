import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Create from './Create';
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <PrivateRoute path="/create" exact component={Create} />
        <Route path="/login" exact component={Login} />
        <Route path="/post/:slug" exact component={SinglePost}/>
        <PrivateRoute path="/post/update/:slug" exact component={UpdatePost}/>
      </Switch>
    </Router>
  );
};

export default Routes;
