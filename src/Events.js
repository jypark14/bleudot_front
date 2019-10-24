import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import "./Events.css"

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            {this.props.categoryName.map(((category, id) => {
                return(
                
                <Card className="events"></Card>
                
                )
            }))}
            
       </div>
    );
  }
}

export default Events;
