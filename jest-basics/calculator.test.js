import { Calculator } from "./calculator";

describe("calculator", () => {
  let calc;
  beforeEach(() => {
    calc = new Calculator();
  });

  test("calculator add, subs, mult, div works", () => {
    expect(calc.add(2, 4)).toBe(6);
    expect(calc.substract(2, 4)).toBe(-2);
    expect(calc.multiply(2, 4)).toBe(8);
    expect(calc.divide(4, 2)).toBe(2);
  });
});
