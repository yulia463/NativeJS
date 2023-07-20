/*
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:
nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
 */
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         if (arr[i].toLowerCase() === arr[j].toLowerCase().reverse()) {
    //
    //         }
    //     }
    // }
    const superFunction = (arr) => {
        const dictionary = {};
        arr.forEach((el) => dictionary[[...el].sort().join("").toLowerCase()] = el);
        return dictionary;
    }
  

}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"



