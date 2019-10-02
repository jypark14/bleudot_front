import React, { Component } from 'react';
import Footer from '../subcomponent/Footer';
import Nav from '../nav';
import Profile from '../profile';
import ProfileCard from '../subcomponent/profileCard';
import '../stylesheets/ProfilePage.css'

class ProfilePage extends Component {

    render() {
    return (
      <div className="container">
					<Nav/>
          <div className="contents">
            <ProfileCard />
            <Profile/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default ProfilePage;

