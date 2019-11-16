import React, { Component } from 'react';
import Stock from "../assets/stock.png";
import Line from "../assets/line.png";
import PropTypes from "prop-types";


class Calendar extends Component {
  static propTypes = {
    calendar_name: PropTypes.string.isRequired,
		tags: PropTypes.array.isRequired,
		edited_time: PropTypes.instanceOf(Date)
  }

  state = {
		calendar_name: this.props.calendar_name,
		tags: this.props.tags,
		edited_time: this.props.edited_time
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.calendar_name !== nextProps.calendar_name && prevState.tags !== nextProps.tags && prevState.edited_time !== nextProps.edited_time) {
      return {
				calendar_name: nextProps.calendar_name,
				tags: nextProps.tags,
				edited_time: nextProps.edited_time
      }
    }
    return null;
  }

  _getDate = (start_date) => {
    const dateArr = start_date.split("-");
    const day = dateArr[2];
    let month = dateArr[1];
    let returnDay = parseInt(day);
    switch (day.charAt(day.length - 1)) {
      case "1":
        returnDay += "st";
        break;
      case "2":
        returnDay += "nd";
        break;
      case "3":
        returnDay += "rd";
        break;
      default:
        returnDay += "th";
    }
    switch (month) {
      case "1":
        month = "JAN";
        break;
      case "2":
        month = "FEB";
        break;
      case "3":
        month = "MAR";
        break;
      case "4":
        month = "APR";
        break;
      case "5":
        month = "MAY";
        break;
      case "6":
        month = "JUN";
        break;
      case "7":
        month = "JUL";
        break;
      case "8":
        month = "AUG";
        break;
      case "9":
        month = "SEP";
        break;
      case "10":
        month = "OCT";
        break;
      case "11":
        month = "NOV";
        break;
      case "12":
        month = "DEC";
        break;
    }
    return { day: returnDay, month: month }
  }

  _getHourEnd = (hour) => {
    const timeArr = hour.split(":");
    const hourInt = parseInt(timeArr[0]);
    let res;
    if (hourInt === 0) {
      res = "12 AM";
    } else if (hourInt > 12) {
      res = `${hourInt - 12} PM`;
    } else {
      res = `${hourInt} AM`;
    }
    return res;
  }

  render() {
    return (
      <div className="event-container">
        {this.state.events.map(((category, id) => {
          return (
            <div key={id} className="card">
              <div className="image">
                <div className="img-container">
                  <img src={Stock}></img>
                  <button className="export">Export Event</button>
                </div>

              </div>
              <div className="card-body">
                <div className="day">
                  <a className="curr-date">{this._getDate(category.start_date).day} <br></br> {this._getDate(category.start_date).month}</a>
                </div>

                <img src={Line} className="img"></img>

                <div className="content">
                  <a className="event-title">
                    {category.name} <br></br>
                  </a>
                  <a className="event-details">
                    Hosted By {category.organization} <br></br>
                  </a>
                  <a className="event-time">
                    {this._getHourEnd(category.start_hour) + " - " + this._getHourEnd(category.end_hour)} <br></br>
                  </a>
                </div>
              </div>
            </div>
          )
        }))}

      </div>
    );
  }
}

export default Calendar;