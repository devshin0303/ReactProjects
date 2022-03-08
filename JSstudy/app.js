const player = {
  name: "yonduk",
  points: 102,
  fat: true,
};
console.log(player);
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);
console.log(player.points);

function divide(firstNum, secondNum) {
  console.log(firstNum / secondNum);
}

divide(30, 10);

const helo = {
  name: "yonduk",
  sayHello: function (otherPeseonName) {
    console.log("hello " + otherPeseonName + " nice to meet you");
  },
};

helo.sayHello("dal");
