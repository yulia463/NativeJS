/*
BA вашего стартапа сообщил маркетологам, что у вашего веб-сайта большая аудитория в Скандинавии и соседних странах. Маркетинг считает, что было бы здорово приветствовать посетителей сайта на их родном языке. К счастью, вы уже используете API, который определяет местоположение пользователя, так что это легкая победа.

Задание
Подумайте о способе хранения языков в виде базы данных (например, объекта). Языки перечислены ниже, так что вы можете копировать и вставлять!
Напишите функцию «приветствия», которая принимает параметр «язык» (всегда строка) и возвращает приветствие, если оно есть в вашей базе данных. По умолчанию должен быть английский, если языка нет в базе данных или в случае неверного ввода.
База данных
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
Возможные недопустимые входные данные включают:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied
Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");

 */
// function greet(language) {
//     switch (language) {
//         case 'dutch':
//             // Код, выполняемый при совпадении со значением value1
//             return 'Welkom';
//         case 'czech':
//             return 'Vitejte';
//         case 'danish':
//             return 'Velkomst';
//         case 'estonian':
//             return 'Tere tulemast';
//         case 'finnish':
//             return 'Tervetuloa';
//         case 'flemish':
//             return 'Welgekomen';
//         case 'french':
//             return 'Bienvenue';
//         case 'german':
//             return 'Willkommen';
//         case 'irish':
//             return 'Failte';
//         case 'italian':
//             return 'Benvenuto';
//         case 'latvian':
//             return 'Gaidits';
//         case 'lithuanian':
//             return 'Laukiamas';
//         case 'polish':
//             return 'Witamy';
//         case 'spanish':
//             return 'Bienvenido';
//         case 'swedish':
//             return 'Valkommen';
//         case 'welsh':
//             return 'Croeso';
//
//         default:
//             // Код, выполняемый при отсутствии совпадений со значениями case
//             return 'Welcome';
//     }
//
// }
// console.log(greet('french'))

/*
Дети пьют тодди.
Подростки пьют колу.
Молодые люди пьют пиво.
Взрослые пьют виски.
Сделайте функцию, которая получает возраст и возвращает то, что они пьют.

Правила:

Дети до 14 лет.
Подростки до 18 лет.
Молодые до 21 года.
У взрослых 21 и более.
Примеры: (Ввод --> Вывод)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
    assert.strictEqual(peopleWithAgeDrink(22), 'drink whisky');
 */
// function peopleWithAgeDrink(old) {
//     if(old < 14){
//         return "drink toddy"
//     }
//     if(old < 18){
//         return "drink coke"
//     }
//     if(old < 21){
//         return "drink beer"
//     }
//    if(old >= 21){
//         return "drink whisky"
//     }
//
// }
// function peopleWithAgeDrink(old) {
//     switch (true) {
//         case old < 14:
//             return "drink toddy";
//         case old < 18:
//             return "drink coke";
//         case old < 21:
//             return "drink beer";
//         default:
//             return "drink whisky";
//     }
// }

// console.log(peopleWithAgeDrink(14))

/*
Ваша цель — вернуть таблицу умножения, поскольку numberона всегда является целым числом от 1 до 10.

Например, таблица умножения (строка) для number == 5выглядит следующим образом:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
PS Вы можете использовать \nin string для перехода на следующую строку.

Примечание: символы новой строки должны быть добавлены между строками, но в конце не должно быть завершающей новой строки.
 Если вы не уверены в формате, посмотрите примеры тестов.

assert.strictEqual(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
    assert.strictEqual(multiTable(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');

 */
// function multiTable(number) {
//
// }
//
// console.log(multiTable(5))