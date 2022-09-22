import { getMyName } from "./main";

it("return hello daniel", () => {
  expect(getMyName()).toBe("hello daniel");
});

it("not return hi there", () => {
  expect(getMyName()).not.toBe("hi there");
});

it("not return a number", () => {
  expect(getMyName()).not.toBeNaN();
});
