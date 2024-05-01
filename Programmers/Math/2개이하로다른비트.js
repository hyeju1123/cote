// 오른쪽부터 검색했을 때 제일 먼저 0이 나오는 위치 찾음
// 0 오른쪽 옆 부분이 2제곱수-1이면 0111 -> 1011
// 아니라면 +1

function solution(numbers) {
  let bigger = numbers.map(n => {
    if (n === 0) return "1";

    let binary = "";
    while (n > 1) {
      binary = (n % 2) + binary;
      n = Math.floor(n / 2);
    }
    binary = "01" + binary;
    let firstZero = binary.lastIndexOf("0");
    let binaryLen = binary.length;
    // console.log(binary)

    if (firstZero === binaryLen - 1) {
      return binary.slice(0, binaryLen - 1) + "1";
    } else {
      if (firstZero === 0) {
        return "10" + binary.slice(2);
      } else {
        return binary.slice(0, firstZero) + "10" + binary.slice(firstZero + 2);
      }
    }
  });

  let answer = bigger.map(binary => {
    let decimal = 0;

    binary
      .split("")
      .reverse()
      .map((b, i) => {
        decimal += 2 ** i * parseInt(b);
      });
    // console.log('decimal', decimal)
    return decimal;
  });

  return answer;
}
