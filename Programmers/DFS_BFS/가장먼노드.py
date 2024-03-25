from collections import deque

def solution(n, edge):
    adj = [[] for _ in range(n + 1)]
    for e in edge:
        adj[e[0]].append(e[1])
        adj[e[1]].append(e[0])

    visit = [0] * (n + 1)  # index: 방문 노드 정보, value: 몇 번째 level에서 방문했는지
    visit[1] = 1
    q = deque([1])

    while q:
        node = q.popleft()
        v = visit[node]
        for next_node in adj[node]:
            if visit[next_node] == 0:
                visit[next_node] = v + 1
                q.append(next_node)

    max_v = max(visit)
    cnt = visit.count(max_v)
    return cnt

