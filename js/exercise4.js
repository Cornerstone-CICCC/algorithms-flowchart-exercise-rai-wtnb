const isTriangle = (num1, num2, num3) => {
  return num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1;
};

const num1 = 1;
const num2 = 2;
const num3 = 3;
console.log(isTriangle(num1, num2, num3));
