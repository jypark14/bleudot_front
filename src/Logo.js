import React from 'react';
import logo from './logo.svg';
import './Logo.css';

function Logo() {
  return (
    <div className="App">

      <div class="topnav-container">
        <div class="topnav-menu">
          <a class="active" href="discover">Discover</a>
          <a href="create">Create </a>
        </div>
        <div class="topnav-title">
          <a href="bleudot">BleuDot</a>
        </div>
      </div>

      <div class="search-box">
        <div classname="show_me">
        Show me <input type="text" placeholder="multicultural, music, cooking..." name="search"/>
        In <input type="text" placeholder="Community" name="search"/>
        </div>
      </div>

    </div>


  );
}

export default Logo;
