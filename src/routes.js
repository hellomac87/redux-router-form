import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import PostIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";

export default (
  <Switch>
    <Route exact path="/" component={PostIndex} />
    <Route exact path="/posts" component={PostIndex} />
    <Route exact path="/posts/new" component={PostsNew} />
  </Switch>
);
