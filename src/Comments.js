import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div>
        Rendering
        <p>{JSON.stringify(this.props.comments)}</p>
      </div>
    );
  }
}

export default Comments;
