let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    }, {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    }, {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    }, {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }];

//["bob","alex"]

const getNames = (array) => {
    const result = new Array() //[]
    const getName = obj => obj.name
    for (let i = 0; i < array.length; i++) {
        const temp = getName(array[i])
        result[i] = temp
    }
    return result
}
// const stNames = getNames(students)
// console.log(stNames === students) // false

const addCScots = (array) => {
    const result = new Array()
    const addScorseForStudent = (obj) => {
        const copy = {...obj} // new Object()
        copy.scores = obj.scores + 10
        return copy
    }
    for (let i = 0; i < array.length; i++) {
        const temp = addScorseForStudent(array[i])
        result[i] = temp
    }
    return result
}


const selfMadeMape = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        const temp = func(array[i])
        result[i] = temp
    }
    return result

}

// console.log(selfMadeMape(students, getNames))
// console.log(students.map(getNames))
// console.log(selfMadeMape(students))
// karyna kryshneva

const selfMadeFilter = (array, func) => {
    const res = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            res.push(array[i])
        }

        const temp = func(array[i])
        res[i] = temp
    }
    return res
}

console.log(selfMadeFilter(students, st => st.scores >= 100))
console.log(students.filter(st => st.scores >= 100))

const selfMadeFind = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            return array[i]
        }
    }
}
console.log(selfMadeFind(students, st => st.name === "Alex"))
console.log(students.find(st => st.name === "Alex"))

const selfMadeSlice = (array, start, end) => {
    const result = []
    const endIt = end
        ? end < array.length
            ? end : array.length
        : array.length

    for (let i = start; i < endIt; i++) {
        result.push(array[i])
    }

    return result
}
console.log(students.slice(0, 3))
console.log(selfMadeSlice(students, 0, 3))
console.log(selfMadeSlice(students, 0))
console.log(selfMadeSlice(students, 0,6))
console.log(Array.prototype)
console.dir(Array)

Array.prototype.hi =function (){
    alert("hi")
}

const arr=[]
const arr1=[]
arr.hi()

Array.prototype.selfMadeMap=selfMadeMap
arr.selfMadeMap()
arr1.selfMadeMap()

console.log(arr.__proto__ === Array.prototype)

console.log(students.selfMadeMap(getNames))