import React, { Component } from "react";

class NewComment extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <textarea placeholder="Comment!!" className="form-control" />
      </div>
    );
  }
}

export default NewComment;
