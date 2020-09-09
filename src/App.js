import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/about:name" component={Contact} />
      </Switch>
    </>
  );
};

export default App;
