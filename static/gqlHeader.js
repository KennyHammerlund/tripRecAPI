import React, { Component } from "react";
const ReactDOM = ReactDOM;

class gqlHeader extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="image">
          <img src="/graphql/logo.svg" height="40px" />
        </div>
        <div className="links">
          <a href="/coverage" className="toolbar-button" target="_blank">
            Test Coverage{" "}
            <i className="material-icons" style={{ fontSize: 12 }}>
              launch
            </i>
          </a>
          <a href="/voyager" className="toolbar-button" target="_blank">
            Graphql Voyager{" "}
            <i className="material-icons" style={{ fontSize: 12 }}>
              launch
            </i>
          </a>
        </div>
      </div>
    );
  }
}

export default gqlHeader;

ReactDOM.render(<gqlHeader />, document.getElementById("header"));
