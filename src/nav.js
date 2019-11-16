import React, { Component } from 'react';
import Setting from "./assets/setting.svg";
import Profile from "./assets/profile.svg";
import { Link } from "react-router-dom";


class Nav extends Component {
	create_post = (opts) => {
		console.log("posting request to backend server API");
		fetch('http://bleudot-backend-api.herokuapp.com/events/', {
			method: 'put',
			body: JSON.stringify(opts)
		}).then(function (response) {
			return response.json();
		}).then(function (data) {
			console.log("created Gist")
		});
	}

	render() {
		return (
			<div className="navbar">
				<div className="navbar-container container">
					<div className="navbar-menu">
						<a className="active" href=".">Discover</a>
						<Link to="/">Create </Link>
					</div>
					<div className="navbar-title">
						<Link to="/">BleuDot </Link>
					</div>
					<div className="navbar-buttons">
						<Link to="/login" className="navbar-button-login" >Log In</Link>
						<div className="navbar-button-icon"><img src={Setting} /></div>
						<div className="navbar-button-icon"><img src={Profile} /></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;