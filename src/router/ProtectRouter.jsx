import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Suspense fallback={null}>
            <Component {...props} />
          </Suspense>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
