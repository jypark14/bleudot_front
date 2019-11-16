
import React, { Component } from 'react';
import PropTypes from "prop-types";
import Events from './Events';
import Calendar from './Calendar';

class Discover extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      original: props.data,
      filtered: props.data,
      searchBarEventChecked: false,
      searchBarOrgChecked: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.tags = ["Sports", "NCAA"]
  }
  
  handleInputChange(event) {
    this.setState(current => ({ filtered: current.original.filter(item => {
      const lc = item.name.toLowerCase();

      // change search term to lowercase
      const filter = document.querySelector('#main-search-box').value.toLowerCase();
      // check to see if the current list item includes the search term
      // If it does, it will be added to newList. Using lowercase eliminates
      // issues with capitalization in search terms and search content
      return lc.includes(filter);
    })}));
  } 


  render() {
    let categories = ["Upcoming Events", "Trending", "Happening Near You"]
    return (
      <div className="container">
        <div className="search-box">
          <input id="main-search-box" className="search-box-input" type="text" placeholder="multicultural, music, cooking.." onChange={ this.handleInputChange } />
          <div className="checkbox-container">
            <div className="inputBox">
              <input type="checkbox" />
              <span className="checkbox-custom"></span>
            </div>
            <div className="checkbox-real-label">Events</div>
          </div>
          <div className="checkbox-container">
            <div className="inputBox">
              <input type="checkbox" />
              <span className="checkbox-custom"></span>
            </div>
            <div className="checkbox-real-label">Organizations</div>
          </div>
        </div>

        {categories.map(((category, id) => {
          return (
            <div key={id }className="category">
              <div className="title">{category}</div>
              {(id === 0) ?
                (
                  <Events type="upcoming" categoryName={this.state.filtered} topic="upcoming"></Events>
                ) :
                (<div></div>)
              }
              {(id === 1) ?
                (
                  <Events categoryName={this.state.filtered} topic="trending"></Events>
                ) :
                (<div></div>)
              }
              {(id === 2) ?
                (
                  <Events categoryName={this.state.filtered} topic="near"></Events>
                ) :
                (<div></div>)
              }
            </div>
          )
        }))}
      <div className="event-container">
        <Calendar calendar_name="CMU Basketball Team" tags={this.tags} edited_time={new Date(2016, 11)} />
      </div>
      </div>
    );
  }
}

export default Discover;