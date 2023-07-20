// типы данных
// примитивы
// string, number, boolean,null.indefined,Nan,Infinity,Symbol,BigInt
// объекты :
// function,array,object
//


// 1. Более сдлжная структура
// 2. Имеют свойства и методы
// 3. Ссылочный тип данных


// const  a ="type of a"
// console.log(Number.isNaN(a))
//
// const b=[]
// console.log(Array.isArray(b))

// запросы с сервака ? как приходят?

// React -

const a = [1, 2, 3, 4] // храниться ссылка на ячейку памяти , в которой лежит объект
a.push(5) // мутация массива. Изменение

console.log(a)
//
// const b = [1,2,3,4]// переносим содержимое исходного массива или делаем копию
// b.push(5)

const b = a
b.push(5)

function logger(prev, current) {
    if (prev !== current) {
        console.log(current)
    } else {
        console.error("Всё пропало!")
    }
}

logger(a, b)

const students = [ // предедущие состояние
    {
        name: "Bob",
        age: 34,
    },
    {
        name: "Alex",
        age: 32,
    },
]
//CRUD
// add student("Create")

const newStudent = {
    name: "John",
    age: 34
}
// const copyStudent = [students[0],students[1],newStudent]// не правильный синтаксис
const copyStudent = [...students, newStudent] // текущее сострояние

//update Bob name refactor to Yulia ("Update")

//map() всегда возвращает новый массив New Array

// тернарник
const copy2Student = copyStudent.map(st => st.name === "Bob" ? {...st, name: "Yulia"} : st)
// или с помощью if else
const copy3st = copyStudent.map(st => {
    if (st.name === "Bob") {
        return {...st, name: "Yulia"}
    } else {
        return st
    }
})

//delete Yulia
const copy4st = copy2Student.filter(st => st.name !== "Yulia")