import sys


N = int(input())
requested = list(map(int, sys.stdin.readline().rstrip().split(' ')))
country_b = int(input())

requested.sort()

def binary_search(A, target, left, right):
    result = -1
    
    while left <= right:
        mid = (left+right) // 2

        # 균등예산보다 크게 요청한 국가가 없을 수도 있음
        # 모든 국가가 균등예산보다 크게 요청했을 수도 있음
        if A[mid] > target:
            result = mid
            right = mid - 1
        elif A[mid] <= target:
            left = mid + 1
    
    return result



def solution(requested_b, even_b, rest_b):
    len_requested = len(requested_b)
    bigger = binary_search(requested_b, even_b, 0, len_requested-1)
    

    if bigger == -1:
        return requested_b[-1]
    elif bigger == 0:
        return even_b
    else:
        rest_b -= sum(requested_b[:bigger])
        if sum(requested_b[bigger:]) > rest_b:            
            bigger_requested = requested_b[bigger:]
            new_even_b = rest_b // (len_requested-bigger)
            return solution(bigger_requested, new_even_b, rest_b)
        else:
            return requested_b[-1]


print(solution(requested, country_b // N, country_b))