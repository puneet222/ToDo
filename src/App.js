import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <Container maxWidth="md">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
          />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
