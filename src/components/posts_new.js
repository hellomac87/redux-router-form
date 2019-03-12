import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { connect } from "react-redux";

class PostsNew extends Component {
  render() {
    const { createPost, handleSubmit } = this.props;

    console.log(this.props);

    return (
      <form onSubmit={handleSubmit(createPost)} style={{ padding: "1rem" }}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field
            className="form-control"
            type="text"
            name="title"
            component="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <Field
            className="form-control"
            type="text"
            name="categories"
            component="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
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

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a username";
  }
  if (!values.categories) {
    errors.categories = "Enter a categories";
  }
  if (!values.content) {
    errors.content = "Enter a content";
  }
  return errors;
};

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reducForm: 1st us form config, 2nd is mapStateToProps, 3nd is mapDispatchToProps
PostsNew = connect(
  null,
  { createPost }
)(PostsNew);

export default reduxForm({
  form: "PostsNewForm",
  validate
})(PostsNew);
