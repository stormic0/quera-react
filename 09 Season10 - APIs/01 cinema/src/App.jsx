import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Movies} />
        <Route path={"/movies/:movieId"} component={MovieDetail} />
        <Route path={"*"} component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
