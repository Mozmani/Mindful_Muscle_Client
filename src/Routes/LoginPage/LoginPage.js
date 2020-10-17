import React, { Component } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import ApiContext from "../../Contexts/ApiContext";

// Login Page component
class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = ApiContext;
  // function to handle login success
  handleLoginSuccess = () => {
    const { history } = this.props;
    this.context.login();
    history.push(`/dashboard/${this.context.currentUser}`);
  };

  render() {
    return (
      <section className="LoginPage">
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginPage;
