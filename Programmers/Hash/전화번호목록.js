function solution(phone_book) {
  hs = new Map();

  phone_book.map(num => {
    hs.has(num[0]) ? hs.get(num[0]).push(num) : hs.set(num[0], [num]);
  });

  for (let val of hs.values()) {
    val.sort();
    for (let i = 0; i < val.length - 1; i++) {
      if (val[i + 1].startsWith(val[i])) {
        return false;
      }
    }
  }

  return true;
}
