import React, { Component } from "react";
import "bootstrap-css-only";

import NewComment from "./NewComment";
import Comments from "./Comments";

class App extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);
    this.state = {
      comments: {
        "1": {
          comment: "first"
        },
        "2": {
          comment: "second"
        }
      }
    };
  }

  postNewComment(comment) {
    this.setState({
      comments: {
        ...this.state.comments,
        comment
      }
    });
  }

  render() {
    return (
      <div className="container">
        <NewComment postNewComnent={this.state.postNewComment} />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
