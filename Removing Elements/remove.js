/*
Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

Пример:
["Keep", "Remove", "Keep", "Remove", "Keep", ...]-->["Keep", "Keep", "Keep", ...]

Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!

    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
    assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
 */
function removeEveryOther(arr) {

    return arr.filter((el, index) => index % 2 === 0)
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']))