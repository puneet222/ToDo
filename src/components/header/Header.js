import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./header.css";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h6" gutterBottom>
          To Do App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
