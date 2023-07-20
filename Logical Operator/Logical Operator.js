/*
В некоторых языках сценариев, таких как PHP, существует логический оператор (например &&, ||, and, or, и т. д.), называемый
 «Исключающее ИЛИ» (отсюда и название этого Ката). Исключающее или оценивает два логических значения. Затем он возвращает
  true, если ровно одно из двух выражений истинно , falseиначе. Например:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Задача
Поскольку мы не можем определить ключевые слова в Javascript (ну, по крайней мере, я не знаю, как это сделать), ваша
задача состоит в том, чтобы определить функцию, xor(a, b)где aи bявляются двумя вычисляемыми выражениями. Ваша xor функция
должна иметь поведение, описанное выше, возвращая значение, trueесли только одно из двух выражений оценивается как true ,
 false в противном случае.
  assert.strictEqual(xor(false, false), false, "false xor false");
    assert.strictEqual(xor(true, false), true, "true xor false");
    assert.strictEqual(xor(false, true), true, "false xor true");
    assert.strictEqual(xor(true, true), false, "true xor true");
    assert.notStrictEqual(xor(true, true), true, "true xor true: 'xor' is NOT identical to 'or'");

 */
// function xor(a, b) {
//
//     if (a === false && b === false) {
//         return false
//     }
//     if (a === true && b === false) {
//         return true
//     }
//     if (a === false && b === true) {
//         return true
//     }
//     if (a === true && b === true) {
//         return false
//     }
//
// }
// function xor1(a, b) {
//     switch (true) {
//         case a === false && b === false:
//             return false;
//         case a === true && b === false:
//             return  true;
//         case a === false && b === true:
//             return true;
//         default:
//             return false;
//     }
// }
//
// console.log(xor(true, false))
// console.log(xor1(true, false))