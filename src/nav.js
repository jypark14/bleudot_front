import React from 'react';
import './stylesheets/nav.css'
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
	render() {
		return (
			<nav className="main-nav">
				<div className="nav-container">
					<div className="nav-left-side">
						<Link to="/" className="nav-logo">
							<img alt="Bleu Dot" src={require('./public/bleudot_new.svg')} className="nav-logo-icon" href="./index.js"></img>
						</Link>

						<div className="nav-page-btns">
							<Link to="/" className="nav-page-btn"> Discover</Link>
							<Link to="/" className="nav-page-btn"> Create</Link>
							<Link to="/" className="nav-page-btn"> My Calendar</Link>
						</div>
					</div>

					<div className="nav-right-side">
						<Link to="/">
							<img alt="Search" src={require('./public/magnifier_search_icon.svg')} className="nav-icon"></img>
						</Link>

						<Link to="/">
							<img alt="Setting" src={require('./public/settings_White.svg')} className="nav-icon"></img>
						</Link>

						<Link to="/">
							<img alt="Profile" src={require('./public/user_white.svg')} className="nav-icon"></img>
						</Link>
					</div>

				</div>
			</nav>



		)
	}
}