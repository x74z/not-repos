export function capitalize(string){

const firstCharacter = string.charAt(0)
  return string.replace(firstCharacter, firstCharacter.toUpperCase())
}
