import React, {Component} from 'react';
import './footerStyle.css'

class Footer extends Component {

  render() {
    return (
        /* replace a tag with nav tag later when navigation is implemented */
        <div className='footer-container'>
          <div className='company-container'>
            <h3 className='text-header'>Company</h3>
            <a className='text' href="http://google.com">About Us<br></br></a>
            <a className='text' href="http://google.com">Contact Us<br></br></a>
            <a className='text' href="http://google.com">Our Team<br></br></a>
            <a className='text' href="http://google.com">Careers<br></br></a>
          </div>
          <div className='products-container'>
            <h3 className='text-header'>Products</h3>
            <a className='text' href="http://google.com">Student<br></br></a>
            <a className='text' href="http://google.com">Business<br></br></a>
          </div>
          <div className='support-container'>
            <h3 className='text-header'>Support</h3>
            <a className='text' href="http://google.com">Help Center<br></br></a>
            <a className='text' href="http://google.com">Cookies<br></br></a>
            <a className='text' href="http://google.com">Privacy & Terms<br></br></a>
            <a className='text' href="http://google.com">Sitemap<br></br></a>
          </div>
          <div className='community-container'>
            <h3 className='text-header'>Community</h3>
            <a className='text' href="http://google.com">Developers<br></br></a>
            <a className='text' href="http://google.com">Referrals<br></br></a>
            <a className='text' href="http://google.com">Forum<br></br></a>
          </div>
          <div className='account-container'>
            <h3 className='text-header'>Account</h3>
            <a className='text' href="http://google.com">Create Account<br></br></a>
            <a className='text' href="http://google.com">Log In<br></br></a>
            <a className='text' href="http://google.com">Forgot Username<br></br></a>
            <a className='text' href="http://google.com">Forgot Password<br></br></a>
          </div>
        </div>
    );
  }
}

export default Footer;
