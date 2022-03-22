import { useAuth } from "../contexts/Auth";
import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { user } = useAuth();

  return <>{user.loggedIn ? <Route {...props} /> : <Redirect to={"/login"} />}</>;
};

export default ProtectedRoute;
