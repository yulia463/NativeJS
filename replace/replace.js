/*
Программное обеспечение для распознавания символов широко используется для оцифровки печатных текстов. Таким образом, тексты можно редактировать, искать и сохранять на компьютере.

Когда документы (особенно довольно старые, написанные на пишущей машинке) оцифровываются, программы распознавания символов часто допускают ошибки.

Ваша задача - исправить ошибки в оцифрованном тексте. Вам нужно только исправить следующие ошибки:

S неверно истолковывается как5
Oневерно истолковывается как0
Iневерно истолковывается как1
Тестовые случаи содержат числа только по ошибке.

    assert.strictEqual(correct("L0ND0N"),"LONDON");
    assert.strictEqual(correct("DUBL1N"),"DUBLIN");
    assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
    assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
    assert.strictEqual(correct("PAR15"),"PARIS");
 */
// function correct(s) {
//     return s.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I')
// }
//
// console.log(correct('LåndønæS5'))