import React, { Component } from 'react';
import './settingsStyle.css';
import settingsLine from './assets/settingsLine.png';
import Footer from '../subcomponent/Footer';
import Header from './subcomponent/Header';
import Nav from '../nav';
import Profile from '../profile';

class ProfilePage extends Component {

    render() {
    return (
      <div className="container">
					<Nav/>
					<Profile/>
          <Footer/>
      </div>
    );
  }
}

export default ProfilePage;

