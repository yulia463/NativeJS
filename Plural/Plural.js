/*
Нам нужна простая функция, которая определяет, нужно ли множественное число или нет. Он должен принимать число и
возвращать true, если с этим числом следует использовать множественное число, или false, если нет. Это было бы полезно
при печати строки, такой как 5 minutes, 14 applesили 1 sun.

Вам нужно только побеспокоиться о правилах английской грамматики для этой ката, где все, что не в единственном числе
 (одно из чего-то), является множественным числом (не одно из чего-то).

Все значения будут положительными целыми числами, числами с плавающей запятой или нулем.

Test.assertEquals(plural(0), true, "Plural for 0");
Test.assertEquals(plural(0.5), true, "Plural for 0.5");
Test.assertEquals(plural(1), false, "Plural for 1");
Test.assertEquals(plural(100), true, "Plural for 100");
Test.assertEquals(plural(Infinity), true, "Plural for Infinity");
 */
// function plural(n) {
//     switch (true) {
//         case n===0:
//             return true;
//         case n===0.5:
//             return true;
//         case n===1:
//             return false;
//         case n===100:
//             return true;
//         case n===Infinity:
//             return true;
//         default:
//             return true;
//     }
// }
// или
//  return n !== 1;

// console.log(plural(1))