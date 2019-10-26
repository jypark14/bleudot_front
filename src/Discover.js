import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Discover.css';
import Events from './Events';
import PerfectScrollbar from 'react-perfect-scrollbar'
// import 'react-perfect-scrollbar/dist/css/styles.css';
import Logo from './Logo';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming: ["SWE", "ECE", "IEEE", "Build", "5", "6"],
      trending: ["1", "2", "3", "4", "5", "6"],
      near: ["1", "2", "3", "4"],
      event_upcoming: {
        title: ["Korean Food Sale", "ASA Boba Sale", "3 Sale", "4 Sale", "5 Sale", "6 Sale"],
        org: ["Korean Student Association", "Asian Student Organization", "3 Org", "4 Org", "5 Org", "6 Org"],
        day: ["28th", "29th", "30th", "31th", "32th", "33th"],
        month: ["OCT", "OCT", "OCT", "OCT", "OCT", "OCT"],
        time: ["10 AM - 2 PM", "1PM - 3PM", "3PM - 5PM", "6PM- 8PM", "8PM - 10PM", "11PM - 1AM"],
      },
      event_trending: {
        title: ["Korean Food Sale", "ASA Boba Sale", "3 Sale", "4 Sale", "5 Sale", "6 Sale"],
        org: ["Korean Student Association", "Asian Student Organization", "3 Org", "4 Org", "5 Org", "6 Org"],
        day: ["28th", "29th", "30th", "31th", "32th", "33th"],
        month: ["OCT", "OCT", "OCT", "OCT", "OCT", "OCT"],
        time: ["10 AM - 2 PM", "1PM - 3PM", "3PM - 5PM", "6PM- 8PM", "8PM - 10PM", "11PM - 1AM"],
      },
      event_: {
        title: ["Korean Food Sale", "ASA Boba Sale", "3 Sale", "4 Sale", "5 Sale", "6 Sale"],
        org: ["Korean Student Association", "Asian Student Organization", "3 Org", "4 Org", "5 Org", "6 Org"],
        day: ["28th", "29th", "30th", "31th", "32th", "33th"],
        month: ["OCT", "OCT", "OCT", "OCT", "OCT", "OCT"],
        time: ["10 AM - 2 PM", "1PM - 3PM", "3PM - 5PM", "6PM- 8PM", "8PM - 10PM", "11PM - 1AM"],
      },
    };
  }


  render() {
    var categories = ["Upcoming Events", "Trending", "Happening Near You"]
    return (
      <div>
        <div className="main-component">
          <div classname="logo"> <Logo></Logo></div>
          <div>
            <button class="button1">Organizations</button>
            <button class="button2">Events</button>
          </div>
          {categories.map(((category, id) => {
            return (
              <div className="category">
                <a className="title">{category}</a>
                {(id === 0) ?
                  (
                    <Events type="upcoming" categoryName={this.state.upcoming} event={this.state.event_upcoming}></Events>
                  ) :
                  (<div></div>)
                }
                {(id === 1) ?
                  (<div>
                    <Events categoryName={this.state.trending} event={this.state.event_trending}></Events>
                  </div>) :
                  (<div></div>)
                }
                {(id === 2) ?
                  (<div>
                    <Events categoryName={this.state.near} event={this.state.event_}></Events>
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
