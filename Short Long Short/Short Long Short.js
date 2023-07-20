/*
Учитывая 2 строки aи b, вернуть строку формы короткая + длинная + короткая, с более короткой строкой снаружи и более длинной строкой внутри. Строки не будут одинаковой длины, но могут быть пустыми ( zerolength ).

Подсказка для пользователей R:

Длина строки не всегда совпадает с количеством символов
Например: (Ввод1, Ввод2) --> вывод

("1", "22") --> "1221"
("22", "1") --> "1221"
    Test.assertEquals(solution('45', '1'), '1451');
    Test.assertEquals(solution('13', '200'), '1320013');
    Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
    Test.assertEquals(solution('U', 'False'), 'UFalseU');
 */
// function solution(a, b) {
//     let res = ''
//     if (a.length > b.length) {
//      return  b + a + b
//     }
//     if (a.length < b.length) {
//      return  a + b + a
//     }
//
//     return res
// }
//
// console.log(solution('45', '1'))