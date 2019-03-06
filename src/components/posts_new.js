import React, { Component } from "react";
import { reduxForm } from "redux-form";

class PostsNew extends Component {
  render() {
    return (
      <form>
        <h3>Create a new post</h3>
        <div className="form-group" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"]
})(PostsNew);
