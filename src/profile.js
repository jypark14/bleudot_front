import React from 'react';
import './stylesheets/profile.css'
import Camera from './icons/profile_camera';
export default class Profile extends React.Component {
	render() {
		return (
			<div className="profile-component">
				<div className="profile-bg-blue">
					<div className="profile-icon-svg"></div>
					<div className="profile-hover-file-image">
						<Camera />
					</div>
				</div>	

				{/* TODO: will separate this inputs based on API request*/}
				<div className="profile-profile">
					<h3 className="profile-header">Profile</h3>
					{/* TODO: will separate this as a subcomponent*/}
					<div className="profile-text-field">
						<div className="text-field">
							<div className="text-field-label">Name</div>
							<div className="text-field-value">Jenna Kim</div>
						</div>
						<a href="." className="simple-btn">Edit</a>
					</div>
					<div className="profile-text-field">
						<div className="text-field">
							<div className="text-field-label">Username</div>
							<div className="text-field-value">jeeyoonk</div>
						</div>
						<a href="." className="simple-btn">Edit</a>
					</div>
					<div className="profile-text-field">
						<div className="text-field">
							<div className="text-field-label">Password</div>
							<div className="text-field-value">*******</div>
						</div>
						<a href="." className="simple-btn">Edit</a>
					</div>
				</div>

				<div className="profile-text-seperator"></div>

				<div className="profile-profile">
					<h3 className="profile-header">Contact Info</h3>
					<div className="profile-text-field">
						<div className="text-field">
							<div className="text-field-label">Email</div>
							<div className="text-field-value">jeeyoonk@andrew.cmu.edu</div>
						</div>
						<a href="." className="simple-btn">Edit</a>
					</div>
					<div className="profile-text-field">
						<div className="text-field">
							<div className="text-field-label">Username</div>
							<div className="text-field-value">jeeyoonk</div>
						</div>
						<a href="." className="simple-btn">Edit</a>
					</div>
					<div className="profile-text-field">
						<div className="text-field">
							<div className="text-field-label">Phone</div>
							<div className="text-field-value">201-831-1001</div>
						</div>
						<a href="." className="simple-btn">Edit</a>
					</div>
				</div>
			</div>
		)
	}
}