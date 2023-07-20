/*
Напишите метод, который будет получать массив целых чисел в качестве параметра и обрабатывать каждое число из этого массива.

Вернуть новый массив с обработкой каждого числа входного массива следующим образом:

Если число имеет целый квадратный корень, возьмите его, иначе возведите число в квадрат.

Пример
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Примечания
Входной массив всегда будет содержать только положительные числа и никогда не будет пустым или нулевым.
   input = [ 1, 2, 3, 4, 5, 6 ];
    expected = [ 1, 4, 9, 2, 25, 36 ];
 */
// function squareOrSquareRoot(array) {
//     return array.map(el => {
//         const sqrt = Math.sqrt(el)
//         if (sqrt % 1 === 0) {
//             return sqrt
//         }
//         return el * el
//     })
// }
//console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]))


//Math.pow(n, power)
//Возвращает число n, возведённое в степень power

//alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024
//Используйте округления
//Math.floor, Math.ceil, Math.trunc, Math.round // или num.toFixed(precision).
//   Помните, что при работе с дробями происходит потеря точности.


function squareDigits(num) {
    let res = ''
    let str = String(num)
    for (let i = 0; i < str.length; i++) {
        let kv = Number(str[i]) ** 2
        res += String(kv)
    }

    return +res
}

console.log(squareDigits(3212))


