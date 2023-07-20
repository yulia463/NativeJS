/*
Ваша функция принимает два аргумента:
текущий возраст отца (лет)
текущий возраст его сына (лет)
Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
 Ответ всегда больше или равен 0, независимо от того, был он в прошлом или в будущем.
    assert.strictEqual(twiceAsOld(36,7) , 22);
    assert.strictEqual(twiceAsOld(55,30) , 5);
    assert.strictEqual(twiceAsOld(42,21) , 0);
    assert.strictEqual(twiceAsOld(22,1) , 20);
    assert.strictEqual(twiceAsOld(29,0) , 29);
 */
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     if (sonYearsOld === 0) {
//         return dadYearsOld
//     }
//     let res = dadYearsOld - (sonYearsOld * 2)
//     if (res < 0) {
//        res= res * (-1)
//     }
//     return res
// }
//
// console.log(twiceAsOld(55, 30))

/*
Вы ведете своего сына в лес, чтобы увидеть обезьян. Вы знаете, что там есть определенное число (n), но ваш сын слишком
 мал, чтобы просто оценить полное число, ему приходится начинать считать их с 1.
Как хороший родитель, вы будете сидеть и считать с ним. Учитывая число (n), заполните массив всеми числами до этого
 числа включительно, но исключая ноль.

Например (ввод --> вывод):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
   assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
    assert.deepEqual((monkeyCount(3)), [1, 2, 3]);
    assert.deepEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
 */
// function bibizjanCount(n) {
//     let res = []
//
//     for (let i = 1; i <= n; i++) {
//         res.push(i)
//     }
//     return res
//
// }
//
// console.log(bibizjanCount(50))

/*
Эта функция должна проверять, является ли factorфактор фактором base.

Возврат true, если это фактор или falseесли это не так.

О факторах
Факторы — это числа, которые вы можете перемножить, чтобы получить другое число.

2 и 3 являются делителями 6, потому что:2 * 3 = 6

Вы можете найти множитель, разделив числа. Если остаток равен 0, то число является множителем.
Вы можете использовать оператор мода ( %) на большинстве языков для проверки остатка
Например, 2 не является коэффициентом 7, потому что:7 % 2 = 1
Примечание: baseявляется неотрицательным числом, factorявляется положительным числом.
    Test.assertEquals(checkForFactor(10,2), true)
    Test.assertEquals(checkForFactor(63,7), true)
    Test.assertEquals(checkForFactor(2450,5), true)
    Test.assertEquals(checkForFactor(24612,3), true)
 */

// function checkForFactor(base, factor) {
//     if (base % factor === 0) {
//         return true
//     }
//     return false
// }
//
// console.log(checkForFactor(63, 7))

/*
Алекс только что получил новый хулахуп, он ему нравится, но он расстроен, потому что его младший брат лучше него.

Напишите программу, в которой Алекс может ввести (n), сколько раз обруч обойдётся, и она вернёт ему ободряющее сообщение :)

Если Алекс набирает 10 и более обручей, возвращает строку «Отлично, теперь переходим к трюкам».
Если он не наберет 10 обручей, верните строку «Продолжай, пока не наберешь».
Test.assertEquals(hoopCount(3),"Keep at it until you get it" )
Test.assertEquals(hoopCount(11),"Great, now move on to tricks" )
 */
// function hoopCount(n) {
//     if (n >= 10) {
//         return "Great, now move on to tricks"
//     }
//     return "Keep at it until you get it"
// }
//
// console.log(hoopCount(11))
/*
Функция не возвращает правильные значения. Вы можете понять, почему?

Пример ( ввод --> вывод ):

3 --> "Earth"
Test.assertEquals(getPlanetName(2), 'Venus');
Test.assertEquals(getPlanetName(5), 'Jupiter');
Test.assertEquals(getPlanetName(3), 'Earth');
 */
// function getPlanetName(id){
//     var name;
//     switch(id){
//         case 1:
//           return   name = 'Mercury'
//         case 2:
//             return  name = 'Venus'
//         case 3:
//             return   name = 'Earth'
//         case 4:
//             return  name = 'Mars'
//         case 5:
//             return  name = 'Jupiter'
//         case 6:
//             return  name = 'Saturn'
//         case 7:
//             return   name = 'Uranus'
//         case 8:
//             return  name = 'Neptune'
//     }
//
//     return name;
// }

/*
Боб работает водителем автобуса. Тем не менее, он стал чрезвычайно популярен среди жителей города. С таким количеством
 пассажиров, желающих сесть в его автобус, ему иногда приходится сталкиваться с проблемой нехватки места в автобусе!
  Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он разместить всех пассажиров.

Обзор задачи:
Вам нужно написать функцию, которая принимает три параметра:

cap это количество человек, которое может вместить автобус, не считая водителя.
on это количество людей в автобусе без учета водителя.
wait это количество людей, ожидающих посадки в автобус, не считая водителя.
Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.

Примеры использования:
cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
 */
// function enough(cap, on, wait) {
//     var total_passengers = on + wait;
//     if (total_passengers <= cap) {
//         return 0;
//     }
//     else {
//         return total_passengers - cap;
//     }
// }
//
// console.log(enough(71, 42, 30))
/*
Отладка функции sayHello
Звездолет «Энтерпрайз» столкнулся с проблемой при создании программы для приветствия всех, кто поднимается на борт.
 Ваша задача — исправить код и заставить программу снова работать!

Пример вывода:
Hello, Mr. Spock
  assert.strictEqual(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
    assert.strictEqual(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
    assert.strictEqual(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
    assert.strictEqual(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
 */
// function sayHello(name) {
//     return `Hello, ${name}`
// }
// console.log(sayHello('Captain Kirk'))

/*
Создайте функцию, которая принимает строку и один символ и возвращает целое число, соответствующее количеству вхождений
второго аргумента в первом.

Если вхождений не найдено, должно быть возвращено число 0.

("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Примечания
Первый аргумент может быть пустой строкой
В языках без отдельного символьного типа данных вторым аргументом будет строка длины 1.
 */
// function strCount(str, letter) {
//      let count = 0
//     let world = str.split('')
//     for (let i = 0; i <= str.length; i++) {
//      if( world[i] === letter){
//           count++
//      }
//     }
//     return count
// }
//
// console.log(strCount("Hello", 'o'))

/*
Строка в верхнем регистре?
Задача
Создайте метод, чтобы увидеть, является ли строка ВСЕМИ ЗАГЛАВНЫМИ.

Примеры (ввод -> вывод)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True
В этом Ката говорится, что строка написана ВСЕ ЗАГЛАВНЫМИ буквами, если она не содержит строчных букв, поэтому любая
строка, вообще не содержащая букв, тривиально считается написанной ВСЕМИ ЗАГЛАВНЫМИ буквами.
 */
// String.prototype.isUpperCase = function () {
//
//     return this.toString() === this.toUpperCase();
// }
// console.log(String('hello I AM DONALD'))

/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.

assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
    assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
    assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
    assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    assert.strictEqual("12345".toAlternatingCase(), "12345");
    assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
 */
// String.prototype.toAlternatingCase = function () {
//     let str=''
//    for(a of this){
//     if( a.toUpperCase() === a){
//         str += a.toLowerCase()
//     }else{
//         str += a.toUpperCase()
//     }
//
//    }
//     return str
//
// }
// console.log("1a2b3Ac4d5e".toAlternatingCase())

/*
Функция перемещения терминала
В этой игре герой движется слева направо. Игрок бросает кубик и два раза перемещается на число клеток, указанное
кубиком .

Создайте функцию для терминальной игры, которая берет текущую позицию героя и бросок (1-6) и возвращает новую позицию.

Пример:
move(3, 6) should equal 15
    Test.assertEquals(move(0, 4), 8);
    Test.assertEquals(move(3, 6), 15);
    Test.assertEquals(move(2, 5), 12);
 */
// function move(position, roll) {
//     return position + (roll*2)
// }
//
// console.log(move(3, 6))

/*
Создайте функцию, которая принимает два аргумента (зарплата, премия). Заработная плата будет целым числом, а бонус — логическим.
Если премия верна, зарплата должна быть умножена на 10. Если премия ложна, толстяк не заработал достаточно денег и
 должен получать только свою заявленную зарплату.
Возвращает общую цифру, которую получит человек, в виде строки с префиксом «£» (= "\u00A3", JS, Go, Java, Scala и Julia),
 «$» (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell). , и Lua) или "¥" (Rust).
     assert.strictEqual(bonusTime(10000, true), '£100000');
    assert.strictEqual(bonusTime(25000, true), '£250000');
    assert.strictEqual(bonusTime(10000, false), '£10000');
    assert.strictEqual(bonusTime(60000, false), '£60000');
    assert.strictEqual(bonusTime(2, true), '£20');
    assert.strictEqual(bonusTime(78, false), '£78');
    assert.strictEqual(bonusTime(67890, true), '£678900');
 */
// function bonusTime(salary, bonus) {
//     if (bonus){
//         return `£${salary*10}`
//     }
//     return `£${salary}`
//
// }
//
// console.log(bonusTime(10000, true))

/*
У меня есть кошка и собака.

Я получил их одновременно с котенком/щенком. Это было humanYearsмного лет назад.
Теперь верните их соответствующие возрасты как [ humanYears, catYears, dogYears]
ПРИМЕЧАНИЯ:

HumanYears >= 1
HumanYears - только целые числа
Кошачьи годы
15кошачьи годы для первого года
+9кошачьи годы на второй год
+4кошачьи годы за каждый последующий год
Собачьи годы
15собачьи годы за первый год
+9собачьи годы на второй год
+5собачьи годы за каждый последующий год
(humanYearsCatYearsDogYears(1), [1,15,15]);
 */
// var humanYearsCatYearsDogYears = function (humanYears) {
//     // Your code here!
//     let arr = [1, 15, 15];
//     let arr2 = [2, 24, 24];
//     if (humanYears === 1) {
//         return arr
//     }
//     if (humanYears === 2) {
//         return arr2
//     }
//     if (humanYears > 2) {
//         arr2[0] += humanYears - 2
//         arr2[1] += (humanYears - 2) * 4
//         arr2[2] += (humanYears - 2) * 5
//         return arr2
//     }
// }
//
// console.log(humanYearsCatYearsDogYears(3))

/*
Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой строке соответствует "("тому, если
 этот символ появляется только один раз в исходной строке или ")"если этот символ появляется в исходной строке более
  одного раза. Игнорировать заглавные буквы при определении, является ли символ дубликатом.

Примеры
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Примечания
Сообщения об утверждениях могут быть неясными в отношении того, что они отображают на некоторых языках. Если вы читаете "...It Should encode XXX", "XXX"это ожидаемый результат, а не ввод!
  assert.strictEqual(duplicateEncode("din"),"(((");
    assert.strictEqual(duplicateEncode("recede"),"()()()");
    assert.strictEqual(duplicateEncode("Success"),")())())","should ignore case");
    assert.strictEqual(duplicateEncode("(( @"),"))((");
 */
// function duplicateEncode(word) {
//     let res = word.toLowerCase().split('')
//     let str = ''
//     for (let i = 0; i < word.length; i++) {
//         if (res.indexOf(res[i]) === res.lastIndexOf(res[i])) {
//             str += '('
//         }else {
//             str += ')'
//         }
//     }
// return str
//
// }
//
// console.log(duplicateEncode("Success"))

/*
Вдохновившись командой разработчиков Vooza, напишите функцию, которая

принимает имя программиста и
возвращает количество световых мечей, принадлежащих этому человеку.
Кстати, единственный человек, у которого есть световые мечи, это Зак. У него 18 световых мечей, что является огромным количеством световых мечей. Кто-то еще владеет 0.

Примечание : ваша функция должна иметь параметр по умолчанию.

Например ( Ввод --> Вывод ):

"anyone else" --> 0
"Zach" --> 18
    assert.strictEqual( howManyLightsabersDoYouOwn(), 0 )
    assert.strictEqual( howManyLightsabersDoYouOwn("Adam"), 0 )
    assert.strictEqual( howManyLightsabersDoYouOwn("Zach"), 18 )
 */
// function howManyLightsabersDoYouOwn(name) {
//     return name === 'Zach' ? 18 : 0
// }

/*
В JavaScript ваш код выполняется в функции, давайте шаг за шагом завершим вашу первую функцию JS.

Посмотрите на этот пример:

      --------keyword "function"
      |       ----your function name
      |       |    ---if needed, some arguments will appear in parentheses
      |       |    |
    function myfunc(){  ---------your function code will starting with "{"
      //you should type your code here
    }----------------------------ending with "}"
Если мы хотим напечатать что-то на экране, может быть, мы можем использовать Document.write()в Интернете или использовать alert()всплывающее сообщение, но Codewars не поддерживает эти методы, мы должны использовать их console.log()в вашей функции. см. этот пример:

function printWordToScreen(){
  var somewords="This is an example."
  console.log(somewords)
}
Если мы запустим эту функцию, This is an example.будет видно на экране. Как видите, console.log()это полезный метод. Вы будете использовать его много!

Задача
Пожалуйста, обратитесь к двум приведенным выше примерам и напишите свою первую функцию JS.
миссия 1:
используйте ключевое слово functionдля определения вашей функции, имя функции должно быть helloWorld(не забудьте () and {})
миссия 2:
используйте ключевое слово var(или letили const) для определения переменной str, значение strдолжно быть строкой: "Hello World!"(не забудьте =).
миссия 3:
введите console.log()в следующей строке (не забудьте поставить strв круглых скобках).
Когда вы закончите работу, нажмите «Выполнить тесты», чтобы проверить, правильно ли работает ваш код.
В конце нажмите «Отправить», чтобы отправить свой код для прохождения этого ката.
    assert.isFunction(helloWorld, "function helloWorld is not defined")

 */
// function helloWorld() {
//     var str = "Hello World!"
//     console.log(str)
// }
//

/*
Создайте вызываемую функцию _if, которая принимает 3 аргумента: значение boolи 2 функции (которые не принимают никаких параметров): func1иfunc2

Когда boolэто правда, func1следует вызывать, в противном случае вызывать func2.

Пример:
_if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
  const unexpectedTrue  = () => assert.fail("'true' function unexpectedly called");
  const unexpectedFalse = () => assert.fail("'false' function unexpectedly called");
 */
// function _if(bool, func1, func2) {
//     if(bool){
//         return func1()
//     }else{
//       return func2()
//     }
//
// }
//console.log(_if(true,"True","false"))