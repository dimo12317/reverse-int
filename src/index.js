module.exports = function reverse (n) {
  if(n < 0) return reverse(-n);
  return Number(n.toString().split('').reverse().join(""));
}
