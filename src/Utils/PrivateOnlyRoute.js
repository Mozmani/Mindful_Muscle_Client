import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "../Services/token-service";

// Component for private route that protects endpoints, reroutes to login for those sneaky folk!
export default function PrivateRoute({ component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Component {...componentProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: componentProps.location },
            }}
          />
        )
      }
    />
  );
}
