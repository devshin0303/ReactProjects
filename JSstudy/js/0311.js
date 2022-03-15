const kage = 96;
function calculateKrAge(ageOfForigner) {
  // return ageOfForigner + 2; return 값으로 계산 결과를 반환
  ageOfForigner + 2;
  return "hello"; // retrun 값으로 string hello를 반환
}
const krAge = calculateKrAge(kage);

console.log(krAge);

// calculator

const calculator = {
  plus: function () {
    alert("hi");
    // return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const divideResult = calculator.divide(10, minusResult);
const timesResult = calculator.times(divideResult, 10);
const powerResult = calculator.power(timesResult, 10);

console.log(calculator.plus);
//calculator

//conditional
const age = parseInt(prompt("How are you??"));

if (isNaN(age) || age < 0) {
  console.log("Write A Positive Number");
} else if (age < 18) {
  console.log("you are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else {
  console.log("you can't  drink");
}
console.log(age.toString());
//conditional
