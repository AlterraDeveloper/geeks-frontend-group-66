// Functions - функции

// 1. Function declaration - определение функции (hoisting - подъём, всплытие)

function enableDarkMode() {
  console.log("Dark mode");
  document.body.style.backgroundColor = "#333";
}

function enableLightMode() {
  console.log("Light mode");
  document.body.style.backgroundColor = "#eee";
}

// 2. Function expression - функциональное выражение

let enableDarkModeExpr = function () {
  console.log("Dark mode");
  document.body.style.backgroundColor = "#333";
};

let enableLightModeExpr = function () {
  console.log("Light mode");
  document.body.style.backgroundColor = "#eee";
};

function applyDiscount(price = 0, discount = 0) {
  //   price = price ?? 0;
  //   discount = discount ?? 0;
  let discountValue = (price / 100) * discount;
  let priceWithDiscount = price - discountValue;
  return priceWithDiscount;
}

let price1000discount50 = applyDiscount(1000, 50);
console.log(price1000discount50); // 500

console.log(applyDiscount(10_000, 5)); // 9 500
console.log(applyDiscount(15_500, 0)); // 15 500

function getArraySum(array) {
  let result = 0;
  for (let item of array) {
    result += item;
  }
  return result;
}

let points = [10, 10, 10, 8, 8, 9, 9, 5];
let totalPoints = getArraySum(points);
console.log("Total points => ", totalPoints);

let visits = [1, 1, 1, 1, 1, 0, 0, 1];
let totalVisits = getArraySum(visits);
console.log("Total visits => ", totalVisits);

let tests = [40, 25];
let totalTests = getArraySum(tests);
console.log("Total tests => ", totalTests);

let repeat = function (string, count) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += string;
  }
  return result;
};

function hideCardNumber(cardNumber) {
  let mask = "●";
  let hiddenCard = "";
  for (let i = 0; i < cardNumber.length; i++) {
    if (i >= 4 && i <= 13) {
      hiddenCard += mask;
    } else {
      hiddenCard += cardNumber[i];
    }
  }
  return hiddenCard;
}
let myBankCard = "1234123412341234";
console.log("Банк. карта =>", myBankCard);
console.log("После скрытия =>", hideCardNumber(myBankCard));


let hideCardNumberExpr = function(cardNumber, mask = "●"){
    let firstPart = cardNumber.slice(0, 4);
    let lastPart = cardNumber.slice(-2);
    let hiddenPart = repeat(mask, 10);
    return firstPart + hiddenPart + lastPart;
}
console.log("После скрытия =>", hideCardNumberExpr(myBankCard));

function randomizer(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

