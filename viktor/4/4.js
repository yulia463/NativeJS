const todoListID1="12345-jhgh"
const todoListID2="1255345-jhgh"

const todoList = [
    {
        id: todoListID1,
        title: "What to learn",
        filter: "all",

    },
    {
        id: todoListID2,
        title: "What to buy",
        filter: "all",

    }
]
const getKey =() => "UserNmae"
const tasks = {
    [todoListID1]: [
        {id: 1, title: "HTML", isDone: false},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "JS", isDone: false}
    ],
    [todoListID2]: [
        {id: 4, title: "Bread", isDone: false},
        {id: 5, title: "Milk", isDone: false},
        {id: 6, title: "Chicken", isDone: false}
    ]
}

// console.log(tasks[todoList[0].title].filter(t=>t.id != 1))
console.log(tasks[todoList[0].id][1].title)