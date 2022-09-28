import {react, render, screen} from "@testing-library/react"
import Children from './children'
describe("abc",()=>{
    render(<Children/>)
    let testElemnt = screen.getByText("Hello Children") 
    test("test section",()=>{
      expect(testElemnt).toBeInTheDocument()
    })
    test("abcd",()=>{
        render(<Children/>)
        let testElemnts = screen.getByTestId("MySpan")
        expect(testElemnts.innerHTML).toEqual("Hello Children")
    })
  })