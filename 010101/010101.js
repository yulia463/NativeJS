/*
напишите мне функцию stringy, которая принимает sizeи возвращает stringчередование '1s'и '0s'.

строка должна начинаться с 1.

строка с size6 должна возвращать : '101010'.

с size4 должно вернуться : '1010'.

с size12 должен вернуть : '101010101010'.

Размер всегда будет положительным и будет использовать только целые числа.

 Test.assertEquals(stringy(3)[0], '1',
 */
// function stringy(size) {
//     let str = ''
//     let b = true
//     for (let i = 0; i < size; i++) {
//         str += +b
//         b = !b
//     }
//     return str
// }
//
// console.log(stringy(21))


/*
Получив неотрицательное целое число n, напишите функцию to_binary/ ToBinary, которая возвращает это число в двоичном формате.

to_binary(1)  /* should return 1
to_binary(5)  /* should return 101
to_binary(11) /* should return 1011
Пример:

    toBinary(1)  /* should return 1
toBinary(5)  /* should return 101
toBinary(11) /* should return 1011
  assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);
 */
// function toBinary(n) {
//     if (n === 0) {
//         return '0';
//     }
//     let res = ''
//
//     while (n > 0) {
//         res = (n % 2) + res;
//         n = Math.floor(n / 2);
//     }
//
//     return parseInt(res);
// }
// console.log(toBinary(5))
//function toBinary(n){
//   return +n.toString(2);
// }
