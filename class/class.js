/*
Создайте класс Ball. Объекты мяча должны принимать один аргумент для «типа мяча» при создании экземпляра.
Если аргументы не указаны, объекты мяча должны создаваться с «типом мяча» «обычный».

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
Test.assertEquals(new Ball().ballType, "regular");
Test.assertEquals(new Ball("super").ballType, "super");
 */
class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType
    }

};
const ball = new Ball()
const ball2 = new Ball("super")
console.log(ball)
console.log(ball2)