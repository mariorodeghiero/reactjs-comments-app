import React, { Component } from "react";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      this.props.postNewComment({
        comment: "test"
      });
      event.preventDefault();
    }
  }
  render() {
    return (
      <div className="row">
        <textarea
          placeholder="Comment!!"
          className="form-control"
          onKeyDown={this.handleEnter}
        />
      </div>
    );
  }
}

export default NewComment;
