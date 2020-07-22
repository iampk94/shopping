import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "fontsource-roboto";
import { Provider } from "react-redux";

import Home from "./pages/home"
import Cart from "./pages/cart";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
        <Route />
      </Router>
    </Provider>
  );
}
export default App;