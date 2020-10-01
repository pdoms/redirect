import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthService from "../JWT/services.log/auth.service";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (AuthService.getCurrentUser()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
