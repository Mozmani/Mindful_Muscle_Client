import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import ApiContext from '../../Contexts/ApiContext';
import './Header.css'
// Header component, shows view of login/register or logout on render
class Header extends Component {
  
  static contextType = ApiContext
  // handles logout
  handleLogoutClick = () => {
    this.context.login()
    TokenService.clearAuthToken()
    this.context.dashboardB()    

  }
  // displays header html for logging out
  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }
  //displays html for logging in and registering
  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Sign In
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }


  render() { 
  // decideds which header is appropriate.
    return ( 

      <nav className='Header'>
        <h1>Mindful Muscle</h1>
        {this.context.loggedIn
          ? this.renderLogoutLink()
          : this.renderLoginLink()}

      </nav>

     );
  }
}
 
export default withRouter(Header);