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


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={Create} />
        <Route path="/post/:slug" exact component={SinglePost}/>
      </Switch>
    </Router>
  );
};

export default Routes;
