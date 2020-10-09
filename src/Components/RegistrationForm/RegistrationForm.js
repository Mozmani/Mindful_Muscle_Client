import React, { Component } from 'react';
import AuthApiService from '../../Services/auth-api-service'

class RegistrationForm extends Component {
  state = { error: null }


  handleSubmit = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
    })
      .then(user => {

        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()

      })
      .catch( res => {
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
        <button type='submit'>
          Register
        </button>
        <div role='alert'>
          {error && <p className='red'>{error.message}</p>}
        </div>
      </form>


    );
  }
}

export default RegistrationForm;