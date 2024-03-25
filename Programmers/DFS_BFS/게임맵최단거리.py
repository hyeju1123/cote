from collections import deque


def solution(maps):
    q = deque()
    dx = [0, 0, -1, 1]
    dy = [-1, 1, 0, 0]
    width = len(maps[0])
    height = len(maps)

    q.append((0, 0))
    while q:
        node = q.popleft()
        y, x = node

        for i in range(4):
            # 미로 밖이면 패스
            if x + dx[i] < 0 or x + dx[i] >= width or y + dy[i] < 0 or y + dy[i] >= height: continue
            if maps[y + dy[i]][x + dx[i]] == 0: continue
            if maps[y + dy[i]][x + dx[i]] == 1:
                maps[y + dy[i]][x + dx[i]] = maps[y][x] + 1
                q.append((y + dy[i], x + dx[i]))

    return -1 if maps[height - 1][width - 1] == 1 else maps[height - 1][width - 1]

