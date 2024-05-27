function solution(maps) {
  let answer = 0;
  let pullup = false;
  let queue = [];
  let width = maps[0].length;
  let height = maps.length;
  let endPos = [0, 0];
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];

  const init = (queue, start) => {
    return maps.map((rooms, i) => {
      return rooms.split("").map((room, j) => {
        if (room === "E") {
          endPos = [i, j];
        }
        if (room === start) {
          queue.push([i, j]);
          return 0;
        }
        return room;
      });
    });
  };

  let copied = init(queue, "S");

  while (queue.length !== 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      if (
        y + dy[i] < 0 ||
        y + dy[i] >= height ||
        x + dx[i] < 0 ||
        x + dx[i] >= width
      )
        continue;
      if (y + dy[i] === endPos[0] && x + dx[i] === endPos[1] && pullup) {
        return answer + copied[y][x] + 1;
      }

      let nextNode = copied[y + dy[i]][x + dx[i]];
      if (nextNode === "X") continue;

      if (nextNode === "L" && !pullup) {
        pullup = true;
        queue = [];
        answer = copied[y][x] + 1;
        copied = init(queue, "L");
        break;
      } else if (typeof nextNode === "string") {
        copied[y + dy[i]][x + dx[i]] = copied[y][x] + 1;
        queue.push([y + dy[i], x + dx[i]]);
      }
    }
  }

  return -1;
}
