import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Nav from './nav';


ReactDOM.render(
	<Router basename={process.env.PUBLIC_URL}>
		<Nav />
		<Switch>
			<Route path="/login">
				{/* place Warren's login page */}
			</Route>
		</Switch>
		<Switch>
			<Route path="/">
				<App />
			</Route>
		</Switch>
	</Router>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
