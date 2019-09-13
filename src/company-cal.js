import React from 'react';
export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return ( <div className="calendar">
        <img src={this.props.companyLogo} alt="company logo"/>
        
        </div>);
    }
}