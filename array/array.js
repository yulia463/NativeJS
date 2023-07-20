/*
В Haskell есть несколько полезных функций для работы со списками:

$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Ваша задача — реализовать эти функции на данном языке. Убедитесь, что он не редактирует массив; это вызовет проблемы!
 Вот шпаргалка:

| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Вот как я ожидаю, что функции будут вызываться на вашем языке:

head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
Большинство тестов состоят из 100 случайно сгенерированных массивов, в каждом из которых по четыре теста, по одному для
каждой операции. Всего 400 тестов. Пустых массивов не будет. В Haskell есть тесты QuickCheck
    assert.strictEqual(head([5,1]), 5);
    assert.deepEqual(tail([1]), []);
    assert.deepEqual(init([1,5,7,9]), [1,5,7]);
    assert.strictEqual(last([7,2]), 2);
 */

// function head(array) {
//     return array[0];
// }
//
// function tail(array) {
//     return array.slice(1);
// }
//
// function init(array) {
//     return array.slice(0, array.length - 1);
// }
//
// function last(array) {
//     return array[array.length - 1];
// }

/*
Вам дан массив. Завершите функцию, которая возвращает количество ВСЕХ элементов в массиве, включая любые вложенные массивы.

Примеры
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
Вход всегда будет массивом.
    assert.deepEqual(deepCount([]), 0, "Expected 0");
    assert.deepEqual(deepCount([1, 2, 3]), 3, "Expected 3");
    assert.deepEqual(deepCount(["x", "y", ["z"]]), 4, "Expected 4");
    assert.deepEqual(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7");
    assert.deepEqual(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8");
 */
// function deepCount(a) {
//     let count = 0
//     for (let el of a) {
//         count += 1
//         if (Array.isArray(el)) {
//             count += deepCount(el)
//         }
//     }
//     return count
// }
//
// console.log(deepCount([1, 2, [3, 4, [5]]]))

/*
Волки были вновь завезены в Великобританию. Вы овцевод, и теперь вас преследуют волки, которые притворяются овцами. К счастью, вы умеете их замечать.

Предупредите овцу перед волком, что ее вот-вот съедят. Помните, что вы стоите в начале очереди , которая находится в конце массива:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
Если волк — самое близкое вам животное, вернитесь "Pls go away and stop eating my sheep". В противном случае верните,
"Oi! Sheep number N! You are about to be eaten by a wolf!"где Nнаходится овца в очереди.

Примечание: в массиве всегда будет ровно один волк.

Примеры
Вход: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Выход:"Oi! Sheep number 1! You are about to be eaten by a wolf!"

Вход: ["sheep", "sheep", "wolf"]
Выход:"Pls go away and stop eating my sheep"
    doTest(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"],
		"Oi! Sheep number 2! You are about to be eaten by a wolf!"
	);
    doTest(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"],
		"Oi! Sheep number 5! You are about to be eaten by a wolf!"
	);
    doTest(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"],
		"Oi! Sheep number 6! You are about to be eaten by a wolf!"
	);
    doTest(["sheep", "wolf", "sheep"],
		"Oi! Sheep number 1! You are about to be eaten by a wolf!"
	);
    doTest(["wolf"],
		"Pls go away and stop eating my sheep"
	);
    doTest(["sheep", "sheep", "wolf"],
		"Pls go away and stop eating my sheep"

 */
// function warnTheSheep(queue) {
//     let copyQueue = queue.reverse()
//     for (let i = 0; i < copyQueue.length; i++) {
//         if(copyQueue[i] === 'wolf'){
//             return `Pls go away and stop eating my sheep`
//         }
//         else if (copyQueue[i + 1] === 'wolf'){
//             return `Oi! Sheep number ${i + 1}! You are about to be eaten by a wolf!`
//     }
//
// }}
//
// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
// console.log(warnTheSheep(["wolf"]))
/*
Задача: Сумма элементов

Условие: Напишите функцию sumArray, которая принимает массив чисел и возвращает сумму всех элементов массива.
Пример:
javascript
Copy code
sumArray([1, 2, 3, 4, 5]); // Ожидаемый результат: 15
sumArray([10, 20, 30, 40, 50]); // Ожидаемый результат: 150
 */
// function sumArray(n){
//     return n.reduce((el,acc)=>el+acc)
// }
//
// console.log(sumArray([10, 20, 30, 40, 50]))

/*
Задача: Фильтрация массива

Условие: Напишите функцию filterArray, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа из исходного массива.
Пример:
javascript
Copy code
filterArray([1, 2, 3, 4, 5, 6]); // Ожидаемый результат: [2, 4, 6]
filterArray([10, 15, 20, 25, 30]); // Ожидаемый результат: [10, 20, 30]
 */
// function filterArray(a) {
//     return a.filter(el => el % 2===0)
// }
//console.log(filterArray([1, 2, 3, 4, 5, 6]))

/*
Задача: Подсчет количества элементов

Условие: Напишите функцию countElements, которая принимает массив и возвращает объект, содержащий количество вхождений каждого элемента массива.
Пример:
countElements(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']); // Ожидаемый результат: { 'apple': 3, 'banana': 2, 'orange': 1 }
countElements([1, 2, 3, 2, 1, 4, 5, 1]); // Ожидаемый результат: { '1': 3, '2': 2, '3': 1, '4': 1, '5': 1 }
 */
// function countElements(a) {
//     let res = {}
//     for (let i = 0; i < a.length; i++) {
//         if (res[a[i]] === undefined) {
//             res[a[i]] = 1
//         }else{
//             res[a[i]] += 1
//         }
//     }
//     return res
// }
//console.log(countElements(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']))


// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
//     Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     Удалите первый элемент массива и покажите его.
//     Вставьте Рэп и Регги в начало массива.
//     Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок - н - ролл
// Джаз, Классика, Рок - н - ролл
// Классика, Рок - н - ролл
// Рэп, Регги, Классика, Рок - н - ролл

const styles = [' Джаз', 'Блюз']
styles.push('Рок - н - ролл')
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
styles.shift();
styles.unshift('Рэп', 'Регги')
//console.log(styles)

/*
Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
Примеры:
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
 */
function camelize(str) {
    return str.replace(/[-](.)/g, function (a, b) {
        return b.toUpperCase()
    })
    // for (let i = 0; i < s; i++) {}
}

console.log(camelize("list-style-image"))

function toCamelCase(str) {
    return str.replace(/[-_](.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
}

console.log(toCamelCase("hello_world")); // выводит "helloWorld"
console.log(toCamelCase("my-variable-name")); // выводит "myVariableName"
console.log(toCamelCase("some-text"));

/*
Фильтрация по диапазону
важность: 4
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными
a и меньше или равными b и возвращает результат в виде массива.
 */
function filterRange(arr, a, b) {
    return arr.filter((el) => el >= a && el <= b)
}

console.log(filterRange([5, 3, 8, 1], 1, 4))

/*
Фильтрация по диапазону "на месте"
важность: 4
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
 которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

Функция должна изменять принимаемый массив и ничего не возвращать.
 */
function filterRange1(arr, a, b) {
    return arr.filter((el) => a <= el && el <= b)
}

console.log(filterRange1([5, 3, 8, 1], 1, 5))

class Calculator {
    constructor() {
        this.operations = new Map()
    }
    calculate(str) {
        let spl = str.split(' ')
        if (spl[1] === '+') {
            return +spl[0] + +spl[2]
        }
        if (spl[1] === '-') {
            return spl[0] - spl[2]
        }
       return this.operations.get(spl[1])(+spl[0], +spl[2])
    }
    addMethod(name, func) {
        this.operations.set(name, func)
    }
}

let clc = new Calculator();
clc.calculate("3 + 7")
console.log(clc.calculate("3 - 7"))
let method = new Calculator();
method.addMethod("*", (a, b) => a * b)
console.log(method.calculate("3 * 7"))