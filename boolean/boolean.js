/*
В этом Ката мы передаем число (n) в функцию.

Ваш код определит, является ли переданное число четным (или нет).

Функция должна возвращать либо истину, либо ложь.

Числа могут быть положительными или отрицательными, целыми числами или числами с плавающей запятой.

Поплавки с десятичной частью, отличной от нуля, считаются НЕчетными для этой ката.

  assert.strictEqual(testEven(0), true, "testEven for 0");
    assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
    assert.strictEqual(testEven(1), false, "testEven for 1");
    assert.strictEqual(testEven(2), true, "testEven for 2");
    assert.strictEqual(testEven(-4), true, "testEven for 2");
 */
// function testEven(n) {
//     return n % 2 === 0
// }
//
// console.log(testEven(9))