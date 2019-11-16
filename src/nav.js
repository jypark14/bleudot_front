import React, {Component} from 'react';
import Setting from "./assets/setting.svg";
import Profile from "./assets/profile.svg";


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

		login_button = (e) => {
		e.preventDefault();
		if (e) {
			console.log(e);
			// this.create_post({id: c.id});
		}
		else {
			console.log("Error")
		}
		}

	render() {
		return (
			<div className="navbar">
				<div className="navbar-container container">
					<div className="navbar-menu">
						<a className="active" href=".">Discover</a>
						<a href=".">Create </a>
					</div>
					<div className="navbar-title">
						<a href=".">BleuDot </a>
					</div>
					<div className="navbar-buttons">
						<button className="navbar-button-login" onClick={(e)=>this.login_button(e)}>Log In</button>
						<div className="navbar-button-icon"><img src={Setting} /></div>
						<div className="navbar-button-icon"><img src={Profile} /></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;