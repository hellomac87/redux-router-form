import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

class PostsNew extends Component {
  render() {
    return (
      <Container>
        <Form>
          <h3>Create A New Post</h3>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" />
          </FormGroup>
          <FormGroup>
            <Label for="categories">Categories</Label>
            <Input type="text" name="categories" />
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input type="textarea" name="content" />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm",
  fields: ["title", "categories", "content"]
})(PostsNew);
