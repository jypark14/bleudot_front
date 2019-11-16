import React, {Component} from 'react';
import Setting from "./assets/setting.svg";
import Profile from "./assets/profile.svg";
import Link from "react-router-dom";


class Nav extends Component {
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
						<div className="navbar-button-icon"><img src={Setting} /></div>
						<div className="navbar-button-icon"><img src={Profile} /></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Nav;