import { caesarCipher, shiftLetterByShiftFactor } from "./caesar-cipher";

describe("Caesar Cipher", () => {
  test("shiftLetter works", () => {
    expect(shiftLetterByShiftFactor("a", 3)).toBe("d");
    expect(shiftLetterByShiftFactor("A", 3)).toBe("D");
    expect(shiftLetterByShiftFactor("!", 3)).toBe("!");
    expect(shiftLetterByShiftFactor("a", 4)).toBe("e");
    expect(shiftLetterByShiftFactor(" ", 4)).toBe(" ");
    expect(shiftLetterByShiftFactor(" ", 3)).toBe(" ");
  });
  test("works with a 3 key shift", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
  test("works with a 4 key shift", () => {
    expect(caesarCipher("abcd", 4)).toBe("efgh");
  });
  test("works with a 25 key shift", () => {
    expect(caesarCipher("abc dff", 25)).toBe("zab cee");
  });

});
