// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         let res = args[0];
//         for (let i = 0; i < args.length; i++) {
//             if (args[i] < res) {
//                 res = args[i];
//             }
//         }
//         return res
//     }
// }
// console.log(SmallestIntegerFinder)

// function noSpace(x){
//     let res = x.split('').filter(el=>el !== ' ').join('')
//     return res
// }
// console.log(noSpace('ioio ioi opo'))

// let summation = function (num) {
//     let res = 0;
//     for (let i = 0; i < num; i++) {
//         // res = res + (i+1)
//         res = (1 + num) * num - 1
//         res = Math.round( res / 2)
//
//     }
//     return res
// }
// console.log(summation(8))



// function countSheeps(arrayOfSheep) {
//     let res = 0;
//     for (let i = 0; i < arrayOfSheep.length; i++) {
//         if (arrayOfSheep[i] === true) {
//             res++
//         }
//     }
//     return res
// }
//
//
// console.log(countSheeps( [true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]))


function converter (m) {
    let lt = 4.54609188
    let km = 1.609344
    let km_lt = (m*(km/lt))
    return Number(km_lt.toFixed(2))

}
/*
Напишите функцию, которая всегда возвращает5

Звучит легко, верно? Просто имейте в виду, что вы не можете использовать ни один из следующих символов:0123456789*+-/

Удачи :)

    assert.strictEqual(unusualFive(), 5);
 */
// function unusualFive() {
// const res=['a','b','v','g','d']
//     return res.length
// }
//
// console.log(unusualFive())

/*
Широкоротая лягушка особенно интересуется пищевыми привычками других существ.

Он просто не может перестать спрашивать существ, которых встречает, что они любят есть. Но затем он встречает аллигатора,
который просто ОБОЖАЕТ есть широкоротых лягушек!

Когда он встречает аллигатора, он делает крошечный рот.

Ваша цель в этой ката — создать полный mouth_sizeметод, этот метод принимает один аргумент animal, который соответствует
 животному, с которым столкнулась лягушка. Если это alligatorвозврат (без учета регистра), smallв противном случае return wide.
   assert.strictEqual(mouthSize("toucan"),"wide")
    assert.strictEqual(mouthSize("ant bear"),"wide")
    assert.strictEqual(mouthSize("alligator"),"small")
 */
// function mouthSize(animal) {
// if(animal.toLowerCase() === 'alligator'){
//     return 'small'
// }else{
//     return 'wide'
// }
// }
// или  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';

// console.log(mouthSize('ALLIGATOR'))