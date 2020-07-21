import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "fontsource-roboto";
import Home from "./pages/home"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Route />
    </Router>
  );
}
export default App;