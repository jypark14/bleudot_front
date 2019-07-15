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
          <div className="Login">
            <form onSubmit={this.attemptLogin}>
              {
                this.state.error &&
                <h3 data-test="error" onClick={this.dismissError}>
                  <button onClick={this.dismissError}>✖</button>
                  {this.state.error}
                </h3>
              }
              <label>User Name</label>
              <input type="text" data-test="username" value={this.state.username} onChange={this.handleEmailChange} />
    
              <label>Password</label>
              <input type="password" data-test="password" value={this.state.password} onChange={this.handlePasswordChange} />
    
              <input type="submit" value="Log In" data-test="submit" />
            </form>
          </div>
        );
      }
}