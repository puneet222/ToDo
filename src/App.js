import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";

import { store } from "./store";
import { Header } from "./components/header/Header";
import { Bucket } from "./components/bucket/Bucket";
import { ToDo } from "./components/todo/ToDo";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Container maxWidth="md">
          <Switch>
            <Route exact path="/" component={ToDo} />
            <Route exact path="/create-bucket" component={Bucket} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
