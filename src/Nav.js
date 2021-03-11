import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  render() {
    const linkStyle = {
      textDecoration: "none",
      color: "#c4c4c4",
    };

    return (
      <nav className="nav">
        <ul className="nav-list">
          <Link to="/" style={linkStyle}>
            <li>Photo</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
