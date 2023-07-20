/*
Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.

 */
const user = {}
user.name='John'
user.surname='Smith'
user.name='Pete'
delete user.name
console.log(user)

/*
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
 */
function isEmpty(obj){
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}
/*
У нас есть объект, в котором хранятся зарплаты нашей команды:
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0.
 */
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// function sum (){
//     let sum = 0
//     for(let key in salaries){
//         sum +=salaries[key]
//     }
//     return sum
// }

console.log(sum())
/*
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

P.S. Используйте typeof для проверки, что значение свойства числовое.


 */
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
function multiplyNumeric(obj){
    for(let key in menu){
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}


