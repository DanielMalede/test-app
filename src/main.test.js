import { getMyName } from "./main";

it("return my name is daniel", () => {
  expect(getMyName()).toBe("my name is daniel");
});

it("not return hi there", () => {
  expect(getMyName()).not.toBe("my name is");
});

it("not return a number", () => {
  expect(getMyName()).not.toBeNaN();
});
