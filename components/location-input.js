import React from 'react';
import Location from './icons/location';

class LocationInput extends React.Component {
	render() {
		return (
			<div className="location-input">
				<Location /><span className="icon-label">Location</span>
				<label for="location-input-dropdown">Location: 
					<select name="location-input-dropdown">
						<option value="sample1" selected>Sample 1</option>
						<option value="sample1">Sample 2</option>
					</select>
				</label>
			</div>
		)
	}
}

export default LocationInput;