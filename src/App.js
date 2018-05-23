import React, { Component } from "react";
import "bootstrap-css-only";

import NewComment from "./NewComment";
import Comments from "./Comments";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: {
        "1": {
          comments: "first"
        },
        "2": {
          comments: "second"
        }
      }
    };
  }

  render() {
    return (
      <div className="container">
        <NewComment />
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
