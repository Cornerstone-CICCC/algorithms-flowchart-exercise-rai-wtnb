const selectLargestNum = (num1, num2, num3) => {
  let dst = num1;
  if (dst < num2) {
    dst = num2;
  }
  if (dst < num3) {
    dst = num3;
  }
  return dst;
};

const num1 = 1;
const num2 = 2;
const num3 = 3;
console.log(selectLargestNum(num1, num2, num3));
