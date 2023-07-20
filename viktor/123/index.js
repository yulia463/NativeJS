const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        // к 14 задаче: friends: ["Alex", "Nick", "John", "Helen", "Ann"]
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Ann",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}















//-------------------------------------------------------------------------------------
let s = "!hellow !world!"
function removeExclamationMarks(s) {
    // return  s.split("").filter(el=>el !== "!").join("")
    // return s.replace(/!/gi,"")

}
console.log(removeExclamationMarks(s));

let arr = ["Keep", "Remove", "Keep", "Remove", "Keep"]
function removeEveryOther(arr){
    return arr.filter((el,index)=>index %2 ===0 )
}
// console.log( removeEveryOther(arr))

let str = "apple ban"
function addLength(str) {
return str.split(" ").map(el=>el + " "+ el.length)
}
console.log(addLength(str))

function gerAverage(masks){
    return Math.floor(masks.reduce((a,b)=>a+b ) /masks.length)
}
function multipleOfIndex(array){
    return array.filter((el,index)=>el%index ===0)
}
console.log(multipleOfIndex(array))

function arrayPlusArray(arr1,arr2){
    let sum=[...arr1,...arr2]
    return sum.reduce((a,b)=>a+b)
}