//
// if(array?.length === 0 ){
//     return 0
// }

/*
Напишите функцию bmi, которая вычисляет индекс массы тела (bmi = вес / рост 2 ).
если ИМТ <= 18,5, вернуть "Недостаточный вес"
если ИМТ <= 25,0, вернуть «Нормальный»
если ИМТ <= 30,0 вернуть "Избыточный вес"
если ИМТ > 30, верните «Ожирение».
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.

 */
//  var min = function(list){
//      let res = list[0]
//      for(let i=0;i<list.length;i++){
//          if(list[i] < res  ){
//              res = list[i]
//          }
//
//      }
//      return res;
//  }
//
//  var max = function(list){
//
//      let res = list[0]
//      for(let i=0;i<list.length;i++){
//          if(list[i] > res  ){
//              res = list[i]
//          }
//
//      }
//      return res;
//  }
// console.log(min([-10,212,45345,2132,88,1,-98765]))
// console.log(max([54,11,-56786,1234,9,-1]))
//
// function sumMix(x) {
//
//     return x.map(el=>Number(el)).reduce((el,acc)=>el+acc)
// }
//
// console.log(sumMix([9, 3, '7', '3']))

/* Сумма без наибольшего и наименьшего числа

Суммируйте все числа заданного массива (cq. list), кроме самого высокого и самого низкого элемента (по значению, а не по индексу!).

Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре, даже если их несколько с одинаковым значением.

Помните о проверке ввода.

Пример
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Проверка ввода
Если вместо массива задано пустое значение ( null, None, и т.д.), или данный массив является пустым списком или списком,
 состоящим только из элементов, вернуть .Nothing10
 assert.strictEqual( sumArray(null)                     , 0 );
  assert.strictEqual( sumArray([ ])                      , 0 );
  assert.strictEqual( sumArray([ 3 ])                    , 0 );
  assert.strictEqual( sumArray([ 3, 5 ])                 , 0 );
  assert.strictEqual( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
  assert.strictEqual( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
  assert.strictEqual( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
  assert.strictEqual( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
 */


// function sumArray(array) {
//     let min = array[0]
//     let max = array[0]
//
//     if (array === null || array.length <= 2) {
//         return 0
//     }
//
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i]
//         }
//         if (array[i] > max) {
//             max = array[i]
//         }
//     }
//
//     return  array.filter(el => el !== max && el !== min).reduce((el, acc) => el + acc,0)
// }
// function sumArray(array) {
//
//
//     return  array.sort((a,b)=>a-b).slice(1,array.length -1).reduce((el,acc)=>el+acc)
// }
// console.log(sumArray([6, 2, 1, 8, 10]))

// function sumArray(array) {
//
//     if (array === null || array.length <= 2|| array.length === 0) {
//         return 0
//     }
//
//     return  array.sort((a,b)=>a-b).slice(1,array.length -1).reduce((el,acc)=>el+acc,0)
// }
// console.log(sumArray([ 5,8]))
/*
Учитывая строку, вы должны вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

Примеры (ввод -> вывод):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
 */
// function doubleChar(str) {
//     let res = []
//     for (let i = 0; i < str.length; i++) {
//        res.push(str[i])
//        res.push(str[i])
//     }
//
//     return res.join('')
// }

// console.log(doubleChar('String!_'))
/*
Я новичок в кодировании и теперь хочу получить сумму двух массивов... На самом деле сумму всех их элементов. Я буду признателен за вашу помощь.

PS Каждый массив включает только целые числа. Выход - тоже число.
 assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);

 */
// function arrayPlusArray(arr1, arr2) {
//     const result = [...arr1, ...arr2].reduce((el,acc)=>el+acc,0)
//
//     return result;
// }
//
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
/*
Вы спрашиваете маленькую девочку: «Сколько тебе лет?» Она всегда говорит «x лет», где x — случайное число от 0 до 9.
Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.
Предположим, что тестовая входная строка всегда является допустимой строкой. Например, тестовый ввод может быть
«1 год» или «5 лет». Первым символом в строке всегда является число.
    assert.strictEqual(getAge("4 years old"), 4);
 */

// function getAge(inputString){
//     return  +(inputString.split('')[0])
// }
//
// console.log(getAge('4 years old'))
/*
У всех животных праздник! Каждое животное приносит одно блюдо. Есть только одно правило: блюдо должно начинаться и заканчиваться
теми же буквами, что и имя животного. Например, большая голубая цапля приносит чесночный наан, а синица приносит шоколадный торт.
Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы
 указать, разрешено ли животному принести блюдо на пир.
Предположим, что beastи dishвсегда строчные строки, и каждая из них состоит как минимум из двух букв. beastи dishможет содержать
 дефисы и пробелы, но они не будут отображаться в начале или конце строки. Они не будут содержать цифр.
 Test.assertEquals(feast("great blue heron", "garlic naan"), true)
Test.assertEquals(feast("chickadee", "chocolate cake"), true)
Test.assertEquals(feast("brown bear", "bear claw"), false)
 */
// function feast(beast, dish) {
//     return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
//
// }
//
// console.log(feast("brown bear", "bear claw"))
/*
Одним из распространенных способов представления цвета является цветовая модель RGB, в которой красный, зеленый и синий
основные цвета света складываются различными способами для воспроизведения широкого спектра цветов.
Одним из способов определения яркости цвета является нахождение значения V альтернативной цветовой модели HSV
 (Hue, Saturation, Value). Значение определяется как наибольшая составляющая цвета:

V = max(R,G,B)
Вам дан список цветов в 6-значном шестнадцатеричном представлении #RRGGBB . Верните самый яркий из этих цветов!
Например,

brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
Если есть несколько самых ярких цветов, верните первый:

brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Обратите внимание, что и ввод, и вывод должны использовать символы верхнего регистра A, B, C, D, E, F.
 */
// function brightest(colors){
// let res = []
//     res=colors.map(el=>el)
// }
//
// console.log(brightest)
/*
Тролли атакуют ваш раздел комментариев!
Обычный способ справиться с этой ситуацией — удалить все гласные из комментариев троллей, нейтрализуя угрозу.
Ваша задача — написать функцию, которая принимает строку и возвращает новую строку, в которой удалены все гласные.
Например, строка «Этот сайт для неудачников, LOL!» станет «Ths wbst s fr lsrs LL!».
Примечание: для этой ката yне считается гласной.
 */
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, "")
// }
// console.log(disemvowel("This website is for losers LOL!"))
/*
Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию,
 определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой.
  Игнорировать регистр букв.
Пример: (Ввод --> Вывод)
"Дерматоглифика" --> истина "аба" --> ложь "moOse" --> ложь (игнорировать регистр букв)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
 */
// function isIsogram(str) {
//
//     let arr = str.toLowerCase().split('')
//     let mySet = new Set(arr)
//     let res = [...mySet].join('')
//      if(str.length === res.length){
//          return true
//      }
//     return  false
// }
//
// console.log(isIsogram('Dermatoglyphics'))
/*
Учитывая строку, состоящую из цифр [0-9], вернуть строку, в которой каждая цифра повторяется количество раз, равное ее значению.
Примеры
explode("312")
должен вернуться:

"333122"
explode("102269")
должен вернуться:

"12222666666999999999"
 */
// function explode(s) {
//     let arr = []
//     let res = s.split('')
//     for (let i = 0; i < s.length; i++) {
//          arr.push(res[i].repeat(+(res[i])))
//
//     }
//
//     return arr;
// }
//
// console.log(explode("312"))
/*
Джонни - фермер, и он ежегодно проводит съезд фермеров-свекловодов «Брось свеклу».
Каждый год он фотографирует рукопожатие фермеров. Джонни знает, что никакие два фермера не пожимают друг другу руки
больше одного раза. Он также знает, что некоторые из возможных комбинаций рукопожатий могут не состояться.

Однако Джонни хотел бы узнать минимальное количество людей, которые участвовали в этом году, просто подсчитав все рукопожатия.
Помогите Джонни, написав функцию, которая берет количество рукопожатий и возвращает минимальное количество людей,
необходимое для выполнения этих рукопожатий (пара фермеров рукопожатия только один раз).

    assert.strictEqual(getParticipants(0), 0)
    assert.strictEqual(getParticipants(1), 2)
    assert.strictEqual(getParticipants(3), 3)
    assert.strictEqual(getParticipants(6), 4)
    assert.strictEqual(getParticipants(7), 5)
 */
// function factorialRecursive(n) {
//     // Базовый случай: факториал 0 или 1 равен 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//
//     // Рекурсивный случай: умножаем число на факториал (n-1)
//     return n * factorialRecursive(n - 1);
// }
//
// // Пример использования
// console.log(factorialRecursive(5)); // Вывод: 120
// function factorialRecursive(n) {
//     // Базовый случай: факториал 0 или 1 равен 1
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     // Рекурсивный случай: умножаем число на факториал (n-1)
//     return n * factorialRecursive(n - 1);
// }
//
// function getParticipants(handshakes){
//     if(handshakes === 0){
//         return 0
//     }
//     if(handshakes === 3){
//         return 3
//     }
//     if(handshakes === 1){
//         return 2
//     }
//     return  factorialRecursive(handshakes)/(2*(factorialRecursive(handshakes-2)))
//
// }
//
// console.log(getParticipants(7))
/*
Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой строке соответствует
 "("тому, если этот символ появляется только один раз в исходной строке или ")"если этот символ появляется в исходной
  строке более одного раза. Игнорировать заглавные буквы при определении, является ли символ дубликатом.

Примеры
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Примечания
Сообщения об утверждениях могут быть неясными в отношении того, что они отображают на некоторых языках. Если вы читаете
 "...It Should encode XXX", "XXX"это ожидаемый результат, а не ввод!

 */
function duplicateEncode(word) {

    let res = []
    let w = word.split('')
    return res
}

//console.log(duplicateEncode("recede"))
/*
Если указано число от 0 до 9, верните его словами.

Вход :: 1

Выход :: "One".

Если ваш язык поддерживает это, попробуйте использовать
    assert.strictEqual(switchItUp(1),"One");
    assert.strictEqual(switchItUp(3),"Three");
 */
// function switchItUp(number) {
//     switch (number) {
//         case 0:
//             return 'Zero';
//         case 1:
//             return 'One';
//         case 2:
//             return 'Two'
//         case 3:
//             return 'Three'
//         case 4:
//             return 'Four'
//         case 5:
//             return 'Five'
//         case 6:
//             return 'Six'
//         case 7:
//             return 'Seven'
//         case 8:
//             return 'Eight'
//         case 9:
//             return 'Nine'
//         default:
//             return 'Zero'
//     }
//
// }
//
// console.log(switchItUp(4))
/*
Таракан – одно из самых быстрых насекомых. Напишите функцию, которая считывает скорость в км/ч и возвращает ее в см/с,
 округляя до целого числа в меньшую сторону (= с точностью до пола).
Например:
1.08 --> 30
Примечание! Ввод представляет собой вещественное число (фактический тип зависит от языка) и >= 0.
 Результат должен быть целым числом.
  assert.strictEqual(cockroachSpeed(1.08), 30);
  assert.strictEqual(cockroachSpeed(1.09), 30);
  assert.strictEqual(cockroachSpeed(0), 0);
  function cockroachSpeed(s) {

    let result = (s * 100000) / 3600
    if (s === 0) {
        return 0
    }

    return Math.floor(result)
}

console.log(cockroachSpeed(1.08))
 */


/*
Теперь вам нужно написать функцию, которая принимает аргумент и возвращает его квадрат.
 */
// function kvadrat(num) {
//     return num ** 2
// }
//
// console.log(kvadrat(3))
/*
Ваша задача для завершения этого Ката — написать функцию, которая форматирует продолжительность, заданную в виде количества секунд, удобным для человека способом.

Функция должна принимать неотрицательное целое число. Если он равен нулю, он просто возвращает "now". В противном случае продолжительность выражается как комбинация years, days, и .hoursminutesseconds

Гораздо проще понять на примере:

* For seconds = 62, your function should return
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
Для целей этого Ката год равен 365 дням, а день равен 24 часам.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из таких компонентов, как 4 seconds, 1 year, и т. д. Обычно это положительное целое число и одна из допустимых единиц времени, разделенные пробелом. Единица времени используется во множественном числе, если целое число больше 1.

Компоненты разделяются запятой и пробелом ( ", "). За исключением последнего компонента, который отделяется " and ", как если бы он был написан на английском языке.

Более значимые единицы времени будут происходить раньше, чем наименее значимые. Поэтому 1 second and 1 yearне правильно, а 1 year and 1 secondесть.

Разные компоненты имеют разную единицу измерения времени. Таким образом, нет повторяющихся единиц, как в 5 seconds and 1 second.

Компонент вообще не появится, если его значение равно нулю. Следовательно, 1 minute and 0 secondsнедействительно, но это должно быть просто 1 minute.

Единица времени должна использоваться «насколько это возможно». Это означает, что функция должна возвращать не 61 seconds, а 1 minute and 1 secondвместо этого. Формально продолжительность, указанная параметром компонента, не должна превышать любую допустимую более значащую единицу времени.

 assert.strictEqual(formatDuration(1), "1 second");
    assert.strictEqual(formatDuration(62), "1 minute and 2 seconds");
    assert.strictEqual(formatDuration(120), "2 minutes");
    assert.strictEqual(formatDuration(3600), "1 hour");
    assert.strictEqual(formatDuration(3662), "1 hour, 1 minute and 2 seconds");
  });
 */
// function formatDuration(seconds) {
//     if (seconds === 0) {
//         return "now";
//     }
//
//     const timeUnits = [
//         { unit: "year", duration: 365 * 24 * 60 * 60 },
//         { unit: "day", duration: 24 * 60 * 60 },
//         { unit: "hour", duration: 60 * 60 },
//         { unit: "minute", duration: 60 },
//         { unit: "second", duration: 1 }
//     ];
//
//     let result = [];
//
//     for (let i = 0; i < timeUnits.length; i++) {
//         const { unit, duration } = timeUnits[i];
//         if (seconds >= duration) {
//             const count = Math.floor(seconds / duration);
//             seconds %= duration;
//             result.push(`${count} ${unit}${count > 1 ? "s" : ""}`);
//         }
//     }
//
//     return result.join(", ").replace(/,([^,]*)$/, " and$1");
// }
//
//
// console.log(formatDuration(3600))


