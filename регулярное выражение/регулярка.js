/*
Задача: Подсчет гласных
Условие: Напишите функцию countVowels, которая принимает строку и возвращает количество гласных букв в этой строке (a, e, i, o, u, y - в нижнем регистре).
Пример:
countVowels('javascript'); // Ожидаемый результат: 3
countVowels('hello world'); // Ожидаемый результат: 3
 */
function countVowels(s) {
    let res = s.split('')

    return res
}

console.log(countVowels('hello world'))

function countVowels(str) {
    // Используем регулярное выражение для поиска гласных букв (a, e, i, o, u) независимо от регистра
    const regex = /[aeiou]/gi;

    // Используем метод match() для получения массива совпадений
    const matches = str.match(regex);

    // Возвращаем количество совпадений (гласных букв)
    return matches ? matches.length : 0;
}

// Пример использования
const str = "Hello, World!";
const vowelCount = countVowels(str);
console.log("Количество гласных букв: " + vowelCount);

