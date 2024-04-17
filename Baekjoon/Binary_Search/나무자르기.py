import sys, math

N, M = map(int, input().split())
trees = [int(t) for t in sys.stdin.readline().rstrip().split()]

trees.sort()


left = 0
right = N-1

prev = 0
result = 0
accum = 0

while left <= right:
    mid = (left+right) // 2

    # mid 앞 뒤로 원소가 있는지 확인해야함
    prev_t = trees[mid-1] if mid != 0 else 0
    n_from_mid = N-mid
    calc = sum(trees[mid:]) - (prev_t*n_from_mid)

    if calc >= M:
        result = mid
        prev = prev_t
        accum = calc
        left = mid + 1
    else:
        right = mid - 1




rest = accum - M
even_rest = math.floor(rest / (N-result))

print(prev + even_rest)
