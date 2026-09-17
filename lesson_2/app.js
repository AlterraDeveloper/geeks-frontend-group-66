console.log("Lesson 2");

// 1. number
// 2. string
// 3. boolean (true, false)
// 4. undefined
// 5. null
// 6. object

// 7. bigint
// 8. symbol

let points = 0; // max 80
let appointments = 1; // max 8
let testPoints = 100; // max 100

// camel case

let passByPoints = points >= 40;
let passByAppointments = appointments >= 4;
let passByTestPoints = testPoints >= 50;

// тернарный оператор: условие ? значение1 : значение2;

console.log("Прошел по баллам: ", passByPoints ? "Да" : "Нет");
console.log("Прошел по посещениям: ", passByAppointments ? "Да" : "Нет");
console.log("Прошел по баллам за тесты: ", passByTestPoints ? "Да" : "Нет");

let agree = false;
console.log("Клиент", agree ? "согласен" : "не согласен");

// && || !
// > < >= <= == === != !==

if (passByPoints && passByAppointments && passByTestPoints) {
  console.log("Бесплатный повтор");
} else {
  console.warn("Повтор, необходимо оплатить...");
}

let hasInternetConnection = false;
let hasCash = true;
let hasPrinterPaper = true;
let cardreaderOk = true;

if (!hasInternetConnection || !hasCash || !hasPrinterPaper || !cardreaderOk) {
  console.error("Банкомат не исправен...");
} else {
  console.log("Банкомат работает...");
}

// let fuelType = prompt("Тип топлива: 92, 95, 98, ДТ, ГАЗ");
// let amount = prompt("Введите сумму заправки");
// let clientCard = prompt("Введите номер бонусной карты");

// let priceForLiter = 0;

// if (fuelType === "92") {
//   priceForLiter = 65;
// } else if (fuelType === "95") {
//   priceForLiter = 100;
// } else if (fuelType === "98") {
//   priceForLiter = 120;
// } else if (fuelType === "ДТ") {
//   priceForLiter = 90;
// } else if (fuelType === "ГАЗ") {
//   priceForLiter = 55;
// }

// let liters = amount / priceForLiter;
// let bonuses = 0;

// // if (clientCard === "silver") {
// //   bonuses = Math.trunc(liters) * 0.5;
// // } else if (clientCard === "gold") {
// //   bonuses = Math.trunc(liters) * 0.75;
// // } else if (clientCard === "platinum") {
// //   bonuses = Math.trunc(liters);
// // }

// switch (clientCard) {
//   case "silver":
//     bonuses = Math.trunc(liters) * 0.5;
//     break;
//   case "gold":
//     bonuses = Math.trunc(liters) * 0.75;
//     break;
//   case "platinum":
//     bonuses = Math.trunc(liters);
//     break;
// }

// console.log("Заправка на " + liters + " л. Бонусы: " + bonuses);

let signalLevel = 4;

switch (signalLevel) {
  case 5:
    console.log("Сигнал отличный 🟢");
    break;
  case 4:
    console.log("Сигнал хороший 🟡");
    break;
  case 3:
    console.log("Сигнал нормальный 🟠");
    break;
  case 2:
  case 1:
    console.log("Сигнал плохой 🔴");
    break;
}

let checkAmount = prompt("Введите сумму чека");
let bonuses = 0;

if (checkAmount >= 800 && checkAmount < 2000) {
  bonuses = Math.trunc(checkAmount / 100);
} else if (checkAmount >= 2000 && checkAmount < 5000) {
  bonuses = Math.trunc(checkAmount / 100) * 2;
} else if (checkAmount >= 5000) {
  bonuses = Math.trunc(checkAmount / 100) * 3;
}

console.log("Сумма покупки: " + checkAmount + ". Бонусы: " + bonuses);

