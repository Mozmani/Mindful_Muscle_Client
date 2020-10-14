import React, { Component } from 'react'
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm'

//Class component for user registration
export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  // if sucessful user is routed to login! handled in form.
  handleRegistrationSuccess = user => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    )
  }
}