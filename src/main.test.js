import {getHelloDaniel,getHelloWithFirstName,getSumOfNum1AndNum2,getNum1DevidedByNum2,} from "./main";
import Children from "./components/pages/children"
import {react, render, screen} from "@testing-library/react"
describe("test for getHelloDaniel", () => {
  it("return hello daniel", () => {
    expect(getHelloDaniel()).toBe("hello daniel");
  });

  it("not return hi there", () => {
    expect(getHelloDaniel()).not.toBe("hi there");
  });

  it("not return a number", () => {
    expect(getHelloDaniel()).not.toBeNaN();
  });
});

describe("test for getHelloWithFirstName", () => {
  it("return hello daniel", () => {
    expect(getHelloWithFirstName("daniel")).toBe(`hello daniel`);
  });

  it("should return hello", () => {
    expect(getHelloWithFirstName()).toBe("hello undefined");
  });

  it("should return number", () => {
    expect(getHelloWithFirstName(27527)).not.toBe("hello daniel");
  });
});

describe("test for getSumOfNum1AndNum2", () => {
  it("should return num1+num2", () => {
    expect(getSumOfNum1AndNum2(5, 5)).toBe(10);
  });

  it("should return NaN", () => {
    expect(getSumOfNum1AndNum2()).toBeNaN();
  });
});

describe("test for getNum1DevidedByNum2",()=>{
    it("should return num1/num2",()=>{
        expect(getNum1DevidedByNum2(12,4)).toBe(3)
    })

    it("should return NaN",()=>{
        expect(getNum1DevidedByNum2("dan","mal")).toBeNaN
    })
})




