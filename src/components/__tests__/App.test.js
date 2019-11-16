import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router";
import App from "../../App";
import { Header } from "../header/Header";
import ToDo from "../todo/ToDo";
import Bucket from "../bucket/Bucket";

describe("App Component Test", () => {
  it("should display application header", () => {
    const component = shallow(<App />);
    expect(component.find(Header).length).toEqual(1);
  });

  it("should contain Todo Component by default", () => {
    const component = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(component.find(ToDo).length).toEqual(1);
    component.unmount();
  });

  it("should contain Bucket Component on '/create-bucket' rount", () => {
    // write test case for /create-bucket Route
  });
});
