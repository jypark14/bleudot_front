import React, { Component } from 'react';
import Footer from '../subcomponent/Footer';
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

