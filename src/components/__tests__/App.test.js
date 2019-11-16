import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";

describe("App Component Test", () => {
  it("should display application header", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);

    console.log(div.innerHTML);

    ReactDOM.unmountComponentAtNode(div);
  });
});
