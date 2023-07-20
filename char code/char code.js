/*
Напишите функцию get_char()/ getChar(), которая принимает число и возвращает соответствующий символ ASCII для этого значения.

Пример:

get_char(65)
должен вернуться:
'A'
Для таблицы ASCII вы можете обратиться к http://www.asciitable.com/
Test.assertEquals(getChar(55),'7')
Test.assertEquals(getChar(56),'8')
Test.assertEquals(getChar(57),'9')
Test.assertEquals(getChar(58),':')
Test.assertEquals(getChar(59),';')
Test.assertEquals(getChar(60),'<')
Test.assertEquals(getChar(61),'=')
Test.assertEquals(getChar(62),'>')
Test.assertEquals(getChar(63),'?')
Test.assertEquals(getChar(64),'@')
Test.assertEquals(getChar(65),'A')
 */
function getChar(c){
    return String.fromCharCode(c);
}

console.log(getChar(65))