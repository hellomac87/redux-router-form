import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { createPost } from "../actions/index";
import { connect } from "react-redux";

class PostsNew extends Component {
  render() {
    const { createPost, handleSubmit } = this.props;
    // const {
    //   input,
    //   label,
    //   type,
    //   meta: { touched, error, warning }
    // } = this.props;

    console.log(this.props);

    return (
      <form onSubmit={handleSubmit(createPost)} style={{ padding: "1rem" }}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <Field
            type="text"
            name="title"
            label="title"
            component={renderField}
          />
          {/* <div className="text-help">{title.error}</div> */}
        </div>
        <div className="form-group">
          <Field
            type="text"
            name="categories"
            label="categories"
            component={renderField}
          />
        </div>
        <div className="form-group">
          <Field
            type="textarea"
            name="content"
            label="content"
            component={renderField}
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

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        className="form-control"
        {...input}
        placeholder={label}
        type={type}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

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
