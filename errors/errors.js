/*
Незавершенный цикл — исправление ошибки № 1
О нет, Тимми создал бесконечный цикл! Помогите Тимми найти и исправить ошибку в его незавершенном цикле for!

    assert.deepEqual(createArray(1),[1]);
    assert.deepEqual(createArray(2),[1,2]);
    assert.deepEqual(createArray(3),[1,2,3]);
    assert.deepEqual(createArray(4),[1,2,3,4]);
    assert.deepEqual(createArray(5),[1,2,3,4,5]);
 */
// function createArray(number){
//     let newArray = [];
//
//     for(let counter = 1; counter <= number;counter++){
//         newArray.push(counter);
//     }
//
//     return newArray;
// }
//
// console.log(createArray(2))


// let a = []
// console.log(typeof (typeof []))
/*
checkAliveСоздавая игру, ваш партнер, Грег, решил создать функцию / CheckAlive/ для проверки того, жив ли пользователь check_alive. К сожалению, Грег допустил несколько ошибок при создании функции.

checkAlive// должно возвращать true, если здоровье игрока больше 0, или false, если оно равно 0 или ниже CheckAlive.check_alive

Функция получает один параметр health, который всегда будет целым числом от -10 до 10.
    Test.assertEquals(checkAlive(5), true)
    Test.assertEquals(checkAlive(0), false)
    function checkAlive (health) {
  if () {
    health < 0
    return false
  } else () {
    return true
  }
}
 */


// function checkAlive (health) {
//     if (health <= 0) {
//         return false
//     }
//     return true
// }
//
// console.log(checkAlive(0))
/*
Я создал эту функцию, чтобы добавить пять к любому переданному ей числу и вернуть новое значение. Он не выдает никаких
ошибок, но возвращает неправильный номер.

Можете ли вы помочь мне исправить функцию?
    Test.assertEquals(addFive(5), 10)
    Test.assertEquals(addFive(0), 5)
    Test.assertEquals(addFive(-5), 0)
    function addFive(num) {
  var total = num + 5
  return num
}
 */
// function addFive(num) {
//     var total = num + 5
//     return total
// }
//
// console.log(addFive(5))