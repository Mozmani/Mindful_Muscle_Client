import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm'
import ApiContext from '../../Contexts/ApiContext'

class LoginPage extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  static contextType = ApiContext

  handleLoginSuccess = () => {
    //console.log('am I working? :D')
    const { history } = this.props
    this.context.login()
    history.push(`/dashboard/${this.context.currentUser}`)
    

    // const { location, history } = this.props
    // const destination = (location.state || {}).from || '/'
    // history.push(destination)
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