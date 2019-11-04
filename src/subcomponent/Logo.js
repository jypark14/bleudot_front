import React, {Component} from 'react';
import Magnifier from '../icons/magnifier';

class Logo extends Component {
	render() {
		return (
		<div className="search-box">
			<input className = "search-box-input" type="text" placeholder="multicultural, music, cooking.."/>
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
		);
	}
}


export default Logo;