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
  // So, as far as I understand, a valid moving position is [x+-1, y+-2] or [x+-2, y+-] as long as 0>=x,y<=7.
  // When given a coordinate, it will output all the positions where the knight can move.
  const firstC = coordinate[0];
  const secondC = coordinate[1];

  let possiblePositions = [];
  const knightMoves = [
    [1, 2],
    [2, 1],
    [-1, 2],
    [-2, 1],
    [1, -2],
    [2, -1],
    [-1, -2],
    [-2, -1],
  ];
  for (const [x, y] of knightMoves) {
    // Populate all possible moves
    possiblePositions.push([firstC + x, secondC + y]);
  }

  let validPositions = possiblePositions.filter(isCoordinateValid);
  return validPositions;
}
function arraysEqual(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(a) &&
    a.length === b.length &&
    a.every((val, i) => val === b[i])
  );
}
function getMovedPositions(v) {
  const parentsArr = getParents(v);
  let newArr = [v.arr];
  parentsArr.forEach((object) => {
    newArr.push(object.arr);
  });
  return newArr.reverse();
}
function getParents(v) {
  // if (v.parent === null) return parents;
  // parents.push(v.parent);
  // getParents(v.parent, parents);
  // return parents;
  let parents = [];
  let x = v.parent;
  while (true) {
    if (x === null) return parents;
    parents.push(x);
    x = x.parent;
  }
}
function knightMoves(startingPos, endPos) {
  // https://en.wikipedia.org/wiki/Breadth-first_search#Pseudocode     // This pseudocode helped me reach the final answer.
  // const possibleMoves = getKnightPossibleMovingPositions(startingPos);
  if (arraysEqual(startingPos, endPos)) return [startingPos];
  let queue = [];
  queue.push({ arr: startingPos, parent: null });
  // possibleMoves.forEach(element => { queue.push(element) });
  // let movesMade = [startingPos];
  let visitedPos = [];
  let timesLooped = 0;

  while (queue.length > 0) {
    let v = queue.shift();
    console.log(`v = ${v.arr}`);
    // console.log(v);
    // console.log(endPos);
    // console.log(queue);
    if (arraysEqual(v.arr, endPos)) {
      console.log(
        `V=${v.arr}, END=${endPos}. \n PARENT: ${v.parent.arr} \n PARENT2: ${v.parent.parent.arr}`,
      );
      const moves = getMovedPositions(v);
      // movesMade.push(v.arr);
      // console.log(v.parents);
      console.log(`MOVES=${moves}`);
      return moves;
    }
    getKnightPossibleMovingPositions(v.arr).forEach((e) => {
      // console.log(`e = ${e}`)
      w = {
        arr: e,
        parent: null,
      };
      if (!visitedPos.includes(w.arr)) {
        visitedPos.push(w.arr);
        // console.log(w);
        w.parent = v;
        // console.log(v.parents);
        timesLooped += 1;
        queue.push(w);
      }
    });
    if (timesLooped > 50) {
      throw new Error("Too many iterations");
    }
  }
  return movesMade;
}

// console.log(knightMoves([0, 0], [1, 2])); // Should output [0,0], [1,2].
console.log(knightMoves([0, 0], [2, 0])); // Should output [0,0], [1,2] [2,0].
console.log("^^^^^");

// console.log(getKnightPossibleMovingPositions([0, 1]));
