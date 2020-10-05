import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm'

class LoginPage extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    //console.log('am I working? :D')
    //const { history } = this.props
    //history.push('/')

    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }


  render() { 
    return ( 
      <section className='LoginPage'>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>

     );
  }
}
 
export default LoginPage;