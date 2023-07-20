/*
Напишите функцию, которая принимает два параметра: i) строку (содержащую список слов) и ii) целое число (n). Функция
должна расположить список в алфавитном порядке на основе n-й буквы каждого слова.

Буквы следует сравнивать без учета регистра. Если обе буквы одинаковы, расположите их в обычном порядке (лексикографически),
 опять же, без учета регистра.

Пример:

function sortIt('bid, zag', 2) //=> 'zag, bid'
Длина всех слов, представленных в списке, будет >= n. Формат будет "х, х, х". Вместо этого в Haskell вы получите список Strings.
Test.assertEquals(sortIt('bill, bell, ball, bull', 2),'ball, bell, bill, bull' , 'Sort by the second letter')
 Test.assertEquals(sortIt('cat, dog, eel, bee', 3),'bee, dog, eel, cat' , 'Sort by the third letter')

 */
// решение не верное function sortIt(list, n) {
//     return list.split(', ')
//         .sort(function (a, b) {
//             let lastElementA = a[n-1];
//             let lastElementB = b[n-1];
//
//             if (lastElementA < lastElementB) {
//                 return -1;
//             }
//             if (lastElementA > lastElementB) {
//                 return 1;
//             }
//             return 0;
//
//         }).join(', ')
// }
// const sortIt = (words, n) =>
//     words
//         .split(", ")
//         .map(word => word.trim())
//         .sort((a, b) => {
//             const charA = a.charAt(n - 1).toLowerCase();
//             const charB = b.charAt(n - 1).toLowerCase();
//             return charA === charB ? a.toLowerCase().localeCompare(b.toLowerCase()) : charA.localeCompare(charB);
//         })
//         .join(", ");
// console.log(sortIt('cat, dog, eel, bee', 3))

