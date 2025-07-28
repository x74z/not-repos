function shiftAlphabet(alphabet, shiftFactor) {
  // // I don't think this is needed. I will keep it in case I need it someday.
  // let newArr = [];
  // const alphabetArr = alphabet.split("");
  // alphabetArr.forEach((e, currIndex) => {
  //   let newIndex = currIndex + shiftFactor;
  //   if (newIndex >= 26) {
  //     // Doing this will return an index at the beggining of the arr. 27-26 =1, so it will move there.
  //     newIndex -= 26;
  //   }
  //   newArr[newIndex] = e;
  // });
  // return newArr.join("");
}

export function shiftLetterByShiftFactor( letter, shiftFactor, alphabet = "abcdefghijklmnopqrstuvwxyz",  capitalAlphabet = alphabet.toUpperCase()) {
  if (alphabet.indexOf(letter) === -1 && capitalAlphabet.indexOf(letter) === -1) return letter;

  let usedAlphabet = alphabet;
  if (letter.toUpperCase() === letter) {
    usedAlphabet = capitalAlphabet;
  }

  let newIndex = usedAlphabet.indexOf(letter) + shiftFactor;
  if (newIndex >= alphabet.length) {
    newIndex -= alphabet.length;
  }

  const newLetter = usedAlphabet.charAt(newIndex);
  return newLetter;
}
export function caesarCipher(string, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; // Length = 26.

  return string
    .split("")
    .map((letter) => shiftLetterByShiftFactor(letter, shiftFactor, alphabet))
    .join("");
}
