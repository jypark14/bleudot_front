import React, { Component } from 'react';
import './stylesheets/App.css';
import Login from './login';
import Home from './home';
// import Event from './Event'
import Settings from './Settings';
import ProfilePage from './pages/profile_page';
import Event from './subcomponent/event'
class App extends Component {
  state = {};

  componentDidMount() {
    this._getEvents();
  }

  
  _getEvents = async () => {
    const events = await this._callApi();
    this.setState({
      events
    });
  };

  _callApi = () => {
    return fetch(
      "http://bleudot-backend-api.herokuapp.com/events/"
    )
      .then(response => response.json())
      // .then(json => console.log(json))
      .catch(err => console.log(err))
  };

  _renderEvents = () => {
    const events = this.state.events.map(event => {
      return (
        <Event 
          name={event.name} 
          date={event.date} 
          description={event.description} 
          location = {event.location}
          start_time = {event.start_time}
        />
      );
    });
    return events;
  };

  render() {
    const { events } = this.state;
    return (
      <div className={events ? "App" : "App--loading"}>
        {events ? this._renderEvents() : "Loading"}
      </div>
    )
  }
}

export default App;