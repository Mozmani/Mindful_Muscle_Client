import React, { Component } from 'react';
import AuthApiService from '../../Services/auth-api-service'
import './RegistrationForm.css'
// Class component to handle user registration
class RegistrationForm extends Component {
  state = { error: null }

  // handles user registration on form submit
  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    this.setState({ error: null })
    // runs Auth service to check if new user and password is valid for a new user
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {

        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()

      })
      .catch(res => {
        // if an error arrises, this displays on the page.
        this.setState({ error: res.error })
      })

  }






  render() {
    const { error } = this.state
    return (

      <form
        className='RegistrationForm'
        onSubmit={this.handleSubmit}
      >
        <div className='user_name'>
          <label htmlFor='RegistrationForm__user_name'>
            User name
          </label>
          <input
            name='user_name'
            type='text'
            required
            id='RegistrationForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='RegistrationForm__password'>
            Password
          </label>
          <input
            name='password'
            type='password'
            required
            id='RegistrationForm__password'>
          </input>
        </div>
        <div className='btn'>
          <button type='submit'>
            Register
        </button>
        </div>

        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
      </form>


    );
  }
}

export default RegistrationForm;