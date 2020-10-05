import React, { Component } from 'react';
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute'
import config from '../../config'
import TokenService from '../../Services/token-service'
import Homepage from '../Homepage/Homepage'
import AllExercises from '../../Routes/AllExercises/AllExercises'
import LoginPage from '../../Routes/LoginPage/LoginPage'
import './App.css';
import ApiContext from '../../Contexts/ApiContext';

class App extends Component {
  state = {
    exercises: [],
    currentUser: ''
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/exercises`)

      .then((res) => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e));
        }

        return res.json();
      })
      .then(exercises => {
        this.setState({ exercises })
      })
      .catch(error => {
        console.error({ error });
      });
  }

  addCurrentUser = user => {
    this.setState({
      currentUser: user
    })
  }

  render() {
    const value = {
      exercises: this.state.exercises,
      currentUser: this.state.currentUser,
      addUser: this.addCurrentUser
      //saveAuthtoken:(token) => this.setState({token})
    }
    console.log(this.state)

    return (
      <ApiContext.Provider value={value}>
        <>
          <header className='App_Header'>
            <Header 
            token={TokenService.hasAuthToken()}
            />
          </header>
          <main className='App_main'>
            <Switch>
              <Route
                exact
                path={'/'}
                component={Homepage}
              />
              <Route
                exact
                path={'/all-exercises'}
                component={AllExercises}
              />
              <PublicOnlyRoute
                exact
                path={'/login'}
                component={LoginPage}
              />


            </Switch>

          </main>


        </>
      </ApiContext.Provider>
    );
  }
}

export default App;

