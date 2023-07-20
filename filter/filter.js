/*
Напишите функцию, которая принимает список строк в качестве аргумента и возвращает отфильтрованный список, содержащий те же элементы, но с удаленными «гусями».

Гуси — это любые строки в следующем массиве, который предварительно заполнен в вашем решении:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
Например, если этот массив был передан в качестве аргумента:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Ваша функция вернет следующий массив:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
Элементы в возвращаемом массиве должны быть в том же порядке, что и в исходном массиве, переданном вашей функции, хотя и с удаленными «гусями». Обратите внимание, что все строки будут в том же регистре, что и предоставленные, а некоторые элементы могут повторяться.

 Test.assertDeepEquals(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]),
                                   ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);
    Test.assertDeepEquals(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]),
                                      ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);
    Test.assertDeepEquals(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]),[]);

 */
function gooseFilter(birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(el => !geese.includes(el))

}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))