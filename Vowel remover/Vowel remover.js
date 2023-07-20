/*
Создайте функцию, вызываемую shortcutдля удаления строчных гласных ( a, e, i, o, u) в заданной строке.

Примеры
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
не беспокойтесь о заглавных гласных
y - не считается гласным для этой ката
  doTest('hello', 'hll');
    doTest('how are you today?', 'hw r y tdy?');
    doTest('complain', 'cmpln');
    doTest('never', 'nvr');
 */
function shortcut (string) {
    return string.replace(/[aeiou]/gi, '');
}

console.log(shortcut('hello'))