import React, { Component } from 'react'
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm'
import ApiContext from "../../Contexts/ApiContext";


//Class component for user registration
export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  static contextType = ApiContext;
  // if sucessful user is routed to login! handled in form.
  handleRegistrationSuccess = user => {
    const { history } = this.props
    this.context.login();
    history.push(`/dashboard/${this.context.currentUser}`)
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