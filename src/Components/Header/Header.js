import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import APiContext from '../../Contexts/ApiContext'
import ApiContext from '../../Contexts/ApiContext';

class Header extends Component {
  
  static contextType = ApiContext

  handleLogoutClick = () => {
    this.context.login()
    TokenService.clearAuthToken()
    this.context.atDashboardB()

  }

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
  renderLoginLink() {
    return (
      <div className='Header__not-logged-in'>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/register'>
          Register
        </Link>
      </div>
    )
  }


  render() { 
  
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