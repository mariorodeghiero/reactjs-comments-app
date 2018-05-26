import React, { Component } from "react";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <p className="card">{this.props.comment.comment}</p>;
  }
}

export default Comment;
