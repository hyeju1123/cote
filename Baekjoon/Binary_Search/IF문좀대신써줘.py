import sys

n, m = map(int, input().split())
chingho = [sys.stdin.readline().split() for _ in range(n)]
chingho.sort(key=lambda x: int(x[1]))

chars = [int(sys.stdin.readline().strip()) for _ in range(m)]

for char in chars:
    right = len(chingho)
    left = 0
    result = 0

    while left <= right:
        mid = (left+right) // 2
        if int(chingho[mid][1]) >= char:
            result = mid
            right = mid - 1
        else:
            left = mid + 1
    print(chingho[result][0])
        
