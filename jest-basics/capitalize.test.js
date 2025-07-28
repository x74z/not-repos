import {capitalize} from "./capitalize";

test("hi => Hi", () => {
  expect(capitalize("hi")).toBe("Hi");
  expect(capitalize("iadfsoijfpdaspasdf")).toBe("Iadfsoijfpdaspasdf");
});
