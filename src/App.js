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

    this.props.auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true, user });
      } else {
        this.setState({ isLoggedIn: false, user: {} });
      }
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
    this.props.auth.signInWithPopup(this.props.providers[provider]);
  }
  render() {
    return (
      <div className="container">
        {this.state.isLoggedIn && (
          <div>
            <h4>{this.state.user.displayName}</h4>
            <img
              className="photo"
              alt={this.state.user}
              src={this.state.user.photoURL}
            />
            <NewComment postNewComment={this.postNewComment} />
            <button onClick={() => this.props.auth.signOut()}>Logout</button>
          </div>
        )}
        {!this.state.isLoggedIn && (
          <div className="alert alert-info">
            <button onClick={() => this.auth("google")}>Google</button>
          </div>
        )}
        <Comments comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
