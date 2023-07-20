const name1 = ["Bob", "Alex", "Donald"]

console.log(name1.sort())

const name2 = ["Donald", "aLEX", "Alex", "alex", "игорь", "Юрий"]

console.log(name2.sort())

console.log(name1)
console.log(name1.sort() === name1)

const numbers = [1000, 4, 22, 6780, -1]
console.log(numbers.sort())

const compareFunc = (a, b) => {
    // >0 - надо переставить
    // 0 =< порядок не меняем
    if (a > b) {
        return 999
    } else {
        return -10
    }
}
console.log(numbers.sort(compareFunc))

const compareFunc2 = (a, b) => a - b;

console.log(numbers.sort(compareFunc))
console.log(numbers.reverse())

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

const sortByName = (a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
    } else {
        return -1
    }
}
console.log(students.sort(sortByName))
console.log(students.sort((a, b) => a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.age - b.age))

const nums = [23, 45, 12, 11, 99, 34];

for (let J = 0; J < nums.length - 1; J++) {
    let isSorted = true;

    for (let i = 0; i < nums.length - 1 - J; i++) {
        if (nums[i] > nums[i + 1]) {
            isSorted = false;

            // let temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums [i + 1], nums[i]] = [nums[i], nums[i + 1]]
            //меняем значения местами
        }
    }
    if (isSorted) break
}
console.log(nums)







