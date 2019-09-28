import React, { Component } from 'react';
import './Header.css'
import logo from "../assets/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="header-container">
          <img src={logo} alt="logo" className="logo"></img>
          <div className="left-container">
            <a href="google.com">Discover</a>
            <a>Create</a>
            <a>My Calendar</a>
          </div>
      </div>
    );
  }
}

export default Header;
