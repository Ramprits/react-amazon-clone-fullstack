import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/about" component={Contact} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
