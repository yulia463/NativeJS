/*
У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
 */
// let vasya = {name: "Вася", age: 25};
// let petya = {name: "Петя", age: 30};
// let masha = {name: "Маша", age: 28};
// let users = [vasya, petya, masha];
// let names = users.map(el=>el.name)
// console.log(names); // Вася, Петя, Маша


let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
//keys.push("more");


//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
let vasya = {name: "Вася", age: 25};
let petya = {name: "Петя", age: 30};
let masha = {name: "Маша", age: 29};

let arr = [vasya, petya, masha];

function getAverageAge(users) {
    return users.reduce((acc, el) => el.age + acc, 0) / users.length
}

//console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.
 */
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    let res = 0
    for (let value of Object.values(salaries)) {
       res += value
    }
    return res
}

console.log(sumSalaries(salaries)); // 650