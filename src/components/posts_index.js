import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
// import { bindActionCreators } from "redux";

class PostIndex extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  render() {
    return <div>List of blog posts</div>;
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchPosts }, dispatch);
// };

export default connect(
  null,
  { fetchPosts }
)(PostIndex);
