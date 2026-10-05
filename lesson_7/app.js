// Методы массивов - array methods

// const myAge = 18;

// console.log("My age", { myAge });

// myAge = 19;

// console.log("My age", { myAge });


const array = [150, 75, -400, 500, -700, 1000, 600];

const setZero = (array, i) => {
    array[i] = 0;
}

// for(let i = 0; i < array.length; i++){
//     // array[i] = 0;
//     setZero(array, i);
// }

// forEach
// array.forEach((item, i, array) => {
//     setZero(array, i);
// })

console.log(JSON.stringify(array));

// callback - коллбэк - функция обратного вызова

// map - 

const soms = array.map(function(item){
    return item * 90;
})

const euros = soms.map(function(som){
    return som / 100;
})

const copyArray = array.map((item) => item); 


console.log(JSON.stringify(soms.map(som => som + " \u20C0")));
console.log(JSON.stringify(euros.map(euro => euro + " €")));
console.log(JSON.stringify(array.map(dollar => dollar + " $")));
console.log(JSON.stringify(copyArray));

const actions = ["Добавить", "Редактировать", "Удалить", 
    "Экспорт в XLS", "Экспорт в PDF"];

const buttons = actions.map(function(action) {
    const btn = document.createElement("button");
    btn.textContent = action;
    btn.classList.add("action")
    // btn.style.backgroundColor = "gold";
    // btn.style.color = "black";
    // btn.style.padding = "10px 20px";
    // btn.style.margin = "10px";
    return btn;
});

document.body.append(...buttons);

console.log(buttons.map(btn => btn.outerHTML));

// function(1,2,3)
// function([1,2,3])


const lessons = [
    {
        index: 1,
        onlineLink: "https://meet.google/h32ib"
    },
    {
        index: 2,
        onlineLink: "https://meet.google/h32ib"
    },
    {
        index: 3,
        onlineLink: "https://meet.google/h32ib"
    },
    {
        index: 4,
        onlineLink: "https://meet.google/h32ib"
    },
    {
        index: 5,
        onlineLink: "https://meet.google/h32ib"
    },
    {
        index: 6,
        onlineLink: "https://meet.google/h32ib"
    },
    {
        index: 7,
        onlineLink: "https://meet.google/h32ib"
    },
    {
        index: 8,
        onlineLink: null
    },
]

const lessonsBlocks = lessons.map(function(lesson){
    const div = document.createElement("div");
    div.textContent = "Урок №" + lesson.index;
    div.classList.add("lesson");
    if(lesson.onlineLink != null){
        div.classList.add("completed");
    }
    return div;
})

document.body.append(...lessonsBlocks);

const incomes = array.filter((item) => item > 1_000_000) 
const expenses = array.filter((item) => item < 0); 

console.log(JSON.stringify(incomes));
console.log(JSON.stringify(expenses));
console.log(incomes.toString());
console.log(String(incomes));




