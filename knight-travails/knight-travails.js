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
  // When given a coordinate, it will output all the positions where the knight can move, checking if the coordinates are valid.
  const firstCoord = coordinate[0];
  const secondCoord = coordinate[1];

  let possiblePositions = [];
  const knightMoves = [
    // So, as far as I understand, a valid moving position is [x+-1, y+-2] or [x+-2, y+-] as long as 0>=x,y<=7.
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
    // Populate all possible moves.
    possiblePositions.push([firstCoord + x, secondCoord + y]);
  }

  const validPositions = possiblePositions.filter(isCoordinateValid);
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
function getPositionsMoved(v) {
  const parentsArr = getParentsOf(v);
  let coordinatesArr = [v.coord];
  parentsArr.forEach((object) => {
    coordinatesArr.push(object.coord);
  });
  return coordinatesArr.reverse();
}
function getParentsOf(v) {
  // v is an object {coord:[x,y], parent:object}. The parent is the previous coordinate, as an object. This returns all parents.
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
  // Input: A graph G and a starting vertex root of G
  // Output: Goal state. The parent links trace the shortest path back to root[9]
  //  1  procedure BFS(G, root) is
  //  2      let Q be a queue
  //  3      label root as explored
  //  4      Q.enqueue(root)
  //  5      while Q is not empty do
  //  6          v := Q.dequeue()
  //  7          if v is the goal then
  //  8              return v
  //  9          for all edges from v to w in G.adjacentEdges(v) do
  // 10              if w is not labeled as explored then
  // 11                  label w as explored
  // 12                  w.parent := v
  // 13                  Q.enqueue(w)
  // I think this returns the shortest path, but I'm not sure. Maybe the way I did it makes it different from the above pseudocode.

  if (
    !Array.isArray(startingPos) ||
    !Array.isArray(endPos) ||
    !(startingPos.length === 2) ||
    !(endPos.length === 2)
  ) {
    throw new Error(
      "Provide an array of coordinates. For example knightMoves([0,0], [1,2])",
    );
  } else if (!isCoordinateValid(startingPos) || !isCoordinateValid(endPos)) {
    throw new Error("Provide coordinates between 0 and 7");
  }
  if (arraysEqual(startingPos, endPos)) return [startingPos];

  let queue = [];
  queue.push({ coord: startingPos, parent: null });
  let visitedCoordinates = [];
  let timesLooped = 0;

  while (queue.length > 0) {
    let v = queue.shift();
    if (arraysEqual(v.coord, endPos)) {
      const moves = getPositionsMoved(v);
      // console.log(`MOVES=${moves}`);
      return moves;
    }
    getKnightPossibleMovingPositions(v.coord).forEach((el) => {
      w = {
        coord: el,
        parent: null,
      };
      if (!visitedCoordinates.includes(w.coord)) {
        visitedCoordinates.push(w.coord);
        w.parent = v;
        queue.push(w);
        timesLooped += 1;
      }
    });
    if (timesLooped > 10000000) {
      // To prevent browser chrashes.
      throw new Error("Too many iterations");
    }
  }
}

console.log(knightMoves([0, 0], [1, 2])); // Should output [0,0], [1,2].
console.log(knightMoves([0, 0], [2, 0])); // Should output [0,0], [1,2], [2,0].
console.log(knightMoves([0, 0], [3, 3])); // may return [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]].
console.log(knightMoves([3, 3], [0, 0])); // may return [[3,3],[2,1],[0,0]] or [[3,3],[1,2],[0,0]].
console.log(knightMoves([0, 0], [7, 7])); // may return [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]] or [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]].
