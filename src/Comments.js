import React, { Component } from "react";

class Comments extends Component {
  // renderComment(key, comment) {
  //   return <p key={key}>{comment.comment}</p>;
  // }
  render() {
    return <div>{JSON.stringify(Object.keys(this.props.Comments))}</div>;
  }
}

export default Comments;
