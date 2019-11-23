import React, { Component } from 'react';
import Stock from "../assets/stock.png";
import PropTypes from "prop-types";

class FollowCard extends Component {
    static propTypes = {
        categoryName: PropTypes.array.isRequired,
        type: PropTypes.string
        }

        state = {
        events: this.props.categoryName.map(category => {
            return {
            id: category.id,
            name: category.name,
            }
        })
        }

        create_post = (opts) => {
            console.log("posting request to backend server API");
            fetch('http://bleudot-backend-api.herokuapp.com/events/', {
              method: 'put',
              body: JSON.stringify(opts)
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("created Gist")
            });
          }
        
          follow_button = (e, c) => {
            e.preventDefault();
            if (c) {
              console.log(c);
              // this.create_post({id: c.id});
            }
            else {
              console.log("Error")
            }
          }
  render() {
    return (
      <div className="event-container">
        {this.state.events.map(((category, id) => {
          return (
            <div key={id} className="follow-card">
              <div className="follow-image">
                <div className="follow-img-container">
                  <img src={Stock} className="follow-image"></img>
                </div>
              </div>
              <div className="follow-card-body">
                <div className="follow-content">
                  <p className="follow-event-title">
                    {category.name} <br></br>
                  </p>
                  <p className="follow-event-details">
                    {category.organization} <br></br>
                  </p>
                  <div className="follow-btn-container">
                    <button onClick={(e) => this.follow_button(e, category)} className="follow-btn">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }))}

      </div>
    );
  }
}

export default FollowCard;
