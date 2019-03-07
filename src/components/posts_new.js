import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  render() {
    const { fields, handleSubmit } = this.props;

    console.log(this.props);

    return (
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label for="title">Title</label>
          <Field
            className="form-control"
            type="text"
            name="title"
            component="input"
          />
        </div>
        <div>
          <label for="categories">Categories</label>
          <Field
            className="form-control"
            type="text"
            name="categories"
            component="input"
          />
        </div>
        <div>
          <label for="content">Content</label>
          <Field
            className="form-control"
            type="textarea"
            name="content"
            component="textarea"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-block" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"]
})(PostsNew);
