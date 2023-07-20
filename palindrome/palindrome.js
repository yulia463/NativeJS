/*
Напишите функцию, которая проверяет, является ли заданная строка (без учета регистра) палиндромом . Палиндром — это
 слово, число, фраза или другая последовательность символов, которая читается так же, как и вперед, и назад, например,
  мадам или гоночная машина, дата и время 21/12/33 12:21 и предложение: «Человек, план, канал – Панама».
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () => assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () => assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
 */
// function isPalindrome(x) {
//     let res = x.toLowerCase().split('').reverse().join('')
//     return res === x.toLowerCase()
// }
//
// console.log(isPalindrome('Madam'))
