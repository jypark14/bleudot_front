import React from 'react';
import logo from './logo.svg';
import './Logo.css';

function Logo() {
  return (
    <div className="App">

      <div className="topnav-container">
        <div className="topnav-menu">
          <a className="active" href=".">Discover</a>
          <a href=".">Create </a>
        </div>
        <div className="topnav-title">
          <a href=".">BleuDot </a>
        </div>
      </div>

      <div class="search-box">
        <div classname="show_me">
          Show me <input type="text" placeholder="multicultural, music, cooking..." name="search" />
          In <input type="text" placeholder="Community" name="search" />
        </div>
      </div>
    </div>

  );
}

export default Logo;
