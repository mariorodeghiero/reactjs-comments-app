import React, { Component } from "react";

class Comments extends Component {
  render() {
    return (
      <div>
        Rendering
        {JSON.stringify(this.props.comments)}
      </div>
    );
  }
}

export default Comments;
