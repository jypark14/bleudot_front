import React from 'react';
import Login from './login';
import Nav from './nav';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authorized: false,
        };
        // this.handleAuthorization = this.handleAuthorization.bind(this);
    }
    
    render() {
        if(this.state.authorized) {
            return (<div><Nav />
                </div>);
        }
        else {
            return (<div><Nav />
            <Login loggedIn={this.state.authorized} /></div>);
        }

    }


}