import React from 'react';
import Clock from './icons/clock';

class TimeInput extends React.Component {
	render() {
		return (
			<div className="time-input">
				<Clock /><span className="icon-label">Time</span>
				<label for="start-time-input">Start Time: 
				</label>
				<input type="time" name="start-time-input" required></input>

				<label for="end-time-input">End Time: 
				</label>
				<input type="time" name="end-time-input" required>
				</input>
				
			</div>
		)
	}
}

export default TimeInput;