// array - массив

let points = [10, 9, 10, 9];
//            0   1  2  3

console.log("Проверено домашних заданий: " + points.length);
console.log("За первый урок получено: " + points[0] + " баллов");

points[4] = 8;
points[5] = 6;
points.push(10, 10, 10, 10);
points.push(9, 8, 7);

console.log("Баллы студента:", points);
console.log("Проверено домашних заданий: " + points.length);

// points.pop()
// points.pop()
// points.pop()
// points.pop()
// points.pop()

points.splice(8);

console.log("Баллы студента:", points);
console.log("Проверено домашних заданий: " + points.length);

// loops - циклы

// for..of
// for

let totalPoints = 0;

for (let point of points) {
  totalPoints += point;
}

console.log("Итого баллов за месяц:", totalPoints);

for (let i = 0; i < points.length; i++) {
  console.log("Урок " + (i + 1) + " (Баллы: " + points[i] + ")");
}

let visits = [1, 1, 0, 0, "online", "online", "online", "online"];

let totalVisits = 0;
let totalOfflineVisits = 0;
let totalOnlineVisits = 0;

for (let visit of visits) {
  // if(visit === "online" || visit === 1){
  //     totalVisits++;
  // }

  if (visit === 1) {
    totalVisits++;
    totalOfflineVisits++;
  }

  if (visit === "online") {
    totalVisits++;
    totalOnlineVisits++;
  }
}

console.log("Итого посещений:", totalVisits);
console.log("Из них ОФФЛАЙН:", totalOfflineVisits);
console.log("Из них ОНЛАЙН:", totalOnlineVisits);

let finances = [50_000, 5_000, -1_000, -500, -12_000, -5500, -4000, 2000];
let totalIncome = 0;
let totalExpense = 0;

for (let item of finances) {
  if (item > 0) {
    totalIncome += item;
  }

  if (item < 0) {
    totalExpense += Math.abs(item);
  }
}

console.log("Итого доходов => ", totalIncome);
console.log("Итого расходов =>", totalExpense);

let myBankCard = "4321567899874545";
let mask = "*";
let hiddenCard = "";
for (let i = 0; i < myBankCard.length; i++) {
  //   console.log("индекс = ", i, "символ = ", myBankCard[i]);
  if (i >= 4 && i <= 13) {
    hiddenCard += mask;
  } else {
    hiddenCard += myBankCard[i];
  }
}

console.log("Банк. карта =>", myBankCard);
console.log("После скрытия =>", hiddenCard);
