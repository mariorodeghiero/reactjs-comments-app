import React, { Component } from "react";
import react from "../react.svg";

class Footer extends Component {
  state = {};
  render() {
    let icon = react;
    return (
      <div className="footer">
        <p>
          Built with <img src={icon} className="icon" />
        </p>
      </div>
    );
  }
}

export default Footer;
