import { getHelloDaniel ,getHelloWithFirstName } from "./main";

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

describe("test for getHelloWithFirstName",()=>{
    it("return hello daniel",()=>{
        expect(getHelloWithFirstName("daniel")).toBe(`hello daniel`)
    })

    it("should return hello",()=>{
        expect(getHelloWithFirstName()).toBe("hello undefined" )
    })
    
    it("should return number",()=>{
        expect(getHelloWithFirstName(27527)).not.toBe("hello daniel")
    })
})
