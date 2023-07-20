/*
Вам дан массив с положительными числами и неотрицательным числом N. Нужно найти N-ю степень элемента в массиве с индексом N. Если N вне массива, то вернуть -1. Не забывайте, что первый элемент имеет индекс 0.

Давайте рассмотрим несколько примеров:

array = [1, 2, 3, 4] и N = 2, тогда результат будет 3^2 == 9;
array = [1, 2, 3] и N = 3, но N находится за пределами массива, поэтому результат равен -1.
    assert.strictEqual(index([1, 2, 3, 4],2),9);
    assert.strictEqual(index([1, 3, 10, 100],3),1000000);
    assert.strictEqual(index([1, 2],3),-1);
    assert.strictEqual(index([1,1,1,1,1,1,1,1,1,1], 9),1);
    assert.strictEqual(index([1,1,1,1,1,1,1,1,1,2], 9),512);
    assert.strictEqual(index([29,82,45,10], 3),1000);
    assert.strictEqual(index([6,31], 3),-1);
    assert.strictEqual(index([75,68,35,61,9,36,89,0,30], 10),-1);
 */
// function index(array, n) {
//
//     for (let i = 0; i < array.length; i++) {
//         if (n === i) {
//             return array[i] ** n
//         }
//     }
//     return -1
// }
//
// console.log(index([1, 2, 3, 4], 2))