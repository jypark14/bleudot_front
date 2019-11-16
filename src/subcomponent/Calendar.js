import React, { Component } from 'react';
import Image from "../assets/basketball.jpg";
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
	_formatEditHours = (time) => {
    const timeDiffMilliseconds = Date.now() -time.getTime();
		const ONE_MIN = 60000;
		const ONE_HOUR = ONE_MIN * 60;
		const ONE_DAY = ONE_HOUR * 24;
		const ONE_MONTH = ONE_DAY * 28;
		const ONE_YEAR = ONE_MONTH * 12;
		if  (timeDiffMilliseconds > ONE_YEAR) {
			if (timeDiffMilliseconds < ONE_YEAR * 2) {
				return '1 year';
			} else {
				return `${Math.floor(timeDiffMilliseconds/ONE_YEAR)} years`;
			}
		} else if (timeDiffMilliseconds > ONE_MONTH) {
			if (timeDiffMilliseconds < ONE_MONTH * 2) {
				return '1 month';
			} else {
				return `${Math.floor(timeDiffMilliseconds/ONE_MONTH)} months`;
			}
		} else if (timeDiffMilliseconds > ONE_DAY) {
			if (timeDiffMilliseconds < ONE_DAY * 2) {
				return '1 day';
			} else {
				return `${Math.floor(timeDiffMilliseconds/ONE_DAY)} days`;
			}
		} else if (timeDiffMilliseconds > ONE_HOUR) {
			if (timeDiffMilliseconds < ONE_HOUR * 2) {
				return '1 hour';
			} else {
				return `${Math.floor(timeDiffMilliseconds/ONE_HOUR)} hours`;
			}
		} else if (timeDiffMilliseconds > ONE_MIN) {
			if (timeDiffMilliseconds < ONE_MIN * 2) {
				return '1 minute';
			} else {
				return `${Math.floor(timeDiffMilliseconds/ONE_MIN)} minutes`;
			}
		}
		return 'now';
	}

  render() {
    return (
			<div className="outer-container">
				{/* outer-container is relative position, inner-white-box should have an absolute position with top 6px */}
				<div className="inner-white-box">
					{/* Have to set up a width: 100% and height: 157.2px */}
					<img className="calendar-image" src={Image}></img>
					{/* Set up the tags at the right */}
          <div className="calendar-contents">
            <div className="calendar-status-name">
              <span className="calendar-status"></span>
              <span className="calendar-name">{this.state.calendar_name}</span>
            </div>
            <div className="calendar-tags-container">
              <div className="calendar-tags">
                {this.state.tags.map((tag, id) => <Tag key={id} tagName={tag}/>)}
              </div>
            </div>
            <p className="calendar-edited-time">
              Edited {this._formatEditHours(this.state.edited_time)} ago
            </p>
          </div>
				</div>
			</div>
    
    );
  }
}


class Tag extends Component {
	static propTypes = {
    tagName: PropTypes.string.isRequired
	}
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="tag-rounded">
				{this.props.tagName}
			</div>
		)
	}
}

export default Calendar;