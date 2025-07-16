// https://www.theodinproject.com/lessons/javascript-knights-travails
// *********
function isCoordinateValid(coordinate) {
  if (coordinate[0] >= 0 && coordinate[0] <= 7) {
    if (coordinate[1] >= 0 && coordinate[1] <= 7) {
      return true;
    }
  }
  return false;
}
function getKnightPossibleMovingPositions(coordinate) {
  // When given a coordinate, it will output all the positions where the knight can move.
  const firstC = coordinate[0];
  const secondC = coordinate[1];

  let possiblePositions = [];
  const knightMoves = [ [1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1] ];
  for (const [x, y] of knightMoves) {
    // Populate all possible moves
    possiblePositions.push([firstC + x, secondC + y]);
  }

  let validPositions = possiblePositions.filter(isCoordinateValid);
  return validPositions;
}
function knightMoves(startingPos, endPos) {
  // So, as far as I understand, a valid moving position is [x+-1, y+-2] or [x+-2, y+-] as long as 0>=x,y<=7.
  const possibleMoves = getKnightPossibleMovingPositions([startingPos]);
  // TODO: figure out how to continue from here. 
}

// console.log(knightMoves([0, 0], [1, 2])); // Should output [0,0], [1,2].

console.log(getKnightPossibleMovingPositions([0, 1]));
