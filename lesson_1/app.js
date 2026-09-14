// console.log("Hello JavaScript");

document.body.style.backgroundColor = "#333";

// V8 - JavaScript Engine

// переменные - variables
// типы данных
// 1. строки (текст) string
// 2. числа number
// 3. логический boolean
// 4. неопределенный undefined
// 5. null
// 6. объект object

let myBalance = 10_000;
let phone = prompt("Укажите номер телефона");

let transferSum = prompt("Укажите сумму перевода:");

console.log("Мой баланс:" + myBalance)

// условия - conditions
if (myBalance >= transferSum) {
    myBalance = myBalance - transferSum;
    console.log("Перевод на номер " + phone + ", сумма " + transferSum + " сом");
} else {
    console.error("Недостаточно средств...");
}

console.log("Остаток на счете:" + myBalance)
