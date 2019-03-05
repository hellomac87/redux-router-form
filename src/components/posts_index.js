import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
// import { bindActionCreators } from "redux";

class PostIndex extends Component {
  componentDidMount() {
    const { fetchPosts } = this.props;
    fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new">Add a Post</Link>
        </div>
        List of blog posts
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ fetchPosts }, dispatch);
// };

export default connect(
  null,
  { fetchPosts }
)(PostIndex);
