import React from 'react';
import Location from './icons/location';

class LocationInput extends React.component {
	render() {
		return (
			<div className="location-input">
				<Location /><span className="icon-label">Location</span>
				<label for="location-input-dropdown">Start Time: </label>
				<select name="location-input-dropdown">
					<option value="sample1">Sample 1</option>
					<option value="sample1">Sample 2</option>
				</select>
			</div>
		)
	}
}

export default LocationInput;