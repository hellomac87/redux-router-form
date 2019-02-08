import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./components/App";
import PostIndex from "./components/posts_index";

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/posts" component={PostIndex} />
  </Switch>
);
