import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { shallow } from "enzyme";
import { Header } from "../header/Header";

describe("Header Component Test", () => {
  it("should contain AppBar, ToolBar, Typography Component", () => {
    const component = shallow(<Header />);
    expect(component.find(AppBar).length).toEqual(1);
    expect(component.find(Toolbar).length).toEqual(1);
    expect(component.find(Typography).length).toEqual(1);
  });
});
