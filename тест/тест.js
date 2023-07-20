// var maxNum = [5, -1, 40, 355, 17, 3];
//
// for (var i = 0; i < maxNum.length; i++) {
//     if(maxNum[i] > maxNum[0]){
//         maxNum[0] = maxNum[i];
//     }
//
// }
// alert(maxNum[0]);


const obj = {
    name: "John",
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};

function greet() {
    console.log(`Hello, ${this}!`);
}

const Map = (arr, cb) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        res.push(cb(arr[i]))
    }
    return res
}


// console.log('Start');
// setTimeout(() => {
//     console.log('Timeout');
// }, 0);
// Promise.resolve().then(() => {
//     console.log('Promise');
// });
// console.log('End');


// сделать объект
// let str = new String('')
// console.log(typeof str)

let str = new String('')
console.log(typeof str)
console.log(Object.is(str))

//----------------------------------------------

// const bla = () => {}
// console.log(bla())

//----------------------------------------------

// class Cat {
//   blala = 4
//   constructor() {
//     return this
//   }
// }

// const murka = new Cat()
// console.log(murka)

//----------------------------------------------

function foo () {
}

console.log(foo(1,2))

//----------------------------------------------
let isOpen = true
let promise = new Promise((res, rej) => {
    if (isOpen) {
        res()
    } else {
        rej()
    }

});

promise.then((res) => {
    console.log('Юля')
    res()
}).catch(() => {
    console.log("Илья")

})

//----------------------------------------------

// Hello world => helloWorld
// const toCamelCase = (str) => {

// }

// console.log(toCamelCase('Hello world'))

const toCamelCase = (str) => {
    let words = str.split(' ')
    let firstWord = words[0].toLowerCase()
    let otherWords = words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('')
    return `${firstWord}${otherWords}`
}

//console.log(toCamelCase('Hello world'))
//----------------------------------------------

// //['a', 'c', 'b', 'b', 'a',] => ['a', 'b', 'c']
// // ['2', '113', '1', '8', '8', '12', '111'] => ['1', '2', '8', '12', '111', '113']
// const unic = (arr) => {

// }

// console.log(unic(['a', 'c', 'b', 'b', 'a']))
// console.log(unic(['2', '3', '113', '1', '7', '8', '8', '12', '111']))

const unic = (arr) => {
    return [...new Set(arr)].sort((a, b) => a - b)
}
//console.log(unic(['2', '3', '113', '1', '7', '8', '8', '12', '111']))
//console.log(unic(['a', 'c', 'b', 'b', 'a']))
//----------------------------------------------

// const add = x => y => x + y
// const mul = x => y => x * y

// const pipe =

// const pipedFoo = pipe(add(2), mul(2))

// console.log(pipedFoo(4)) // (4 + 2) * 2 = 12



