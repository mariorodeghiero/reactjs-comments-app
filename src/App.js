import React, { Component } from "react";
import "bootstrap-css-only";

import NewComment from "./NewComment";
import Comments from "./Comments";
import base from "./base";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);

    this.postNewComment = this.postNewComment.bind(this);

    this.state = {
      comments: {},
      isLoggedIn: false,
      user: ""
    };

    this.refComments = base.syncState("comments", {
      context: this,
      state: "comments"
    });
  }

  postNewComment(comment) {
    const comments = {
      ...this.state.comments
    };
    const timestamp = Date.now();
    comments[`comm-${timestamp}`] = comment;
    this.setState({
      comments: comments
    });
  }

  auth(provider) {
    console.log("------------------------------------");
    console.log(provider);
    console.log("------------------------------------");
  }
  render() {
    return (
      <div className="container">
        {this.state.isLoggedIn && (
          <NewComment postNewComment={this.postNewComment} />
        )}
        {!this.state.isLoggedIn && (
          <div className="alert alert-info">
            <button onClick={() => this.auth("gitHub")}>
              Enter with your social media
            </button>
          </div>
        )}
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
