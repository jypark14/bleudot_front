import React from 'react';
import Location from './icons/location';

class LocationInput extends React.Component {
	render() {
		return (
			<div className="location-input">
				<div className="location-input-label">
					<Location />
					<label for="location-input-dropdown">Location</label>
				</div>
				
				<div className="location-input-dropdown-div">
					<select name="location-input-dropdown">
							<option value="sample1" selected>Sample 1</option>
							<option value="sample1">Sample 2</option>
					</select>
				</div>
				

				<style jsx> {`
					.location-input-label {
						margin-bottom: 13px;
						font-family: Roboto;
						font-style: normal;
						font-weight: normal;
						font-size: 14px;
						line-height: 16px;
						color: #5F5F5F;
					}

					.location-input-label label {
						margin-left: 4px;
					}

					.location-input-dropdown-div select {
						margin-left: 9px;
						min-width: 122px;
						border: none;
						border-bottom: 1px solid #5F5F5F;
						background-color: #ffffff;
						border-radius: 1px;
					}
				`}

				</style>
			</div>
		)
	}
}

export default LocationInput;