import React from 'react';
import Clock from './icons/clock';

class TimeInput extends React.component {
	render() {
		return (
			<div className="time-input">
				<Clock /><span className="icon-label">Time</span>
				<label for="start-time-input">Start Time: 
					<input type="time" name="start-time-input" required>
					</input>
				</label>

				<label for="end-time-input">End Time: 
					<input type="time" name="end-time-input" required>
					</input>
				</label>
				
			</div>
		)
	}
}

export default TimeInput;