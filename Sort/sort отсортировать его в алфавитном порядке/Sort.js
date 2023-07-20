/*
Вам будет предоставлен список строк. Вы должны sort отсортировать его в алфавитном порядке (с учетом регистра и на основе значений символов ASCII), а затем вернуть первое значение.

Возвращаемое значение должно быть строкой и иметь "***"между каждой из ее букв.

Вы не должны удалять или добавлять элементы из/в массив.
   assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
    assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');

 */
// function twoSort(s) {
//     return s.sort()[0].split('').join('***')
// }

// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))

/*
Учитывая строку слов (x), вам нужно вернуть массив слов, отсортированных в алфавитном порядке по последнему символу в каждом.

Если два слова имеют одинаковую последнюю букву, возвращаемый ими массив должен отображать их в том порядке, в котором они появились в данной строке.

Все входы будут действительными.
 assert.deepEqual(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
    assert.deepEqual(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
    assert.deepEqual(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);

 */
// function last(x){
// return x.split(' ').sort(function(a, b) {
//     var lastElementA = a[a.length - 1];
//     var lastElementB = b[b.length - 1];
//
//     if (lastElementA < lastElementB) {
//         return -1;
//     }
//     if (lastElementA > lastElementB) {
//         return 1;
//     }
//     return 0;
//
// })
//
// }

// console.log(last('man i need a taxi up to ubud'))
/*
С праздником, товарищи Code Warriors!
Теперь, Дашер! Теперь, Танцор! Теперь, Прэнсер и Виксен! Вперед, Комета! Вперед, Купидон! Вперед, Дондер и Блитцен! Это порядок, в котором Санта хотел своих оленей... верно? Что ты имеешь в виду, что он хочет, чтобы они расположились по фамилиям!? Похоже, нам нужна твоя помощь, Code Warrior!

Сортировать оленей Санты
Напишите функцию, которая принимает последовательность имен северных оленей и возвращает последовательность с именами северных оленей, отсортированными по их фамилиям.

Примечания:
Гарантируется, что каждая строка состоит из двух слов
В случае двух одинаковых фамилий сохраните первоначальный порядок
Примеры
Для этого ввода:

[
  "Dasher Tonoyan",
  "Dancer Moore",
  "Prancer Chua",
  "Vixen Hall",
  "Comet Karavani",
  "Cupid Foroutan",
  "Donder Jonker",
  "Blitzen Claus"
]
Вы должны вернуть этот вывод:

[
  "Prancer Chua",
  "Blitzen Claus",
  "Cupid Foroutan",
  "Vixen Hall",
  "Donder Jonker",
  "Comet Karavani",
  "Dancer Moore",
  "Dasher Tonoyan",
]
 */
// function sortReindeer(reindeerNames) {
//     return reindeerNames.sort(function(a, b) {
//         let fullNameA = a.split(" ")[1]
//         let fullNameB = b.split(" ")[1]
//         return fullNameA.localeCompare(fullNameB)
//
//     });
// }
//
// console.log(sortReindeer([
//     "Dasher Tonoyan",
//     "Dancer Moore",
//     "Prancer Chua",
//     "Vixen Hall",
//     "Comet Karavani",
//     "Cupid Foroutan",
//     "Donder Jonker",
//     "Blitzen Claus"
// ]))