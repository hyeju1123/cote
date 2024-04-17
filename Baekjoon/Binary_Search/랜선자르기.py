import sys

N, M = map(int, input().split())
lines = [int(sys.stdin.readline().rstrip()) for _ in range(N)]

lines.sort(reverse=True)

left = 1
right = lines[0]
result = 1

while left <= right:
    line_sum = 0
    mid = (left+right) // 2

    for l in lines:
        line_sum += l // mid
        if line_sum >= M:
            break
    
    if line_sum >= M:
        result = mid 
        left = mid + 1
    else:
        right = mid - 1

print(result)

