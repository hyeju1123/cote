function solution(tickets) {
  let answer = [];
  let ports = new Set();
  let portToIdx = new Map();
  let idxToPort = new Map();
  for (let ticket of tickets) {
    ports.add(ticket[0]);
    ports.add(ticket[1]);
  }
  ports = Array.from(ports).sort();
  ports.forEach((v, i) => portToIdx.set(v, i));
  ports.forEach((v, i) => idxToPort.set(i, v));

  let graph = Array.from(Array(ports.length), () =>
    Array(ports.length).fill(0)
  );
  for (let ticket of tickets) {
    let depart = ticket[0];
    let dest = ticket[1];
    graph[portToIdx.get(depart)][portToIdx.get(dest)]++;
  }

  let terminated = false;
  const dfs = (graph, start, visited = []) => {
    if (terminated) {
      return 1;
    }
    visited.push(idxToPort.get(start));

    for (let i = 0; i < graph[start].length; i++) {
      if (graph[start][i] >= 1) {
        // 아직 쓰지 않은 티켓이라면
        graph[start][i]--;
        let result = dfs(graph, i, visited);
        if (result === -1) {
          // 모든 티켓을 다 돌지 못 한 경우라면 돌려놓기
          graph[start][i]++;
          visited.pop();
        }
      }
    }

    for (let line of graph) {
      for (let l of line) {
        if (l >= 1) {
          return -1;
        }
      }
    }
    answer = visited;
    terminated = true;
  };

  dfs(graph, portToIdx.get("ICN"));

  return answer;
}
