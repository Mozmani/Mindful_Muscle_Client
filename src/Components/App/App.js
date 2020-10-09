import React, { Component } from 'react';
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute'
import PrivateOnlyRoute from '../../Utils/PrivateOnlyRoute'
import config from '../../config'
import TokenService from '../../Services/token-service'
import Homepage from '../Homepage/Homepage'
import AllExercises from '../../Routes/AllExercises/AllExercises'
import LoginPage from '../../Routes/LoginPage/LoginPage'
import Dashboard from '../../Routes/Dashboard/Dashboard'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'
import './App.css';
import ApiContext from '../../Contexts/ApiContext';

class App extends Component {
  state = {
    exercises: [],
    plans: [],
    currentUser: '',
    loggedIn: false,
    atDashboard: false
    
  }

  componentDidMount() {
    this.setState(JSON.parse(window.localStorage.getItem('state')))
    
    Promise.all([
      fetch(`${config.API_ENDPOINT}/exercises`),
      fetch(`${config.API_ENDPOINT}/adex`)
    ])
      .then(([exRes, pRes]) => {
        if (!exRes.ok) {
          return exRes.json().then(e => Promise.reject(e));
        }
        if (!pRes.ok) {
          return pRes.json().then(e => Promise.reject(e));
        }

        return Promise.all([exRes.json(), pRes.json()]);
      })
      .then(([exercises, plans ]) => {
        this.setState({ exercises, plans })
      })
      .catch(error => {
        console.error({ error });
      });
  }
  componentDidUpdate(){
    window.localStorage.setItem('state', JSON.stringify(this.state))
  }

  addCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }
  handleLogin= () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  handleDash = () => {
    this.setState({
    atDashboard: true
    })
  }
  handleDashBad = () => {
    this.setState({
      atDashboard: false
      })
  }

  render() {
    const value = {
      exercises: this.state.exercises,
      plans: this.state.plans,
      currentUser: this.state.currentUser,
      addUser: this.addCurrentUser,
      login: this.handleLogin,
      loggedIn: this.state.loggedIn,
      dashboard: this.handleDash,
      dashboardB: this.handleDashBad,
      atDashboard: this.state.atDashboard

    }
    const token = TokenService.hasAuthToken()
    return (
      <ApiContext.Provider value={value}>
        <>
          <header className='App_Header'>
            <Header 
            token={token}
            />
          </header>
          <main className='App_main'>
            <Switch>
              <Route
                exact
                path={'/'}
                component={Homepage}
              />
              <PrivateOnlyRoute
                exact
                path={'/all-exercises'}
                component={AllExercises}
              />
              <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
              <PublicOnlyRoute
                exact
                path={'/login'}
                component={LoginPage}
              />
              <PrivateOnlyRoute
                
                path={'/dashboard/:userName'}
                component={Dashboard}
              />


            </Switch>

          </main>


        </>
      </ApiContext.Provider>
    );
  }
}

export default App;

