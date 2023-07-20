//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку,
// состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()


function repeatString(str, rep, sep) {
    let result = str;
    for (let i = 1; i < rep; i++) {
        result += sep + str;
    }
    return result;
}

console.log(repeatString("yo", 3, " "))
console.log(repeatString("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается
// с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

function check(str, sep) {
    let str1 = str.toLowerCase();
    let sep1 = sep.toLowerCase();
    return str1.toLowerCase().includes(sep);
}

console.log(check("Incubator", "inc"));
console.log(check("Incubator", "yo"));

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
        str.slice(0, maxlength) + '…' : str;
}

console.log(truncate("Всем студентам инкубатора желаю удачи!", 10)) // => "Всем студе...")

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в
// предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
function getMinLengthWord(str) {
    if (!str) {
        return null;
    }
    const newStr = str.split(' ')
    let shortestWord = newStr[0]
    newStr.forEach((el) => {
        if (shortestWord.length > el.length) {
            shortestWord = el
        }

    })
    return shortestWord
}

console.log(getMinLengthWord("Всем студентам инкубатора желаю у!"))
console.log(getMinLengthWord(""))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение,
// где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"


function setUpperCase(sentence) {
    // Разбиваем предложение на слова
    const words = sentence.split(' ');

    // Преобразуем каждое слово: первую букву в верхний регистр, остальные - в нижний
    const transformedWords = words.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfLetters = word.slice(1).toLowerCase();
        return firstLetter + restOfLetters;
    });

    // Объединяем преобразованные слова в предложение
    return transformedWords.join(' ');
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!")); // "Всем Студентам Инкубатора Желаю Удачи!"
console.log(setUpperCase("ЭТО ПРОСТОЙ ТЕКСТ")); // "Это Простой Текст"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true