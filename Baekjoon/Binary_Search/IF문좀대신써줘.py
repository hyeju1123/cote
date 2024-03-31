import sys

N, M = map(int, input().split())
nicknames = [sys.stdin.readline().split() for _ in range(N)]
nicknames.sort(key=lambda x: int(x[1]))

powers = [int(sys.stdin.readline().strip()) for _ in range(M)]

for p in powers:
    right = N-1
    left = 0
    result = 0

    while left <= right:
        mid = (left+right) // 2
        if int(nicknames[mid][1]) >= p:
            result = mid
            right = mid - 1
        else:
            left = mid + 1
    print(nicknames[result][0])
        
