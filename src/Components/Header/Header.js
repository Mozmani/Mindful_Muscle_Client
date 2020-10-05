import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'

class Header extends Component {
  
  componentDidUpdate(){
    console.log('in Header...', this.props)
  }

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
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
        {this.props.token
          ? this.renderLogoutLink()
          : this.renderLoginLink()}

      </nav>

     );
  }
}
 
export default Header;