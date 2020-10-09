import React from 'react'

export default React.createContext({
  exercises: [],
  saveAuthtoken:() => {
  },
  loggedIn: false,
  currentUser: '',
  addCurrentUser: () => {},
  atDashboard: false
})
