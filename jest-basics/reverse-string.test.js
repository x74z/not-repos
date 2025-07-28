import { reverseString } from "./reverse-string";

test("reverses string", () => {
  expect(reverseString("fee")).toBe("eef");
  expect(reverseString("tacocat")).toBe("tacocat");
});
