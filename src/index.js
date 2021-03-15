module.exports = function reverse (n) {
  if(n < 0) return -reverse(-n);
  return Number(String(n).split('').reverse().join(""));
}
