import { createElement } from "react";
import { ReactDOM } from "react-dom";
import { createRoot } from "react-dom/client";
import Cat from "./Cat";


describe("test for Cat", () => {
  it("return element HTML and text cat", () => {
    const div = createElement("div");
    ReactDOM.createRoot(div).render(<Cat />);
    expect(div.innerHTML).toEqual('<div class="cat"><h1>Cat</h1></div>');
  });
});
