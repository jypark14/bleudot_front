import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error:""
        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.attemptLogin = this.attemptLogin.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    attemptLogin(e) {
        e.preventDefault();
        if ((this.state.email === "jim@jim.com") && (this.state.password ==="secret")) {
            alert("Logged in");
        }
    }


    handleEmailChange(e) {
        this.setState({email: e.target.value})
    }

    handlePasswordChange(e) {
        this.setState({password: e.target.value})
    }

    dismissError() {
        this.setState({ error: '' });
      }

    render() {
        return (

          <div className="login">
            <div className="loginTitle">Log In</div>
            <p className="createAccount">Need an account? <a href="google.com">Create an Account.</a></p>
            <form onSubmit={this.attemptLogin}>
              {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              }
              <p className="emailTitle">Email</p>
              <input type="text" data-test="username" value={this.state.username} onChange={this.handleEmailChange} placeholder={"Email"} className="email" />
              
              <p className="passwordTitle">Password</p>
              <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder={"Password"} className="password"/>
    
              <input type="submit" value="Log In" data-test="submit" className="submitButton"/>
              <input type="checkbox" label="Keep me Logged In!" className="keepSignOn" /><p className="keepSignOnText">Keep me logged in</p>
              <p className="forgotUser">Forgot <a href="google.com">Username</a>?</p>
              <p className="forgotPass">Forgot <a href="google.com">Password</a>?</p>

            </form>
          </div>
        );
      }
}

  