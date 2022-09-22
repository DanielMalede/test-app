import ReactDOM from "react-dom";
import createRoot from "react-dom";
import Cat from "./Cat";

describe("test for Cat", () => {
  it("return element HTML and text cat", () => {
    const div = document.createElement("div");
    createRoot.render(<Cat />,div);
    expect(div.innerHTML).toEqual('<div class="cat"><h1>Cat</h1></div>');
  });
});
