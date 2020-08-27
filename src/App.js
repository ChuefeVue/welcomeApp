import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import NoRoute from "./components/noRoute/NoRoute";
import { Switch } from "react-router-dom";
import getTodo from "./services/todoService";
getTodo(1);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Chue" />}
        />
        <Route
          exact
          path="/welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/:id" component={NoRoute} />
      </Switch>
    </div>
  );
}

export default App;
