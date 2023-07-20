// Hello world => helloWorld

const toCamelCase = (str) => {
    let arr = str.toLowerCase().split(' ')
    const res = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        res.push(arr[i][0].toUpperCase() + arr[i].slice(1))
    }
    return res.join('')
}

//console.log(toCamelCase('Hello world'))

/*
Предполагая, что nameэто a Stringи он проверяет опечатки пользователя, чтобы вернуть имя с первой заглавной буквой (Xxxx).

Примеры:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given
  or `name` = ""        => return "Hello, World!"
  assert.isDefined(actualJohn, "You have to return a string instead of logging it to the console");
    assert.strictEqual(actualJohn, 'Hello, John!', "returns 'Hello, John!' when given 'johN'");
    assert.strictEqual(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'");
    assert.strictEqual(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given");
    assert.strictEqual(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty string");

 */
// function hello(name) {
//     if (!name ) {
//         return "Hello, World!"
//     }
//     const str = 'Hello,'
//
//     let res = [name[0].toUpperCase()]
//     for (let i = 1; i < name.length; i++) {
//         res.push(name[i].toLowerCase())
//     }
//     return `${str} ${res.join("")}!`
// }
//или const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
//console.log(hello('jSohn'))

/*
Задача: Подсчет гласных
Условие: Напишите функцию countVowels, которая принимает строку и возвращает количество гласных букв в этой строке (a, e, i, o, u, y - в нижнем регистре).
Пример:
countVowels('javascript'); // Ожидаемый результат: 3
countVowels('hello world'); // Ожидаемый результат: 3
 */
// function countVowels(str) {
//     const regex = /[aeiou]/gi;
//     const matches = str.match(regex);
//     return matches ? matches.length : 0;
// }
//
// console.log(countVowels('hello world'))

/*
Задача: Обратный порядок слов

Условие: Напишите функцию reverseWords, которая принимает строку и возвращает новую строку, в которой порядок слов обратный.
Пример:
reverseWords('Hello world'); // Ожидаемый результат: 'world Hello'
reverseWords('JavaScript is awesome'); // Ожидаемый результат
 */
// function reverseWords(str){
//     return str.split(' ').reverse().join(' ')
// }
//
// console.log(reverseWords('Hello world'))

/*
Задача: Обратный порядок слов в предложении
Условие: Напишите функцию reverseSentence, которая принимает строку, содержащую предложение, и возвращает новую строку, в которой порядок слов обратный.
Пример:
reverseSentence('Hello, how are you?'); // Ожидаемый результат: 'you? are how Hello,'
reverseSentence('JavaScript is awesome'); // Ожидаемый результат: 'awesome is JavaScript'

 */
// function reverseSentence(str){
//     return str.split(' ').reverse().join(' ')
// }
//
// console.log(reverseSentence('Hello, how are you?'))

/*
Задача: Подсчет букв в строке

Условие: Напишите функцию countLetters, которая принимает строку и возвращает объект, содержащий количество вхождений каждой буквы в строке (без учета регистра).
Пример:
countLetters('Hello'); // Ожидаемый результат: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }
countLetters('JavaScript'); // Ожидаемый результат: { 'j': 1, 'a': 2, 'v': 1, 's': 1, 'c': 1, 'r': 1, 'i': 1, 'p': 1, 't': 1 }

 */
let obj = {
    'j': 1,
    'a': 2,
    'v': 1,
    's': 1,
    'c': 1,
    'r': 1,
    'i': 1,
    'p': 1,
    't': 1
}
delete obj.i

function countLetters(s) {
    let res = {}
    for (let i = 0; i < s.length; i++) {
        const el = s[i].toLowerCase()
        if (res[el] !== undefined) {
            res[el] += 1
        } else {
            res[el] = 1
        }
    }
    return res
}

//console.log(countLetters('JavaScriptjjjj'))

/*
Задача: Сортировка массива чисел

Условие: Напишите функцию sortNumbers, которая принимает массив чисел и возвращает новый массив, содержащий числа из исходного массива в отсортированном порядке по возрастанию.
Пример:
sortNumbers([5, 3, 8, 1, 2]); // Ожидаемый результат: [1, 2, 3, 5, 8]
sortNumbers([10, -2, 0, 5, -7]); // Ожидаемый результат: [-7, -2, 0, 5, 10]

 */
// function sortNumbers(arr) {
//     return arr.sort((a, b) => a - b)
// }
//
// console.log(sortNumbers([10, -2, 0, 5, -7]))

/*
Задача: Проверка на повторяющиеся элементы

Условие: Напишите функцию hasDuplicates, которая принимает массив и возвращает true, если в массиве есть повторяющиеся элементы, и false в противном случае.
Пример:
hasDuplicates([1, 2, 3, 4, 5]); // Ожидаемый результат: false
hasDuplicates([1, 2, 3, 2, 4, 5]); // Ожидаемый результат: true
 */
function hasDuplicates(arr) {
    let num = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (num === arr[i]) {
            return true
        } else {
            return false
        }
    }
}

console.log(hasDuplicates([1, 2, 3, 8, 4, 5]))

/*
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

ucFirst("вася") == "Вася";
 */
function newStr(str) {
    return str[0].toUpperCase() + str.slice(1);
}

/*
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
Например:

alert( extractCurrencyValue('$120') === 120 ); // true
 */
function extractCurrencyValue(str) {
    let res = str.split('')
    return res.filter((el,index)=>el[index] !== el).join('')
}
// or  return +str.slice(1);
console.log(extractCurrencyValue('$120'))