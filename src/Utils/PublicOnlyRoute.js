import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../Services/token-service'
// component for public route! anyone can go here.
export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={routerProps => (
        TokenService.hasAuthToken()
          ? <Redirect to={'/'} />
          : <Component {...routerProps} />
      )}
    />
  )
}