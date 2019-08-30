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

          <div className="Login" style={loginStyle}>
            <img src="bleudot_bleu.svg" alt="die"/>
            <form onSubmit={this.attemptLogin}>
              {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              }
              <input type="text" data-test="username" value={this.state.username} onChange={this.handleEmailChange} placeholder={"Email"} />
    
              <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder={"Password"}/>
    
              <input type="submit" value="Log In" data-test="submit" />
            </form>
          </div>
        );
      }
}
const loginStyle = {
  position: "absolute",
  width: 690,
  height: 528,
  left: 375,
  top: 186,
  background: "light grey",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
  }
  
  