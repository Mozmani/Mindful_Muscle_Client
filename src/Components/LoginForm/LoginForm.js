import React, { Component } from 'react';
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import ApiContext from '../../Contexts/ApiContext'


class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }
  
  static contextType = ApiContext

  state = { error: null }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value
    })
      .then(res => {
        this.context.addUser(user_name.value)
        this.findUser(this.context.plans, user_name.value)
        user_name.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()

      })
      .catch(res => {
        this.setState({error: res.error})
      })
      
      
  }

  findUser = (plans, userName) => {
    let track = []
    for (let i =0; i < plans.length; i++){
      if (plans[i].user_id === userName && track.length === 0){
        track.push(plans[i])       
      }
      if (track.length >= 1){
        this.context.dashboard()
      } 
      else if (track.length < 1) {
        this.context.dashboardB()
      }
    }
  }

  render() { 
    const { error } = this.state
    return ( 
      <form
        className='LoginForm'
        onSubmit={this.handleSubmitJwtAuth}
      >
        <div className='user_name'>
          <label htmlFor='LoginForm__user_name'>
            User name
          </label>
          <input
            required
            name='user_name'
            id='LoginForm__user_name'>
          </input>
        </div>
        <div className='password'>
          <label htmlFor='LoginForm__password'>
            Password
          </label>
          <input
            required
            name='password'
            type='password'
            id='LoginForm__password'>
          </input>
        </div>
        <button type='submit'>
          Login
        </button>



        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
      </form>
     );
  }
}
 
export default LoginForm;