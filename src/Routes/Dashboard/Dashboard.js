import React, { Component } from 'react';
import ApiContext from '../../Contexts/ApiContext'
import NewUserForm from '../../Components/NewUserForm/NewUserForm'
import ReturnUserPage from '../../Components/ReturnUserPage/ReturnUserPage'

class Dashboard extends Component {
  state = { 
    plans: [],
    dayList: 1
   }

  
  static contextType = ApiContext
  
  
    handleDashSuccess = () => {
  
      const { history } = this.props
      history.push(`/dashboard/${this.context.currentUser}`)  
  
    }
  
  render() { 
    
    
    if (this.context.atDashboard === false){
      return (
        <>
        <NewUserForm 
        user={this.props.match.params}
        onDashSuccess={this.handleDashSuccess}
        />
        </>
      )

    } else{
      return ( 
        <>
        <ReturnUserPage
        plans={this.state.plans}
        days={this.state.dayList}
        />
        </> 
        
        );

    }

   
  }
}
 
export default Dashboard;