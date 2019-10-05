import React, {Component} from 'react';

class Calendar extends Component {

	render() {
		return (
			<div className="account-setting-card">
				<div className="account-setting-card-wrapper">
					<div className="account-setting-title">
						Account Settings
					</div>
					<div className="account-setting-contents">
						<div className="bar">
						</div>
						<ul className="account-setting-contents-button">
							<li className="account-setting-text active">Profile</li>
							<li className="account-setting-text">Contact Info</li>
							<li className="account-setting-text">Data &amp; Personalization</li>
							<li className="account-setting-text">Security</li>
							<li className="account-setting-text">Connections</li>
							<li className="account-setting-text">Locations</li>
						</ul>
					</div>
				</div>

				<div className="account-setting-btn">
					<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect x="0.173828" y="4.02441" width="5.68417" height="0.75789" rx="0.378945" transform="rotate(-45 0.173828 4.02441)" fill="#5F5F5F"/>
						<rect x="7.98267" y="4.56055" width="5.68417" height="0.75789" rx="0.378945" transform="rotate(-135 7.98267 4.56055)" fill="#5F5F5F"/>
					</svg>
				</div>

			</div>
			)
	}

}

export default Calendar;
