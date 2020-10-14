import React from 'react'
// Standard context file 
export default React.createContext({
  exercises: [],
  saveAuthtoken:() => {},
  loggedIn: false,
  currentUser: '',
  addCurrentUser: () => {},
  atDashboard: false
})
