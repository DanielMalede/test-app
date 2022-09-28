import { react, render, screen } from "@testing-library/react";
import Children from "./children";
describe("abc", () => {
  test("test section", () => {
    render(<Children />);
    let testElemnt = screen.getByText("Hello Children");
    expect(testElemnt).toBeInTheDocument();
  });
  test("chack text in span tag", () => {
    render(<Children />);
    let testElemnts = screen.getByTestId("MySpan");
    expect(testElemnts.innerHTML).toEqual("Hello Children");
  });
  // test("abc",()=>{
  //     render(<Children/>)
  //     let myDiv = document.createElement("div")
  //     expect(myDiv.innerText).toEqual('<div class="children"><section><span data-testid="MySpan">Hello Children</span></section></div>')
  // })
  test("class Name Chack", () => {
    render(<Children />);
    let classNameChack = screen.getByTestId("MySpan");
    expect(classNameChack).toHaveClass("newClass");
  });
  test("Chack text color", () => {
    render(<Children />);
    let colorText = screen.getByTestId("MySpan");
    expect(colorText).toHaveStyle("color:'red'");
  });
//   test("chack text length", () => {
//     render(<Children />);
//     let textLength = screen.getByTestId("MySpan");
//     expect(textLength).toHaveTextContent();
//   });

});
