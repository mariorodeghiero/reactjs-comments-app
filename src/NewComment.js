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
        comment: this.refs.comment.value
      });
      this.refs.comment.value = "";
      event.preventDefault();
    }
  }
  render() {
    return (
      <div className="row">
        <textarea
          ref="comment"
          placeholder="Write your comment and press enter!"
          className="form-control"
          onKeyDown={this.handleEnter}
          autoFocus={true}
        />
      </div>
    );
  }
}

export default NewComment;
