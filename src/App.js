import React from 'react';
import logo from './logo.svg';
import './stylesheets/serimApp.css';

function App() {
  return (
    <div className="App">

      <div class="topnav-container">
        <div class="topnav-menu">
          <a class="active" href="discover">Discover</a>
          <a href="create">Create </a>
        </div>
        <div class="topnav-title">
          <a href="">BleuDot</a>
        </div>
      </div>

      <div class="search-box">
        Show me <input type="text" placeholder="multicultural, music, cooking..." name="search"/>
        In <input type="text" placeholder="Community" name="search"/>
      </div>

    </div>


  );
}

export default App;
