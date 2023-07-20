//let str = ‘string’
//let arr = [...str]

//let arr = str.split(‘’)
//let arrWithoutDoubles = [...new Set(arr)]
//[...str].map().sort()

/*
На каждую хорошую идею ката приходится немало плохих!

В этом ката вам нужно проверить предоставленный массив (x) на наличие хороших идей «хорошо» и плохих идей «плохо». Если
 есть одна или две хорошие идеи, верните «Опубликовать!», если их больше 2, верните «Чую серию!». Если хороших идей нет, как это часто бывает, верните «Fail!».
     assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
    assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!'),
 */
// function well(x){
// let res = x.filter(el=>el ==='good')
//     if(res.length===0){
//         return 'Fail!'
//     }
//     if(res.length ===1 || res.length===2){
//         return 'Publish!'
//     }
//     if(res.length >2){
//         return 'I smell a series!'
//     }
//     return res
// }
//console.log(well(["bad","bad","bad","bad","good","bad","bad","bad","bad","good","bad","good","bad","good"]))
/*
Вам даны два отсортированных массива, оба из которых содержат только целые числа. Ваша задача — найти способ объединить их в один, отсортированный по возрастанию. Завершите функцию mergeArrays(arr1, arr2), где arr1 и arr2 — исходные отсортированные массивы.

Вам не нужно беспокоиться о проверке, так как arr1 и arr2 должны быть массивами с 0 или более целыми числами. Если и arr1, и arr2 пусты, просто верните пустой массив.

Примечание: arr1 и arr2 могут быть отсортированы в разном порядке. Также arr1 и arr2 могут иметь одинаковые целые числа. Удалить дубликаты в возвращаемом результате.

Примеры (ввод -> вывод)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
assert.deepEqual(mergeArrays([1,2,3,4], [5,6,7,8]), [1,2,3,4,5,6,7,8], "Basic tests");
assert.deepEqual(mergeArrays([1,3,5,7,9], [10,8,6,4,2]), [1,2,3,4,5,6,7,8,9,10], "Basic tests");
assert.deepEqual(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests");


 */
function mergeArrays(arr1, arr2) {
    let con = arr1.concat(arr2)
    let res = [...new Set(con)]
    return res.sort((a, b) => a - b)

}

//console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))


function unique(arr) {
return [...new Set(arr)]
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log( unique(values) ); // Hare,Krishna,:-O

