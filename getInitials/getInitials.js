/*
функция принимает имя и фамилию и возвращает инициалы
 */
function initials(str) {
    return str.split(' ').map(el=>el.charAt(0).toUpperCase()).join('.')
}

console.log(initials('Popov Viktor'))