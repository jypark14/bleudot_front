import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Discover.css';
import Events from './Events';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import Logo from './Logo';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: ["SWE", "ECE", "IEEE", "Build", "5", "6"],
      trending: ["1","2","3","4","5","6"],
      near: ["1","2","3","4"]
    };
  }

 
  render() {
    var categories= ["Upcoming Events", "Trending", "Happening Near You"]
    return (
      <div>
          <div className="main-component">
          <div classname="logo"> <Logo></Logo></div>
            <dviv>
            <button class="button1">Organizations</button>
            <button class="button2">Events</button>
            </dviv>
            {categories.map(((category, id) => {
              return ( 
                <div className="category">
                  <a className="title">{category}</a>
                  {(id === 0) ? 
                    (
                        <Events categoryName={this.state.upcoming}></Events>
                     ) : 
                    (<div></div>)
                  }
                  {(id === 1) ?
                    (<div>
                      <Events categoryName={this.state.trending}></Events>
                    </div>) : 
                    (<div></div>)
                  }
                  {(id === 2) ?
                    (<div>
                      <Events categoryName={this.state.near}></Events>
                    </div>) : 
                    (<div></div>)
                  }
                </div>
              )
            }))} 
            
          </div>    
      </div>
    );
  }
}

export default Discover;
