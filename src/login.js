import React from 'react';
import "./login_styles.css";
import { Link } from "react-router-dom";


export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: ""
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  attemptLogin(e) {
    e.preventDefault();
    if ((this.state.email === "jim@jim.com") && (this.state.password === "secret")) {
      alert("Logged in");
    }
  }


  handleEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  dismissError() {
    this.setState({ error: '' });
  }

  render() {
    return (

      <div className="login-container">
        <div className="login-box">
          <div className="top-container">
            <a className="login-text">Log In <br></br></a>
            <a className="create-account-text">Need an account? <Link to="/">Create an account</Link></a>
          </div>
          <form onSubmit={this.attemptLogin} className="login-form-container">
            {
              this.state.error &&
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError} className="login-button-error">✖</button>
                {this.state.error}
              </h3>
            }
            <div className="login-email-container">
              <a className="login-email-text">Email<br></br></a>
              <input type="text" data-test="username" value={this.state.username} onChange={this.handleEmailChange} className="login-email" placeholder={"Email"} />
            </div>
            <div className="login-password-container">
              <a className="login-password-text">Password<br></br></a>
              <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} className="login-password" placeholder={"Password"} />
            </div>
            <input type="submit" value="Log In" className="submit" data-test="submit" />
          </form>
          <div className="bottom-container">
            <div className="options-container">
              <div className="option-container">
                <input type="checkbox" className="checkbox"></input>
                <a className="option">Keep me logged in</a>
              </div>
              <div className="forgot-container">
                <a className="forgot">Forgot <Link>Username</Link></a>
              </div>
              <div className="forgot-container">
                <a className="forgot">Forgot <Link>Password</Link></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


